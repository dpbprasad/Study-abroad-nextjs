import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import TeamSection from '@/components/team/TeamSection';

export const metadata: Metadata = {
  title: 'Our Team - Expert Study Abroad Consultants & Advisors',
  description: 'Meet our experienced team of education counselors, visa consultants, and study abroad advisors. Dedicated professionals committed to helping students achieve their international education goals.',
  keywords: ['study abroad consultants', 'education advisors', 'visa experts', 'international education counselors', 'our team', 'meet the team'],
  openGraph: {
    title: 'Our Expert Study Abroad Team',
    description: 'Professional education consultants helping students worldwide',
    type: 'website',
  },
};

export default function TeamPage() {
  return (
    <main>
      <Breadcrumb
        title="Team"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Team', active: true }
        ]}
      />

      <TeamSection />
    </main>
  );
}
