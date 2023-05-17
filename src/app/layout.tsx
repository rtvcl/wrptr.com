import Navigation from "@/components/navigation";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import React from "react";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "wrptr | data detective",
  description:
    "Product Manager with a love for problem-solving and uncovering insights through data analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} bg-[#fafafa] `}
        suppressHydrationWarning={true}
      >
          <Navigation />
          {children}
      </body>
    </html>
  );
}
