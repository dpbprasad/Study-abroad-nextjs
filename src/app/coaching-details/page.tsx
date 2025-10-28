import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceDetailsSection from '@/components/services/ServiceDetailsSection';

export const metadata = {
  title: 'Coaching Details | Study Abroad Consultancy',
  description: 'Detailed information about our coaching services',
};

export default function CoachingDetailsPage() {
  return (
    <main>
      <Breadcrumb
        title="Coaching Details"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Coaching Details', active: true }
        ]}
      />

      <ServiceDetailsSection />
    </main>
  );
}
