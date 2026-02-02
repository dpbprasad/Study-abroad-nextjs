'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * ServiceDetailsSection Component
 *
 * This component displays the services page main content section including:
 * - Service category navigation sidebar with tab switching
 * - Dynamic service details content area
 * - Contact widget
 *
 * Note: CSS classes use 'coaching-details__*' naming from the original template
 * for styling purposes, but this component is specifically for the Services page.
 */

// Service data type
interface ServiceContent {
  id: string;
  title: string;
  description1: string;
  description2: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string;
}

// Service content data
const servicesData: ServiceContent[] = [
  {
    id: 'overview',
    title: 'Overview of Our Services',
    description1: 'We provide comprehensive immigration and study abroad consultation services to help students achieve their dreams of studying overseas. Our experienced team guides you through every step of the process, from university selection to visa application, ensuring a smooth and successful journey.',
    description2: 'With over 25 years of experience, we have helped thousands of students secure admissions to top universities worldwide. Our personalized approach ensures that each student receives tailored guidance based on their unique goals and circumstances.',
    features: [
      { title: 'Expert Guidance', description: 'Professional counseling from experienced consultants' },
      { title: 'End-to-End Support', description: 'Complete assistance throughout your journey' },
      { title: 'University Network', description: 'Partnerships with top universities globally' },
      { title: 'Visa Success', description: 'High success rate in visa applications' }
    ],
    benefits: 'Our comprehensive services ensure that you have the best chance of success in your study abroad journey. We handle all the complexities of the application process, allowing you to focus on preparing for your exciting new chapter.'
  },
  {
    id: 'consultation',
    title: 'Student Consultation',
    description1: 'Our student consultation service provides one-on-one guidance to help you make informed decisions about your education abroad. We assess your academic background, career goals, and personal preferences to recommend the best universities and programs that align with your aspirations.',
    description2: 'During consultation sessions, we discuss course options, country selection, budget planning, and career prospects. Our consultants provide honest advice and realistic expectations to ensure you make the right choice for your future.',
    features: [
      { title: 'Personalized Assessment', description: 'Individual evaluation of your profile and goals' },
      { title: 'Career Counseling', description: 'Guidance on courses aligned with career objectives' },
      { title: 'Country Selection', description: 'Help choosing the best destination for you' },
      { title: 'Budget Planning', description: 'Financial planning and scholarship guidance' }
    ],
    benefits: 'With our expert consultation, you gain clarity on your study abroad options and make well-informed decisions. Our personalized approach ensures that your choices align with both your academic goals and long-term career aspirations.'
  },
  {
    id: 'program-finding',
    title: 'Program Finding',
    description1: 'Finding the right program is crucial for your academic and career success. Our program finding service helps you discover courses and universities that perfectly match your interests, qualifications, and career goals. We have access to a vast database of programs across multiple countries.',
    description2: 'We analyze program curriculum, university rankings, location advantages, tuition fees, and post-study work opportunities to help you shortlist the best options. Our team stays updated with the latest program offerings and admission requirements.',
    features: [
      { title: 'Wide Database', description: 'Access to thousands of programs worldwide' },
      { title: 'Perfect Match', description: 'Programs tailored to your qualifications' },
      { title: 'Detailed Analysis', description: 'Comprehensive evaluation of each option' },
      { title: 'Updated Information', description: 'Latest program details and requirements' }
    ],
    benefits: 'Our program finding service saves you time and effort by presenting you with carefully curated options that match your profile. We ensure you apply to programs where you have the best chance of admission and success.'
  },
  {
    id: 'documentation',
    title: 'Documentation Guide',
    description1: 'Proper documentation is critical for a successful application. Our documentation guide service helps you prepare all necessary documents including academic transcripts, letters of recommendation, statement of purpose, resume, and financial documents. We ensure everything meets university and visa requirements.',
    description2: 'Our team reviews each document for accuracy, completeness, and compliance with specific requirements. We provide templates, samples, and personalized feedback to help you create compelling application materials that strengthen your profile.',
    features: [
      { title: 'Document Checklist', description: 'Complete list of required documents' },
      { title: 'Review & Feedback', description: 'Expert review of all your documents' },
      { title: 'SOP Assistance', description: 'Help crafting a compelling statement of purpose' },
      { title: 'Compliance Check', description: 'Ensure all documents meet requirements' }
    ],
    benefits: 'With our documentation support, you can be confident that your application package is complete, accurate, and professionally presented. Proper documentation significantly increases your chances of admission and visa approval.'
  },
  {
    id: 'oet',
    title: 'OET Coaching',
    description1: 'The Occupational English Test (OET) is designed for healthcare professionals who need to demonstrate English language proficiency. Our specialized OET coaching program prepares you for all four sub-tests: Listening, Reading, Writing, and Speaking, with a focus on healthcare-specific scenarios.',
    description2: 'Our experienced trainers use authentic OET materials and simulation tests to familiarize you with the exam format. We provide personalized feedback on your writing and speaking tasks, helping you achieve the score required for professional registration and visa applications.',
    features: [
      { title: 'Healthcare Focus', description: 'Medical English for healthcare professionals' },
      { title: 'All Sub-tests', description: 'Comprehensive coverage of all OET modules' },
      { title: 'Mock Tests', description: 'Regular practice with authentic materials' },
      { title: 'Expert Trainers', description: 'Experienced OET-certified instructors' }
    ],
    benefits: 'Our OET coaching ensures that healthcare professionals achieve the required scores for registration and migration. With focused training and expert guidance, you will develop the language skills needed to communicate effectively in healthcare settings.'
  },
  {
    id: 'ielts',
    title: 'IELTS Coaching',
    description1: 'IELTS score is internationally recognized as an English Language proficiency requirement for higher education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New Zealand. The highest possible band score is 9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission.',
    description2: 'Our IELTS coaching program covers both Academic and General Training modules. We provide comprehensive training in Listening, Reading, Writing, and Speaking with regular mock tests and personalized feedback to help you achieve your target band score.',
    features: [
      { title: 'Academic & General', description: 'Training for both IELTS modules' },
      { title: 'Band Score Focus', description: 'Strategies to achieve your target score' },
      { title: 'Regular Mock Tests', description: 'Practice tests in exam conditions' },
      { title: 'Writing Feedback', description: 'Detailed corrections and improvements' }
    ],
    benefits: 'Our IELTS coaching program has helped thousands of students achieve their target band scores. With expert trainers, comprehensive materials, and regular practice, you will be fully prepared to succeed in the IELTS examination.'
  },
  {
    id: 'toefl',
    title: 'TOEFL Coaching',
    description1: 'TOEFL (Test of English as a Foreign Language) is widely accepted by universities in the United States and other English-speaking countries. Our TOEFL coaching program prepares you for the iBT (Internet-Based Test) format, covering Reading, Listening, Speaking, and Writing sections.',
    description2: 'We use official TOEFL materials and provide extensive practice with computer-based tests. Our trainers teach you effective strategies for time management, note-taking, and answering different question types to maximize your score.',
    features: [
      { title: 'iBT Format', description: 'Complete preparation for internet-based test' },
      { title: 'Strategy Training', description: 'Effective techniques for all sections' },
      { title: 'Computer Practice', description: 'Familiarization with test interface' },
      { title: 'Score Improvement', description: 'Focused training to maximize your score' }
    ],
    benefits: 'Our TOEFL coaching equips you with the skills and confidence to excel in the examination. With thorough preparation and expert guidance, you will achieve the scores required for admission to your dream university.'
  },
  {
    id: 'personalized-counseling',
    title: 'Personalized Counseling',
    description1: 'Our personalized counseling service is designed to provide you with one-on-one guidance tailored to your unique needs, timelines, and aspirations. We take the time to understand your academic background, career goals, financial situation, and personal preferences to create a customized roadmap for your study abroad journey.',
    description2: 'Through detailed consultations, we help you identify the right programs, universities, and countries that align with your objectives. Our counselors work closely with you to address your concerns, answer your questions, and provide ongoing support throughout the entire process.',
    features: [
      { title: 'Individual Attention', description: 'Dedicated counselor for personalized guidance' },
      { title: 'Customized Plan', description: 'Tailored strategy based on your profile' },
      { title: 'Flexible Scheduling', description: 'Consultations that fit your timeline' },
      { title: 'Ongoing Support', description: 'Continuous assistance at every step' }
    ],
    benefits: 'With personalized counseling, you receive expert guidance that is specifically designed for your situation. This individualized approach ensures better decision-making, reduces stress, and increases your chances of success in securing admission and visa approval.'
  },
  {
    id: 'university-network',
    title: 'Global University Network',
    description1: 'We have established strong partnerships with leading universities and educational institutions across the UK, USA, Canada, Australia, New Zealand, Sweden, Germany, and the Netherlands. Our extensive network gives you access to a wide range of programs and opportunities that match your academic and career goals.',
    description2: 'Through our university partnerships, we stay informed about admission requirements, scholarship opportunities, program updates, and special pathways. This direct connection enables us to provide you with the most current information and insider knowledge to strengthen your application.',
    features: [
      { title: 'Partner Universities', description: 'Direct connections with top institutions' },
      { title: 'Multiple Countries', description: 'Options across 8 major study destinations' },
      { title: 'Program Variety', description: 'Wide range of courses and specializations' },
      { title: 'Scholarship Access', description: 'Information on funding opportunities' }
    ],
    benefits: 'Our global university network provides you with exclusive access to programs, faster application processing, and better insight into admission requirements. Our partnerships often lead to higher acceptance rates and access to scholarship opportunities that may not be publicly advertised.'
  },
  {
    id: 'application-visa',
    title: 'Application and Visa Support',
    description1: 'Navigating the application and visa process can be complex and overwhelming. Our comprehensive support service guides you through every step, from preparing application materials to submitting visa documents. We ensure all documentation is complete, accurate, and submitted on time to avoid delays or rejections.',
    description2: 'Our experienced team has in-depth knowledge of visa requirements for different countries and stays updated with the latest immigration policies. We provide detailed checklists, document reviews, interview preparation, and assistance with managing deadlines to ensure a smooth and successful application process.',
    features: [
      { title: 'Document Preparation', description: 'Help organizing all required paperwork' },
      { title: 'Application Review', description: 'Expert checking before submission' },
      { title: 'Visa Guidance', description: 'Step-by-step visa application support' },
      { title: 'Interview Prep', description: 'Mock interviews and coaching sessions' }
    ],
    benefits: 'With our application and visa support, you can navigate the complex process with confidence. Our end-to-end assistance minimizes errors, reduces processing time, and significantly increases your chances of successful admission and visa approval.'
  },
  {
    id: 'post-arrival',
    title: 'Post-Arrival Services',
    description1: 'Our support does not end when you receive your visa. We provide comprehensive post-arrival services to help you settle into your new country comfortably and confidently. From airport pickup to accommodation assistance, we ensure your transition is smooth and stress-free.',
    description2: 'We offer orientation sessions covering practical aspects like opening bank accounts, local transportation, healthcare registration, and cultural adjustment. We also provide information about language courses, part-time work opportunities, and community resources to help you thrive in your new environment.',
    features: [
      { title: 'Airport Pickup', description: 'Safe arrival and transfer assistance' },
      { title: 'Accommodation Help', description: 'Support finding suitable housing' },
      { title: 'Orientation Sessions', description: 'Practical information about local life' },
      { title: 'Ongoing Assistance', description: 'Support even after you arrive' }
    ],
    benefits: 'Our post-arrival services ensure you feel supported and prepared as you begin your studies abroad. With practical assistance and local knowledge, you can focus on your academic goals while we help you navigate the challenges of living in a new country.'
  },
  {
    id: 'alumni-networking',
    title: 'Alumni and Networking',
    description1: 'Join our vibrant community of successful alumni who have studied abroad with our guidance. Our alumni network provides valuable opportunities for mentorship, professional connections, and ongoing support throughout your academic journey and career development.',
    description2: 'We organize networking events, webinars, and mentorship programs that connect current students with graduates who have successfully navigated similar paths. These connections provide insider perspectives, career advice, and opportunities for collaboration that extend well beyond your study period.',
    features: [
      { title: 'Alumni Network', description: 'Connect with successful graduates' },
      { title: 'Mentorship Programs', description: 'Guidance from experienced alumni' },
      { title: 'Networking Events', description: 'Regular meetups and webinars' },
      { title: 'Career Support', description: 'Professional development opportunities' }
    ],
    benefits: 'Our alumni and networking opportunities provide you with a support system that extends beyond graduation. These connections can lead to internships, job opportunities, industry insights, and lifelong professional relationships that enhance your career prospects.'
  }
];

export default function ServiceDetailsSection() {
  // State to track active service tab
  const [activeService, setActiveService] = useState<string>('overview');
  const [stickyState, setStickyState] = useState<'normal' | 'fixed' | 'absolute'>('normal');
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const detailsContentRef = useRef<HTMLDivElement>(null);

  // Custom scrollbar styles
  const customScrollbarStyles = `
    .coaching-details__category {
      max-height: 610px;
      overflow-y: auto;
      padding-bottom: 0;
      padding-top: 0;
      padding-right: 15px;
      position: relative;
    }

    /* Add spacing using pseudo-elements */
    .coaching-details__category::before,
    .coaching-details__category::after {
      content: '';
      display: block;
      height: 15px;
      flex-shrink: 0;
    }

    .coaching-details__category::-webkit-scrollbar {
      width: 8px;
    }

    .coaching-details__category::-webkit-scrollbar-track {
      background: #E8F5E1;
      border-radius: 10px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .coaching-details__category::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #83CD20 0%, #034833 100%);
      border-radius: 10px;
      transition: all 0.3s ease;
    }

    .coaching-details__category::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #034833 0%, #83CD20 100%);
    }

    /* Firefox */
    .coaching-details__category {
      scrollbar-width: thin;
      scrollbar-color: #83CD20 #E8F5E1;
    }
  `;

  // Get current service content
  const currentService = servicesData.find(service => service.id === activeService) || servicesData[0];

  // Function to handle service tab change
  const handleServiceChange = (serviceId: string) => {
    setActiveService(serviceId);

    // Scroll to position where the service details content aligns with the sticky sidebar
    if (sectionRef.current && detailsContentRef.current) {
      const stickyTopPosition = 135; // Where sidebar sticks from viewport top

      // Get the absolute position of the details content (which is inside the section with pt-100)
      const detailsContentTop = detailsContentRef.current.offsetTop + sectionRef.current.offsetTop;

      // Scroll so the details content appears at the sticky position (135px from top)
      const scrollToPosition = detailsContentTop - stickyTopPosition;

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
        const sidebarHeight = sidebarRef.current.offsetHeight;
        const headerHeight = 100; // Approximate header height when sticky
        const stickyTop = 135; // Distance from top when sticky
        const footerGap = 15; // Gap between sidebar and footer

        // Capture the original width before making it sticky
        if (stickyState === 'normal' && sectionTop <= headerHeight) {
          setSidebarWidth(sidebarRef.current.offsetWidth);
        }

        // Calculate the stopping point (when sidebar should stick to bottom)
        const stopPoint = stickyTop + sidebarHeight + footerGap;

        // Determine sticky state
        if (sectionTop > headerHeight) {
          // Section hasn't reached sticky point yet
          setStickyState('normal');
        } else if (sectionBottom > stopPoint) {
          // Section is in view and there's room for fixed positioning
          setStickyState('fixed');
        } else {
          // Section bottom is too close, use absolute positioning at bottom
          setStickyState('absolute');
        }
      }
    };

    // Set initial width
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (sidebarRef.current && stickyState === 'normal') {
        setSidebarWidth(sidebarRef.current.offsetWidth);
      }
    });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [stickyState]);

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <section ref={sectionRef} className="coaching-details__area pt-100 section-space-bottom">
        <div className="container">
        <div className="row">
          {/* Service Categories Sidebar */}
          <div className="col-lg-4">
            <div
              ref={sidebarRef}
              className={`service-sidebar-sticky ${stickyState === 'fixed' ? 'is-fixed' : ''} ${stickyState === 'absolute' ? 'is-absolute' : ''}`}
              style={stickyState !== 'normal' ? { width: `${sidebarWidth}px` } : {}}
            >
              {/* Service Category Links - uses 'coaching-details__category' class for styling */}
              <div className="coaching-details__category">
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'overview' ? 'active' : ''}`}
                data-wow-delay=".2s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('overview'); }}
                style={{ cursor: 'pointer' }}
              >
                Overview of our services <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'consultation' ? 'active' : ''}`}
                data-wow-delay=".4s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('consultation'); }}
                style={{ cursor: 'pointer' }}
              >
                Student Consultation <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'program-finding' ? 'active' : ''}`}
                data-wow-delay=".6s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('program-finding'); }}
                style={{ cursor: 'pointer' }}
              >
                Program finding <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'documentation' ? 'active' : ''}`}
                data-wow-delay=".8s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('documentation'); }}
                style={{ cursor: 'pointer' }}
              >
                Documentation Guide <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'oet' ? 'active' : ''}`}
                data-wow-delay="1s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('oet'); }}
                style={{ cursor: 'pointer' }}
              >
                OET Coaching <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'ielts' ? 'active' : ''}`}
                data-wow-delay="1.2s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('ielts'); }}
                style={{ cursor: 'pointer' }}
              >
                IELTS Coaching <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'toefl' ? 'active' : ''}`}
                data-wow-delay="1.4s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('toefl'); }}
                style={{ cursor: 'pointer' }}
              >
                TOEFL Coaching <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'personalized-counseling' ? 'active' : ''}`}
                data-wow-delay="1.6s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('personalized-counseling'); }}
                style={{ cursor: 'pointer' }}
              >
                Personalized Counseling <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'university-network' ? 'active' : ''}`}
                data-wow-delay="1.8s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('university-network'); }}
                style={{ cursor: 'pointer' }}
              >
                Global University Network <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'application-visa' ? 'active' : ''}`}
                data-wow-delay="2s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('application-visa'); }}
                style={{ cursor: 'pointer' }}
              >
                Application and Visa Support <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`mb-15 wow fadeInLeft animated ${activeService === 'post-arrival' ? 'active' : ''}`}
                data-wow-delay="2.2s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('post-arrival'); }}
                style={{ cursor: 'pointer' }}
              >
                Post-Arrival Services <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
              <a
                className={`wow fadeInLeft animated ${activeService === 'alumni-networking' ? 'active' : ''}`}
                data-wow-delay="2.4s"
                onClick={(e) => { e.preventDefault(); handleServiceChange('alumni-networking'); }}
                style={{ cursor: 'pointer' }}
              >
                Alumni and Networking <span><i className="fa-solid fa-angle-right"></i></span>
              </a>
            </div>

            {/* Contact Widget */}
            <div className="coaching-details__widget mt-30 wow fadeInLeft animated" data-wow-delay="2.6s">
              <div className="coaching-details__widget-icon">
                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.9219 31.2344L38.0469 39.125C37.8125 40.2969 36.875 41.0781 35.7031 41.0781C16.0156 41 0 24.9844 0 5.29688C0 4.125 0.703125 3.1875 1.875 2.95312L9.76562 1.07812C10.8594 0.84375 12.0312 1.46875 12.5 2.48438L16.1719 11C16.5625 12.0156 16.3281 13.1875 15.4688 13.8125L11.25 17.25C13.9062 22.6406 18.2812 27.0156 23.75 29.6719L27.1875 25.4531C27.8125 24.6719 28.9844 24.3594 30 24.75L38.5156 28.4219C39.5312 28.9688 40.1562 30.1406 39.9219 31.2344Z" fill="white"/>
                </svg>
              </div>
              <h3 className="mt-15">GET TOUCH</h3>
              <a href="tel:+94112512515">+94 112 512 515</a>
            </div>
            </div>
          </div>

          {/* Service Details Content - Dynamic content based on selected service tab */}
          <div className="col-lg-8">
            {/* Main Content Area */}
            <div ref={detailsContentRef} className="coaching-details__content">
              <div className="coaching-details__content-top-img pb-20" data-tilt>
                <Image src="/assets/img/service/service-details-top-img.png" alt="Study abroad consultation services" width={800} height={450} priority />
              </div>
              <h2 className="coaching-details__content-title mb-30 wow fadeInLeft animated" data-wow-delay=".3s">
                {currentService.title}
              </h2>
              <p className="wow fadeInLeft animated" data-wow-delay=".4s">
                {currentService.description1}
              </p>
              <p className="paragrapg wow fadeInLeft animated" data-wow-delay=".5s">
                {currentService.description2}
              </p>
            </div>

            {/* Service Features/Guides */}
            <div className="coaching-details__guides d-flex mb-40 mt-30">
              <div className="coaching-details__guides-card">
                <div className="coaching-details__guides-card-tetx wow fadeInLeft animated" data-wow-delay=".4s">
                  <h5><i className="fa-solid fa-check"></i>{currentService.features[0].title}</h5>
                  <p>{currentService.features[0].description}</p>
                </div>
                <div className="coaching-details__guides-card-tetx mt-30 wow fadeInLeft animated" data-wow-delay=".5s">
                  <h5><i className="fa-solid fa-check"></i>{currentService.features[1].title}</h5>
                  <p>{currentService.features[1].description}</p>
                </div>
              </div>
              <div className="coaching-details__guides-card">
                <div className="coaching-details__guides-card-tetx wow fadeInLeft animated" data-wow-delay=".6s">
                  <h5><i className="fa-solid fa-check"></i>{currentService.features[2].title}</h5>
                  <p>{currentService.features[2].description}</p>
                </div>
                <div className="coaching-details__guides-card-tetx mt-30 wow fadeInLeft animated" data-wow-delay=".7s">
                  <h5><i className="fa-solid fa-check"></i>{currentService.features[3].title}</h5>
                  <p>{currentService.features[3].description}</p>
                </div>
              </div>
            </div>

            {/* Service Benefits Section */}
            <div className="coaching-details__bottom">
              <div className="coaching-details__bottom-img mb-30" data-tilt>
                <Image src="/assets/img/service/service-details-bottom-img.png" alt="Study abroad benefits and support" width={800} height={450} />
              </div>
              <h3 className="mb-20 wow fadeInLeft animated" data-wow-delay=".8s">Our Benefits</h3>
              <p className="wow fadeInLeft animated" data-wow-delay=".9s">
                {currentService.benefits}
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
