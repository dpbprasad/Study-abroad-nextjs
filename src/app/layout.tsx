import type { Metadata } from "next";
import { Sofia } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

// Optimize Google Fonts with next/font
const sofia = Sofia({
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sofia'
});

export const metadata: Metadata = {
  title: "Study Abroad Immigration Consultation Service",
  description: "Visa Made Easy Dreams Made Possible - Expert study abroad consultation services",
  authors: [
    { name: "Danushka Bandara", url: "https://danushkabandara.com/" }
  ],
  creator: "BINARIZE",
  keywords: ["study abroad", "immigration", "visa consultation", "student visa", "education abroad"],
  openGraph: {
    title: "Study Abroad Immigration Consultation Service",
    description: "Visa Made Easy Dreams Made Possible",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sofia.variable}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>

        {/* Bootstrap JS - loaded after interactive for better performance */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
