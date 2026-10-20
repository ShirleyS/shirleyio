import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Shirley Shaw · Solutions Architecture leader",
  description:
    "Solutions Architecture leader for growth-stage and enterprise teams. Built and led SA, Customer Success Engineering and Support at Clearbit (acq. HubSpot) and Demandbase. Now shipping production AI with Claude.",
  metadataBase: new URL("https://shirley.io"),
  openGraph: {
    title: "Shirley Shaw · Solutions Architecture leader",
    description:
      "Built and led SA, CSE and Support at Clearbit (acq. HubSpot) and Demandbase. Now shipping production AI with Claude.",
    type: "website",
    url: "https://shirley.io",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shirley Shaw, Solutions Architecture leader" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirley Shaw · Solutions Architecture leader",
    description:
      "Built and led SA, CSE and Support at Clearbit (acq. HubSpot) and Demandbase. Now shipping production AI with Claude.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23181818'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-family='ui-serif,Georgia' font-size='17' fill='%23f6f2ea'%3ES%3C/text%3E%3C/svg%3E",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
