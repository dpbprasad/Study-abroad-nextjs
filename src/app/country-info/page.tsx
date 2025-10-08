import Breadcrumb from '@/components/common/Breadcrumb';
import CountryDetailsModernSection from '@/components/countries/CountryDetailsModernSection';
import './country-info.css';

export default function CountryInfoPage() {
  return (
    <>
      <Breadcrumb
        title="Country Information"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Country Info' }
        ]}
      />
      <CountryDetailsModernSection />
    </>
  );
}
