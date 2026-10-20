import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogShell from '@/components/BlogShell';
import { posts, getPost, formatDate, SITE_URL } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | ForConnect`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    inLanguage: 'nl-NL',
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Person', name: 'Milos Stevanovic' },
    publisher: { '@type': 'Organization', name: 'ForConnect', url: SITE_URL },
  };

  return (
    <BlogShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-2xl">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-[#00F0FF] transition">
          &larr; Alle artikelen
        </Link>
        <p className="text-xs text-gray-400 mt-6">
          {formatDate(post.date)} · {post.readMinutes} min lezen
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2">{post.title}</h1>
        <p className="text-gray-300 mt-4">{post.description}</p>

        <div className="relative mt-8 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_#00F0FF22]">
          <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_#00F0FF22]" />
        </div>

        {post.intro?.map((para, i) => (
          <p key={i} className={`text-gray-300 leading-relaxed ${i === 0 ? 'mt-8' : 'mt-3'}`}>
            {para}
          </p>
        ))}

        {post.sections.map((s, i) => (
          <section key={i} className="mt-10">
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            {s.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                {s.stats.map((st, k) => (
                  <div
                    key={k}
                    className="p-5 rounded-xl border border-cyan-500/30 bg-[#020617]/70 shadow-[0_0_20px_#00F0FF15]"
                  >
                    <div className="text-3xl font-bold text-[#00F0FF]">{st.value}</div>
                    <div className="text-xs text-gray-400 mt-2">{st.label}</div>
                  </div>
                ))}
              </div>
            )}
            {s.paragraphs?.map((para, j) => (
              <p key={j} className="text-gray-300 leading-relaxed mt-3">
                {para}
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-4 space-y-3">
                {s.bullets.map((b, k) => (
                  <li key={k} className="flex gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-14 p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 to-slate-900 shadow-lg">
          <h2 className="text-xl font-bold">Hoor zelf hoe het klinkt</h2>
          <p className="text-gray-300 text-sm mt-2">
            {post.closing ??
              'Plan een live demo of bel direct de demo-lijn. 14 dagen gratis proberen, geen creditcard nodig.'}
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <Link
              href="/#demo"
              className="px-6 py-3 bg-[#00F0FF] text-[#020617] rounded-full font-semibold shadow-[0_0_20px_#00F0FF88] hover:bg-[#66F6FF] transition"
            >
              Plan een demo
            </Link>
            <a
              href="tel:+31266690470"
              className="px-6 py-3 rounded-full border border-gray-600 hover:border-[#00F0FF] transition"
            >
              Bel de demo-lijn
            </a>
          </div>
        </div>
      </article>
    </BlogShell>
  );
}
