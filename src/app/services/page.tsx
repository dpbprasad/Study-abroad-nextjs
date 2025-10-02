import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceDetailsSection from '@/components/services/ServiceDetailsSection';
import './services.css';

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
