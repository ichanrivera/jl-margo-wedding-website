import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "John Lauren & Marjolyn | November 14, 2026",
  description:
    "Together with our families, we invite you to celebrate our wedding on November 14, 2026 at Casa Dali Bato, Bato, Camarines Sur.",
  openGraph: {
    title: "John Lauren & Marjolyn — We’re getting married",
    description:
      "Join us on November 14, 2026 at nine in the morning. Casa Dali Bato, Bato, Camarines Sur.",
    type: "website",
    locale: "en_PH",
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
