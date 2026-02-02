import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import TestAboutCompanySection from '@/components/about/TestAboutCompanySection';
import ProcessSection from '@/components/home/ProcessSection';
import SuccessCountSection from '@/components/home/SuccessCountSection';
import UniversityLogos from '@/components/home/UniversityLogos';
import ContactSection from '@/components/about/ContactSection';

export const metadata: Metadata = {
  title: 'About Us - Study Abroad Immigration Consultation Service',
  description: 'Learn about our mission to make studying abroad accessible and stress-free. Expert guidance for international education, visa assistance, and university applications worldwide.',
  keywords: ['about us', 'study abroad consultancy', 'education consultants', 'international education', 'visa experts', 'university admissions'],
  openGraph: {
    title: 'About Us - Study Abroad Immigration Consultation',
    description: 'Expert study abroad consultancy helping students achieve their international education dreams',
    type: 'website',
  },
};

export default function TestAboutUsPage() {
  return (
    <>
      <Breadcrumb
        title="About Us - Test"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Test About Us', active: true }
        ]}
      />

      <TestAboutCompanySection />

      <ProcessSection variant="about" />

      <SuccessCountSection grayBg={false} noTopPadding={true} />

      <UniversityLogos grayBg={false} />

      <div className="pb-120">
        <ContactSection />
      </div>
    </>
  );
}
