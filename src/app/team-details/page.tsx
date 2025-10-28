import Breadcrumb from '@/components/common/Breadcrumb';
import TeamDetailsContent from '@/components/team/TeamDetailsContent';

export const metadata = {
  title: 'Team Details | Study Abroad Consultancy',
  description: 'Learn more about our expert team members',
};

export default function TeamDetailsPage() {
  return (
    <main>
      <Breadcrumb
        title="Team Details"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Team Details', active: true }
        ]}
      />

      <TeamDetailsContent />
    </main>
  );
}
