import Breadcrumb from '@/components/common/Breadcrumb';
import TestAboutCompanySection from '@/components/about/TestAboutCompanySection';
import ProcessSection from '@/components/home/ProcessSection';
import SuccessCountSection from '@/components/home/SuccessCountSection';
import UniversityLogos from '@/components/home/UniversityLogos';
import ContactSection from '@/components/about/ContactSection';

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

      <SuccessCountSection grayBg={false} />

      <UniversityLogos grayBg={false} />

      <div className="pb-120">
        <ContactSection />
      </div>
    </>
  );
}
