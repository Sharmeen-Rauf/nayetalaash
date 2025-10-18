import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naye Talaash",
  description: "Naye Talaash Travel Agency",
  keywords: ["Naye Talaash", "Travel Agency", "Pakistan", "Travel", "Tourism"],
  authors: [{ name: "Naye Talaash", url: "https://nayetalaash.com" }],
  creator: "Naye Talaash",
  publisher: "Naye Talaash",
  openGraph: {
    title: "Naye Talaash",
    description: "Naye Talaash Travel Agency",
    url: "https://nayetalaash.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
