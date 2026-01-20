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
      { url: "/images/Icon... black.png", media: "(prefers-color-scheme: light)" },
      { url: "/images/Icon... white.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/images/Icon... black.png",
    apple: "/images/Icon... black.png",
  },
  openGraph: {
    title: "Naye Talaash",
    description: "Naye Talaash Travel Agency",
    url: "https://nayetalaash.com",
    images: ["/images/Icon... black.png"],
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
        <link rel="icon" type="image/png" href="/images/Icon... black.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" href="/images/Icon... white.png" media="(prefers-color-scheme: dark)" />
        {/* Fallback favicon */}
        <link rel="icon" type="image/png" href="/images/Icon... black.png" />
        <link rel="shortcut icon" type="image/png" href="/images/Icon... black.png" />
        <link rel="apple-touch-icon" href="/images/Icon... black.png" />
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
