import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceDetailsSection from '@/components/services/ServiceDetailsSection';
import './services.css';

export const metadata: Metadata = {
  title: 'Our Services - Study Abroad Consultation & Visa Assistance',
  description: 'Comprehensive study abroad services including university selection, visa application assistance, IELTS/TOEFL/OET preparation, documentation support, and personalized consultation.',
  keywords: ['study abroad services', 'visa assistance', 'university selection', 'IELTS preparation', 'TOEFL coaching', 'OET training', 'student visa', 'application support'],
  openGraph: {
    title: 'Study Abroad Services - Visa & University Assistance',
    description: 'Complete study abroad services from consultation to visa approval',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        title="Our Services"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Our Services' }
        ]}
      />
      <ServiceDetailsSection />
    </>
  );
}
