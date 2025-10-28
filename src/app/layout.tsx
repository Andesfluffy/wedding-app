import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
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
