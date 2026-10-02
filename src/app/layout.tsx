import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const serif = localFont({
  src: [
    { path: "./fonts/cormorant-garamond.ttf", weight: "400", style: "normal" },
    {
      path: "./fonts/cormorant-garamond-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});
const sans = localFont({
  src: "./fonts/dm-sans.ttf",
  variable: "--font-sans",
  display: "swap",
});
const script = localFont({
  src: "./fonts/pinyon-script.ttf",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "John Lauren & Marjolyn | November 14, 2026",
  description:
    "Together with our families, we invite you to celebrate our wedding on November 14, 2026 at Casa Dali Bato, Bato, Camarines Sur.",
  openGraph: {
    title: "John Lauren & Marjolyn — We’re getting married",
    description:
      "Join us on November 14, 2026 at nine in the morning. Casa Dali Bato, Bato, Camarines Sur.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "John Lauren & Marjolyn wedding invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Lauren & Marjolyn — We’re getting married",
    description:
      "Join us on November 14, 2026 at nine in the morning. Casa Dali Bato, Bato, Camarines Sur.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
