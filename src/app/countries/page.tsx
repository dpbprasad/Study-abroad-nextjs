import Breadcrumb from '@/components/common/Breadcrumb';
import CountriesSection from '@/components/countries/CountriesSection';
import './countries.css';

export default function CountriesPage() {
  return (
    <>
      <Breadcrumb
        title="Countries"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Countries' }
        ]}
      />
      <CountriesSection />
    </>
  );
}
