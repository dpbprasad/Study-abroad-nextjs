import HeroSection from '@/components/home/HeroSection';
import ServiceCards from '@/components/home/ServiceCards';
import ChooseUsSection from '@/components/home/ChooseUsSection';
import UniversityLogos from '@/components/home/UniversityLogos';
import DestinationsSlider from '@/components/home/DestinationsSlider';
import SuccessCountSection from '@/components/home/SuccessCountSection';
import TeamSection from '@/components/home/TeamSection';
import CoachingSection from '@/components/home/CoachingSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import ProcessSection from '@/components/home/ProcessSection';
import BlogSection from '@/components/home/BlogSection';

export default function Home() {
  return (
    <>
      {/* Hero/Banner Section */}
      <HeroSection />

      {/* Service Cards Section */}
      <ServiceCards />

      {/* Choose Us Section */}
      <ChooseUsSection />

      {/* University Logos Section */}
      <UniversityLogos />

      {/* Study Destinations Section */}
      <DestinationsSlider />

      {/* Team Section */}
      <TeamSection />

      {/* Success Count Section */}
      <SuccessCountSection />

      {/* Coaching Section */}
      <CoachingSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Blog/News Section */}
      <BlogSection />
    </>
  );
}
