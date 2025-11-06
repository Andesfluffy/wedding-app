import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/footer";

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
  title: "Joan & Theophilus",
  description:
    "Celebrate Theophilus and Joan on November 29. Explore the schedule and details of their wedding party",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} bg-cream antialiased`}
      >
        <Suspense fallback={null}>
          <Navigation />
        </Suspense>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
