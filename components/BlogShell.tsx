import Link from 'next/link';
import React from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Hoe het werkt', href: '/#how' },
  { label: 'Voor wie', href: '/#forwho' },
  { label: 'Voordelen', href: '/#benefits' },
  { label: 'Prijzen', href: '/#pricing' },
  { label: 'Demo', href: '/#demo' },
  { label: 'Contact', href: '/#demo' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
];

export default function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#040815] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40 blur-3xl">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#00F0FF33]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00F0FF22]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-6">
        <header className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl border border-[#00F0FF55] shadow-[0_0_20px_#00F0FF66]">
              <span className="text-xl text-[#00F0FF] font-bold">F</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">ForConnect</div>
              <div className="text-xs text-[#9CA3AF]">AI Voice Agent</div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            {links.map((l, i) => (
              <Link key={i} href={l.href} className="hover:text-[#00F0FF] transition">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Link href="/" className="text-sm text-gray-300 hover:text-[#00F0FF] transition">
              Home
            </Link>
          </div>
        </header>

        <main className="pt-10">{children}</main>

        <footer className="mt-24 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p className="font-semibold text-white mb-1">ForConnect</p>
          <p>Gemaakt voor fysiopraktijken in Nederland.</p>
          <p className="mt-1">KVK: 42126595 · +31 6 34 48 37 01</p>
          <p className="mt-4">&copy; 2026 ForConnect. Alle rechten voorbehouden.</p>
        </footer>
      </div>
    </div>
  );
}
