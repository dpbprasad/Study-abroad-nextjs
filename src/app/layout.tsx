import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

export const metadata: Metadata = {
  title: "Study Abroad Immigration Consultation Service",
  description: "Visa Made Easy Dreams Made Possible - Expert study abroad consultation services",
  authors: [
    { name: "Danushka Bandara", url: "https://danushkabandara.com/" }
  ],
  creator: "BINARIZE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/vendor/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sofia&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
