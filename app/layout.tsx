import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
