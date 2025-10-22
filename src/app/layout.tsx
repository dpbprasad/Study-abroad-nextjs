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
      <body suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
