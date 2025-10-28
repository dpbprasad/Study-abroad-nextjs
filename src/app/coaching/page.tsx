import Breadcrumb from '@/components/common/Breadcrumb';
import CoachingSection from '@/components/coaching/CoachingSection';
import UniversityLogos from '@/components/home/UniversityLogos';

export const metadata = {
  title: 'Coaching | Study Abroad Consultancy',
  description: 'Professional coaching for IELTS, TOEFL, PTE, SAT and more',
};

export default function CoachingPage() {
  return (
    <main>
      <Breadcrumb
        title="Coaching"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Coaching', active: true }
        ]}
      />

      <CoachingSection />
      <UniversityLogos grayBg={false} />
    </main>
  );
}
