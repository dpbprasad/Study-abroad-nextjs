import { NextResponse } from 'next/server';

// Sample blog data - Study Abroad Related
const blogs = [
  {
    id: '1',
    slug: 'complete-guide-student-visa-application',
    title: 'Complete Guide to Student Visa Application Process',
    excerpt: 'Navigating the student visa application process can be overwhelming. Learn the essential steps, required documents, and expert tips to ensure your visa application is successful. From choosing the right visa type to preparing for your interview, we cover everything you need to know to make your study abroad dream a reality.',
    image: '/assets/img/blog/blog-1img.png',
    author: 'Study Abroad Expert',
    date: 'January 15, 2025',
    comments: 24,
    category: 'Visa & Immigration',
  },
  {
    id: '2',
    slug: 'top-universities-international-students',
    title: 'Top Universities for International Students in 2025',
    excerpt: 'Discover the leading universities worldwide that offer exceptional programs for international students. We explore academic excellence, scholarship opportunities, campus facilities, and post-graduation employment prospects. Find out which universities provide the best value and support for international students pursuing their educational goals.',
    image: '/assets/img/blog/blog-2img.png',
    author: 'Education Counselor',
    date: 'January 10, 2025',
    comments: 18,
    category: 'University Selection',
  },
  {
    id: '3',
    slug: 'scholarship-opportunities-international-students',
    title: 'Scholarship Opportunities for International Students',
    excerpt: 'Studying abroad doesn\'t have to break the bank. Explore comprehensive scholarship opportunities available for international students, including merit-based, need-based, and country-specific scholarships. Learn how to write compelling scholarship applications and increase your chances of securing financial aid for your studies.',
    image: '/assets/img/blog/blog-3img.png',
    author: 'Financial Aid Advisor',
    date: 'January 5, 2025',
    comments: 31,
    category: 'Scholarships & Finance',
  },
  {
    id: '4',
    slug: 'preparing-ielts-success',
    title: 'Preparing for IELTS: Tips for Success',
    excerpt: 'IELTS preparation made simple! Get expert strategies for each section of the IELTS exam. Learn effective study techniques, time management skills, and common mistakes to avoid. Boost your confidence and achieve the score you need for university admission.',
    image: '/assets/img/blog/blog-4img.png',
    author: 'Test Prep Specialist',
    date: 'December 28, 2024',
    comments: 15,
    category: 'Test Preparation',
  },
  {
    id: '5',
    slug: 'cultural-adaptation-studying-abroad',
    title: 'Cultural Adaptation: Thriving in Your New Country',
    excerpt: 'Moving to a new country for studies is exciting but can be challenging. Discover practical tips for cultural adaptation, making friends, managing homesickness, and embracing your new environment. Learn from students who successfully transitioned to life abroad.',
    image: '/assets/img/blog/blog-5img.png',
    author: 'Student Life Coach',
    date: 'December 20, 2024',
    comments: 22,
    category: 'Student Life',
  },
  {
    id: '6',
    slug: 'part-time-work-international-students',
    title: 'Part-Time Work Opportunities for International Students',
    excerpt: 'Balance your studies and finances with part-time work. Learn about work regulations for international students, finding on-campus and off-campus jobs, and managing your time effectively. Discover how work experience can enhance your resume and career prospects.',
    image: '/assets/img/blog/blog-6img.png',
    author: 'Career Advisor',
    date: 'December 15, 2024',
    comments: 19,
    category: 'Career & Employment',
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}
// Updated: January 2025
