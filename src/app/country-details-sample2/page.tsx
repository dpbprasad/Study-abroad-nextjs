import Breadcrumb from '@/components/common/Breadcrumb';
import CountryDetailsSample2Section from '@/components/countries/CountryDetailsSample2Section';
import './country-details-sample2.css';

export default function CountryDetailsSample2Page() {
  return (
    <>
      <Breadcrumb
        title="Country Details Sample 2"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Country Details Sample 2' }
        ]}
      />
      <CountryDetailsSample2Section />
    </>
  );
}
