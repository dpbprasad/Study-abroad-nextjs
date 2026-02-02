import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Study Abroad & Visa Questions Answered',
  description: 'Find answers to frequently asked questions about studying abroad, visa applications, university admissions, scholarships, documentation, and more. Get clarity on your international education queries.',
  keywords: ['FAQ', 'study abroad questions', 'visa FAQ', 'university admission questions', 'scholarship questions', 'student visa help', 'common questions'],
  openGraph: {
    title: 'FAQ - Study Abroad Questions Answered',
    description: 'Get answers to common questions about studying abroad and visa applications',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
