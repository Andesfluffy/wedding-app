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
  title: "Aurora & Milan - Wedding Celebration",
  description:
    "Celebrate the wedding weekend with Aurora Lane and Milan Reyes. Find the schedule, travel details, wedding party, and RSVP all in one elegant invitation.",
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
