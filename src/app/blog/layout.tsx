import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Study Abroad Tips, Guides & Resources',
  description: 'Expert advice and insights on studying abroad, visa applications, university admissions, scholarships, test preparation, and international student life. Stay updated with the latest education trends.',
  keywords: ['study abroad blog', 'visa guides', 'university admission tips', 'IELTS tips', 'scholarship advice', 'international education', 'student life abroad'],
  openGraph: {
    title: 'Study Abroad Blog - Tips, Guides & Resources',
    description: 'Expert insights and advice for international students',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
