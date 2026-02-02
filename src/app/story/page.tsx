import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import StorySection from '@/components/story/StorySection';

export const metadata: Metadata = {
  title: 'Success Stories - Study Abroad Student Testimonials',
  description: 'Read inspiring success stories from students who achieved their study abroad dreams. Real testimonials and experiences from international students studying in Canada, USA, UK, Australia, and more.',
  keywords: ['success stories', 'student testimonials', 'study abroad experiences', 'international student reviews', 'visa success', 'university admission stories'],
  openGraph: {
    title: 'Student Success Stories - Study Abroad Testimonials',
    description: 'Inspiring stories from students who achieved their international education dreams',
    type: 'website',
  },
};

export default function StoryPage() {
  return (
    <>
      <Breadcrumb
        title="Success Story"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Success Story' }
        ]}
      />
      <StorySection />
    </>
  );
}
