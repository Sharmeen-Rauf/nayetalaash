import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

// Autography font via @font-face in globals.css
const autography = {
  variable: "--font-autography",
};

export const metadata: Metadata = {
  title: "Naye Talaash",
  description: "Naye Talaash Travel Agency",
  keywords: ["Naye Talaash", "Travel Agency", "Pakistan", "Travel", "Tourism"],
  authors: [{ name: "Naye Talaash", url: "https://nayetalaash.com" }],
  creator: "Naye Talaash",
  publisher: "Naye Talaash",
  icons: {
    icon: [
      { url: "/favicon.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Naye Talaash",
    description: "Naye Talaash Travel Agency",
    url: "https://nayetalaash.com",
    images: ["/favicon.png"],
  },
  metadataBase: new URL("https://nayetalaash.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Theme-based favicons */}
        <link rel="icon" type="image/png" href="/favicon.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" href="/favicon-dark.png" media="(prefers-color-scheme: dark)" />
        {/* Fallback favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preload" href="/images/Home Banner - Idea.jpg" as="image" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
