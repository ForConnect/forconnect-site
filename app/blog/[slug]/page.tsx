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

        {post.sections.map((s, i) => (
          <section key={i} className="mt-10">
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            {s.paragraphs.map((para, j) => (
              <p key={j} className="text-gray-300 leading-relaxed mt-3">
                {para}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-14 p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 to-slate-900 shadow-lg">
          <h2 className="text-xl font-bold">Hoor zelf hoe het klinkt</h2>
          <p className="text-gray-300 text-sm mt-2">
            Plan een live demo of bel direct de demo-lijn. 14 dagen gratis proberen, geen creditcard nodig.
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
