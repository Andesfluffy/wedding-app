import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Theophilus & Joan - Kingdom Hall Wedding",
  description:
    "Celebrate Theophilus Oyeyemi and Joan Ogogo on November 29, 2025. Discover the wedding day schedule, travel notes, wedding party, and RSVP details for their vibrant Kingdom Hall celebration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
