import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Study Abroad Consultation & Support',
  description: 'Get in touch with our expert study abroad consultants. Schedule a free consultation for university selection, visa assistance, and international education guidance. We are here to help.',
  keywords: ['contact us', 'study abroad consultation', 'free consultation', 'visa support', 'education counseling', 'get in touch'],
  openGraph: {
    title: 'Contact Us - Study Abroad Consultation',
    description: 'Reach out for expert guidance on your study abroad journey',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
