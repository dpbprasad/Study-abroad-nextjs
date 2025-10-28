import Breadcrumb from '@/components/common/Breadcrumb';
import TeamSection from '@/components/team/TeamSection';

export const metadata = {
  title: 'Team | Study Abroad Consultancy',
  description: 'Meet our expert team of education counselors and visa consultants',
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
