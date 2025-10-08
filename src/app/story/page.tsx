import Breadcrumb from '@/components/common/Breadcrumb';
import StorySection from '@/components/story/StorySection';

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
