import Breadcrumb from '@/components/common/Breadcrumb';
import AboutCompanySection from '@/components/about/AboutCompanySection';
import ChooseUsSection from '@/components/home/ChooseUsSection';
import ProcessSection from '@/components/home/ProcessSection';
import SuccessCountSection from '@/components/home/SuccessCountSection';
import UniversityLogos from '@/components/home/UniversityLogos';
import ContactSection from '@/components/about/ContactSection';

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        title="About Us"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', active: true }
        ]}
      />

      <AboutCompanySection />

      <ChooseUsSection grayBg={false} />

      <ProcessSection variant="about" />

      <SuccessCountSection grayBg={false} />

      <UniversityLogos grayBg={false} />

      <div className="pb-120">
        <ContactSection />
      </div>
    </>
  );
}
