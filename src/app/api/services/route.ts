import { NextResponse } from 'next/server';

// Service data type
interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  description1: string;
  description2: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string;
  order: number;
}

// Services data
let servicesData: ServiceContent[] = [
  {
    id: '1',
    slug: 'overview',
    title: 'Overview of Our Services',
    description1: 'We provide comprehensive immigration and study abroad consultation services to help students achieve their dreams of studying overseas. Our experienced team guides you through every step of the process, from university selection to visa application, ensuring a smooth and successful journey.',
    description2: 'With over 25 years of experience, we have helped thousands of students secure admissions to top universities worldwide. Our personalized approach ensures that each student receives tailored guidance based on their unique goals and circumstances.',
    features: [
      { title: 'Expert Guidance', description: 'Professional counseling from experienced consultants' },
      { title: 'End-to-End Support', description: 'Complete assistance throughout your journey' },
      { title: 'University Network', description: 'Partnerships with top universities globally' },
      { title: 'Visa Success', description: 'High success rate in visa applications' }
    ],
    benefits: 'Our comprehensive services ensure that you have the best chance of success in your study abroad journey. We handle all the complexities of the application process, allowing you to focus on preparing for your exciting new chapter.',
    order: 1
  },
  {
    id: '2',
    slug: 'consultation',
    title: 'Student Consultation',
    description1: 'Our student consultation service provides one-on-one guidance to help you make informed decisions about your education abroad. We assess your academic background, career goals, and personal preferences to recommend the best universities and programs that align with your aspirations.',
    description2: 'During consultation sessions, we discuss course options, country selection, budget planning, and career prospects. Our consultants provide honest advice and realistic expectations to ensure you make the right choice for your future.',
    features: [
      { title: 'Personalized Assessment', description: 'Individual evaluation of your profile and goals' },
      { title: 'Career Counseling', description: 'Guidance on courses aligned with career objectives' },
      { title: 'Country Selection', description: 'Help choosing the best destination for you' },
      { title: 'Budget Planning', description: 'Financial planning and scholarship guidance' }
    ],
    benefits: 'With our expert consultation, you gain clarity on your study abroad options and make well-informed decisions. Our personalized approach ensures that your choices align with both your academic goals and long-term career aspirations.',
    order: 2
  },
  {
    id: '3',
    slug: 'program-finding',
    title: 'Program Finding',
    description1: 'Finding the right program is crucial for your academic and career success. Our program finding service helps you discover courses and universities that perfectly match your interests, qualifications, and career goals. We have access to a vast database of programs across multiple countries.',
    description2: 'We analyze program curriculum, university rankings, location advantages, tuition fees, and post-study work opportunities to help you shortlist the best options. Our team stays updated with the latest program offerings and admission requirements.',
    features: [
      { title: 'Wide Database', description: 'Access to thousands of programs worldwide' },
      { title: 'Perfect Match', description: 'Programs tailored to your qualifications' },
      { title: 'Detailed Analysis', description: 'Comprehensive evaluation of each option' },
      { title: 'Updated Information', description: 'Latest program details and requirements' }
    ],
    benefits: 'Our program finding service saves you time and effort by presenting you with carefully curated options that match your profile. We ensure you apply to programs where you have the best chance of admission and success.',
    order: 3
  },
  {
    id: '4',
    slug: 'documentation',
    title: 'Documentation Guide',
    description1: 'Proper documentation is critical for a successful application. Our documentation guide service helps you prepare all necessary documents including academic transcripts, letters of recommendation, statement of purpose, resume, and financial documents. We ensure everything meets university and visa requirements.',
    description2: 'Our team reviews each document for accuracy, completeness, and compliance with specific requirements. We provide templates, samples, and personalized feedback to help you create compelling application materials that strengthen your profile.',
    features: [
      { title: 'Document Checklist', description: 'Complete list of required documents' },
      { title: 'Review & Feedback', description: 'Expert review of all your documents' },
      { title: 'SOP Assistance', description: 'Help crafting a compelling statement of purpose' },
      { title: 'Compliance Check', description: 'Ensure all documents meet requirements' }
    ],
    benefits: 'With our documentation support, you can be confident that your application package is complete, accurate, and professionally presented. Proper documentation significantly increases your chances of admission and visa approval.',
    order: 4
  },
  {
    id: '5',
    slug: 'oet',
    title: 'OET Coaching',
    description1: 'The Occupational English Test (OET) is designed for healthcare professionals who need to demonstrate English language proficiency. Our specialized OET coaching program prepares you for all four sub-tests: Listening, Reading, Writing, and Speaking, with a focus on healthcare-specific scenarios.',
    description2: 'Our experienced trainers use authentic OET materials and simulation tests to familiarize you with the exam format. We provide personalized feedback on your writing and speaking tasks, helping you achieve the score required for professional registration and visa applications.',
    features: [
      { title: 'Healthcare Focus', description: 'Medical English for healthcare professionals' },
      { title: 'All Sub-tests', description: 'Comprehensive coverage of all OET modules' },
      { title: 'Mock Tests', description: 'Regular practice with authentic materials' },
      { title: 'Expert Trainers', description: 'Experienced OET-certified instructors' }
    ],
    benefits: 'Our OET coaching ensures that healthcare professionals achieve the required scores for registration and migration. With focused training and expert guidance, you will develop the language skills needed to communicate effectively in healthcare settings.',
    order: 5
  },
  {
    id: '6',
    slug: 'ielts',
    title: 'IELTS Coaching',
    description1: 'IELTS score is internationally recognized as an English Language proficiency requirement for higher education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New Zealand. The highest possible band score is 9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission.',
    description2: 'Our IELTS coaching program is designed to help you achieve your target band score through comprehensive training in all four modules: Listening, Reading, Writing, and Speaking. We use proven strategies and practice materials to build your confidence and improve your performance.',
    features: [
      { title: 'All Modules', description: 'Complete training for all IELTS sections' },
      { title: 'Practice Tests', description: 'Regular mock tests with detailed feedback' },
      { title: 'Speaking Practice', description: 'One-on-one speaking sessions with trainers' },
      { title: 'Score Guarantee', description: 'Achieve your target band score' }
    ],
    benefits: 'Our proven IELTS coaching methodology has helped thousands of students achieve their desired band scores. With personalized attention and regular practice, you will be well-prepared to excel in the IELTS examination.',
    order: 6
  },
  {
    id: '7',
    slug: 'toefl',
    title: 'TOEFL Coaching',
    description1: 'The TOEFL (Test of English as a Foreign Language) is widely accepted by universities in the United States and other English-speaking countries. Our TOEFL coaching program provides comprehensive preparation for all four sections: Reading, Listening, Speaking, and Writing.',
    description2: 'We use official TOEFL materials and computer-based practice tests to simulate the actual exam environment. Our experienced instructors provide strategies for time management, note-taking, and answering different question types effectively.',
    features: [
      { title: 'Computer-Based Practice', description: 'Simulate actual TOEFL iBT test environment' },
      { title: 'All Sections', description: 'Comprehensive training for Reading, Listening, Speaking, Writing' },
      { title: 'Expert Strategies', description: 'Learn effective test-taking techniques' },
      { title: 'Progress Tracking', description: 'Monitor your improvement with regular assessments' }
    ],
    benefits: 'Our TOEFL coaching program equips you with the skills and confidence needed to achieve a high score. We focus on both language proficiency and test-taking strategies to maximize your performance on exam day.',
    order: 7
  }
];

// GET - Fetch all services
export async function GET() {
  try {
    return NextResponse.json(servicesData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST - Create new service
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newService: ServiceContent = {
      id: String(servicesData.length + 1),
      slug: data.slug || data.title.toLowerCase().replace(/\s+/g, '-'),
      title: data.title,
      description1: data.description1,
      description2: data.description2,
      features: data.features || [],
      benefits: data.benefits,
      order: data.order || servicesData.length + 1
    };

    servicesData.push(newService);
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}
