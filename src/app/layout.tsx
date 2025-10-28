import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import StyleLoader from "@/components/StyleLoader";

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
        <StyleLoader />
        <Script
          id="load-styles"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var styles = [
                  '/assets/css/vendor/animate.min.css',
                  '/assets/css/plugins/swiper.min.css',
                  '/assets/css/vendor/fontawesome-pro.css',
                  '/assets/css/vendor/spacing.css',
                  '/assets/css/main.css'
                ];
                styles.forEach(function(href) {
                  var link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = href;
                  document.head.appendChild(link);
                });
                var preconnect1 = document.createElement('link');
                preconnect1.rel = 'preconnect';
                preconnect1.href = 'https://fonts.googleapis.com';
                document.head.appendChild(preconnect1);
                var preconnect2 = document.createElement('link');
                preconnect2.rel = 'preconnect';
                preconnect2.href = 'https://fonts.gstatic.com';
                preconnect2.crossOrigin = '';
                document.head.appendChild(preconnect2);
                var fontLink = document.createElement('link');
                fontLink.rel = 'stylesheet';
                fontLink.href = 'https://fonts.googleapis.com/css2?family=Sofia&display=swap';
                document.head.appendChild(fontLink);
              })();
            `,
          }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
