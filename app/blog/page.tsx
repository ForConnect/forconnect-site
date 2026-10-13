import type { Metadata } from 'next';
import Link from 'next/link';
import BlogShell from '@/components/BlogShell';
import { posts, formatDate, SITE_URL } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | ForConnect',
  description:
    'Praktische artikelen voor fysiopraktijken: gemiste oproepen, bereikbaarheid en meer tijd voor uw patienten.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <BlogShell>
      <h1 className="text-3xl lg:text-4xl font-bold">Blog</h1>
      <p className="text-gray-300 text-sm mt-3 max-w-xl">
        Praktische tips voor fysiopraktijken over bereikbaarheid, gemiste oproepen en meer tijd voor uw patienten.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {sorted.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block p-6 rounded-xl border border-gray-800 bg-[#020617]/70 transition-all duration-300 hover:border-[#00F0FF] hover:shadow-[0_0_25px_#00F0FF33]"
          >
            <p className="text-xs text-gray-400">
              {formatDate(p.date)} · {p.readMinutes} min lezen
            </p>
            <h2 className="text-xl font-semibold mt-2">{p.title}</h2>
            <p className="text-sm text-gray-400 mt-3">{p.description}</p>
            <span className="inline-block mt-4 text-sm text-[#00F0FF]">Lees verder</span>
          </Link>
        ))}
      </div>
    </BlogShell>
  );
}
