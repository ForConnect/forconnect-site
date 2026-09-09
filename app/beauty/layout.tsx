import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ForConnect - AI voice agent voor beauty salons",
  description:
    "AI telefoonassistent voor beauty salons en nagelstudio's. Geen gemiste afspraken meer - vraagt door naar de gewenste behandeling en stuurt dit direct naar u door.",
  openGraph: {
    title: "ForConnect - AI voice agent voor beauty salons",
    description:
      "AI telefoonassistent voor beauty salons en nagelstudio's. Geen gemiste afspraken meer.",
    url: "https://forconnect.nl/beauty",
    siteName: "ForConnect",
    locale: "nl_NL",
    type: "website",
    // images: ["/beauty-og-image.png"], // optioneel: eigen preview-afbeelding, anders erft hij de standaard og-image.png
  },
};

export default function BeautyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
