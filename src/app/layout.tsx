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
  title: "Theophilus & Joan - Lagos Celebration",
  description:
    "Celebrate Theophilus and Joan on November 29, 2025 in Magodo, Lagos. Explore the schedule, travel notes, wedding party, and RSVP details for their colourful Kingdom Hall ceremony and reception.",
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
