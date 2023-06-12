import Navigation from "@/components/navigation";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "wrptr | product enthusiast",
  description:
    "Hailing from the tech world, I'm on a thrilling mission to discover the perfect fusion of Business, Tech, and Design. Armed with this powerful trifecta, I'm geared up to tackle user problems head-on as a Product Manager.",
  openGraph: {
    title: 'wrptr | product enthusiast',
    description: 'Product Manager, Developer, Creator.',
    url: 'https://wrptr.com',
    siteName: 'wrptr | product enthusiast',
    images: [
      {
        url: 'https://wrptr.com/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'wrptr | product enthusiast',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} bg-[#fafafa] `}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
