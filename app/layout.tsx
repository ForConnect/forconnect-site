import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForConnect - AI voice agent",
  description: "AI telefoonassistent voor fysiopraktijken. Geen gemiste oproepen meer.",
  icons: {
    icon: "/favicon_new.ico",
  },
  openGraph: {
    title: "ForConnect - AI voice agent",
    description: "AI telefoonassistent voor fysiopraktijken. Geen gemiste oproepen meer.",
    url: "https://forconnect.nl",
    siteName: "ForConnect",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ForConnect - AI voice agent",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        {/* Google Ads / Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17907678375"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17907678375');
            gtag('config', 'G-KEV8C2GPZZ');
          `}
        </Script>
      </head>

      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>

        {/* Retell chat widget */}
        <Script
          id="retell-widget"
          src="https://dashboard.retellai.com/retell-widget-v2.js"
          type="module"
          strategy="afterInteractive"
          data-public-key="public_key_e3f1f140c69972a1367ba"
          data-agent-id="agent_8d5f70931454b5c4584dfd1a51"
          data-title="ForConnect Assistent"
          data-bot-name="Sanne"
          data-fab-text="Vragen? Chat met Sanne"
          data-popup-message="Hoi! Kan ik u ergens mee helpen?"
          data-theme-color="#040815"
          data-component-color="#00B8D4"
          data-logo-url="/logo.svg"
        />
      </body>
    </html>
  );
}