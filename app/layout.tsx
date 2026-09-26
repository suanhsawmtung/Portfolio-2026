import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suanh Sawm Tung (Augustine) — Software Developer",
  description:
    "Personal portfolio of Suanh Sawm Tung, a software developer from Myanmar.",
  icons: {
    icon: [
      // {
      //   url: "/icon-light-32x32.png",
      //   media: "(prefers-color-scheme: light)",
      // },
      // {
      //   url: "/icon-dark-32x32.png",
      //   media: "(prefers-color-scheme: dark)",
      // },
      // {
      //   url: "/icon.svg",
      //   type: "image/svg+xml",
      // },
      {
        url: "/profile.png",
      },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Suanh Sawm Tung (Augustine) | Software Developer",
    description: "Software Developer · Full-Stack Web & Mobile",
    url: "https://suanhsawmtung.vercel.app/",
    siteName: "Suanh Sawm Tung (Augustine)",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suanh Sawm Tung (Augustine) - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Suanh Sawm Tung (Augustine) | Software Developer",
    description: "Software Developer · Full-Stack Web & Mobile",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
