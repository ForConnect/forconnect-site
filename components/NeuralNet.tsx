'use client';

type Pt = [number, number];
type Layer = { x: number; n: number };

const H = 740;
const DUR = 26;

function build(layers: Layer[], seed: number) {
  const nodes: Pt[] = [];
  const layerIdx: number[][] = [];
  layers.forEach((l, li) => {
    const idx: number[] = [];
    for (let i = 0; i < l.n; i++) {
      const y = (i / Math.max(l.n - 1, 1)) * (H + 100) - 50 + Math.sin((i + 1) * (li + seed) * 1.7) * 18;
      const x = l.x + Math.cos((i + seed) * (li + 3) * 1.3) * 10;
      idx.push(nodes.length);
      nodes.push([x, y]);
    }
    layerIdx.push(idx);
  });

  const edges: [number, number][] = [];
  const adj = new Map<number, number[]>();
  const link = (a: number, b: number) => {
    edges.push([a, b]);
    adj.set(a, [...(adj.get(a) ?? []), b]);
    adj.set(b, [...(adj.get(b) ?? []), a]);
  };
  for (let li = 0; li < layerIdx.length - 1; li++) {
    const a = layerIdx[li];
    const b = layerIdx[li + 1];
    const seen = new Set<string>();
    const add = (from: number, to: number) => {
      const key = `${from}-${to}`;
      if (seen.has(key)) return;
      seen.add(key);
      link(from, to);
    };
    a.forEach((from, i) => {
      const c = Math.round((i / Math.max(a.length - 1, 1)) * (b.length - 1));
      add(from, b[c]);
      const j = c + ((i + seed) % 2 === 0 ? 1 : -1);
      if (j >= 0 && j < b.length) add(from, b[j]);
    });
    // every node in the next layer gets at least one incoming link, so the net stays connected
    b.forEach((to, j) => {
      if (![...seen].some((k) => k.endsWith(`-${to}`))) {
        const i = Math.round((j / Math.max(b.length - 1, 1)) * (a.length - 1));
        add(a[i], to);
      }
    });
  }

  layerIdx.forEach((ids) => {
    ids.forEach((n, i) => {
      if (i < ids.length - 1 && (i + seed) % 2 === 0) link(n, ids[i + 1]);
    });
  });

  // every node must be joined to at least 3 neighbours (nearest ones), so no dot hangs loose
  nodes.forEach((pt, i) => {
    const linked = new Set(adj.get(i) ?? []);
    if (linked.size >= 3) return;
    nodes
      .map((q, j) => ({ j, d: Math.hypot(q[0] - pt[0], q[1] - pt[1]) }))
      .filter(({ j }) => j !== i && !linked.has(j))
      .sort((a, b) => a.d - b.d)
      .slice(0, 3 - linked.size)
      .forEach(({ j }) => link(i, j));
  });

  // signals travel in every direction: deterministic random walks over the undirected graph
  const chains: number[][] = [];
  for (let k = 0; k < 6; k++) {
    let cur = (k * 5 + seed * 3) % nodes.length;
    const chain = [cur];
    let prev = -1;
    for (let step = 0; step < 5; step++) {
      const opts = (adj.get(cur) ?? []).filter((n) => n !== prev);
      if (!opts.length) break;
      const next = opts[(k + step * 2 + seed) % opts.length];
      prev = cur;
      cur = next;
      chain.push(cur);
    }
    chains.push(chain);
  }
  return { nodes, edges, chains };
}

const LEFT = build([{ x: 22, n: 5 }, { x: 100, n: 5 }, { x: 178, n: 4 }, { x: 250, n: 5 }, { x: 320, n: 4 }], 2);
const RIGHT = build([{ x: 28, n: 4 }, { x: 108, n: 5 }, { x: 190, n: 5 }, { x: 262, n: 4 }, { x: 330, n: 5 }], 5);

function Net({ net, flip }: { net: ReturnType<typeof build>; flip?: boolean }) {
  const { nodes, edges, chains } = net;
  return (
    <svg
      viewBox="30 0 330 740"
      className="h-full w-full"
      style={{
        transform: flip ? 'scaleX(-1)' : undefined,
        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
        maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
      }}
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#00F0FF" strokeOpacity="0.14" strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.4" fill="#00F0FF" fillOpacity="0.38" />
      ))}
      {chains.map((chain, k) => {
        const begin = `${k * 4.2}s`;
        const pts = chain.map((n) => nodes[n]);
        const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
        const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
        const total = seg.reduce((a, b) => a + b, 0) || 1;
        let acc = 0;
        const times = pts.map((_, i) => {
          if (i > 0) acc += seg[i - 1];
          return Math.min(0.84, Math.max(0.04, 0.85 * (acc / total)));
        });
        return (
          <g key={`c${k}`}>
            <circle r="2.2" fill="#7CF7FF" opacity="0">
              <animateMotion path={d} dur={`${DUR}s`} begin={begin} repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;0.85;1" />
              <animate attributeName="opacity" values="0;0.55;0.55;0;0" keyTimes="0;0.05;0.84;0.88;1" dur={`${DUR}s`} begin={begin} repeatCount="indefinite" />
            </circle>
            {pts.map(([x, y], i) => {
              const t = times[i];
              return (
                <circle key={i} cx={x} cy={y} r="9" fill="#00F0FF" opacity="0">
                  <animate
                    attributeName="opacity"
                    values="0;0;0.26;0;0"
                    keyTimes={`0;${(t - 0.005).toFixed(3)};${t.toFixed(3)};${Math.min(0.99, t + 0.18).toFixed(3)};1`}
                    dur={`${DUR}s`} begin={begin} repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

export default function NeuralNet() {
  return (
    <div className="pointer-events-none fixed inset-y-0 left-0 right-0 hidden xl:block" style={{ zIndex: 5 }} aria-hidden="true">
      <div className="absolute left-0 top-0 h-full w-[27vw] max-w-[460px]"><Net net={LEFT} /></div>
      <div className="absolute right-0 top-0 h-full w-[27vw] max-w-[460px]"><Net net={RIGHT} flip /></div>
    </div>
  );
}
