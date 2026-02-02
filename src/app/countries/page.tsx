import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import CountriesSection from '@/components/countries/CountriesSection';
import './countries.css';

export const metadata: Metadata = {
  title: 'Study Destinations - Countries for International Education',
  description: 'Explore top study abroad destinations including Canada, USA, UK, Australia, and more. Compare universities, costs, visa requirements, and education opportunities worldwide.',
  keywords: ['study destinations', 'study in Canada', 'study in USA', 'study in UK', 'study in Australia', 'international universities', 'study abroad countries'],
  openGraph: {
    title: 'Top Study Abroad Destinations - Countries & Universities',
    description: 'Discover the best countries and universities for your international education journey',
    type: 'website',
  },
};

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
