import { NextResponse } from 'next/server';

// Blog post data type
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  date: string;
  comments: number;
  category: string;
  published?: boolean;
}

// Blog data store
let blogsData: BlogPost[] = [
  {
    id: '1',
    slug: 'complete-guide-student-visa-application',
    title: 'Complete Guide to Student Visa Application Process',
    excerpt: 'Navigating the student visa application process can be overwhelming. Learn the essential steps, required documents, and expert tips to ensure your visa application is successful.',
    content: 'Full blog content goes here...',
    image: '/assets/img/blog/blog-1img.png',
    author: 'Study Abroad Expert',
    date: 'January 15, 2025',
    comments: 24,
    category: 'Visa & Immigration',
    published: true
  },
  {
    id: '2',
    slug: 'top-universities-international-students',
    title: 'Top Universities for International Students in 2025',
    excerpt: 'Discover the leading universities worldwide that offer exceptional programs for international students.',
    content: 'Full blog content goes here...',
    image: '/assets/img/blog/blog-2img.png',
    author: 'Education Counselor',
    date: 'January 10, 2025',
    comments: 18,
    category: 'University Selection',
    published: true
  },
  {
    id: '3',
    slug: 'scholarship-opportunities-international-students',
    title: 'Scholarship Opportunities for International Students',
    excerpt: 'Studying abroad doesn\'t have to break the bank. Explore comprehensive scholarship opportunities available for international students.',
    content: 'Full blog content goes here...',
    image: '/assets/img/blog/blog-3img.png',
    author: 'Financial Aid Advisor',
    date: 'January 5, 2025',
    comments: 31,
    category: 'Scholarships & Finance',
    published: true
  },
  {
    id: '4',
    slug: 'preparing-ielts-success',
    title: 'Preparing for IELTS: Tips for Success',
    excerpt: 'IELTS preparation made simple! Get expert strategies for each section of the IELTS exam.',
    content: 'Full blog content goes here...',
    image: '/assets/img/blog/blog-4img.png',
    author: 'Test Prep Specialist',
    date: 'December 28, 2024',
    comments: 15,
    category: 'Test Preparation',
    published: true
  },
  {
    id: '5',
    slug: 'cultural-adaptation-studying-abroad',
    title: 'Cultural Adaptation: Thriving in Your New Country',
    excerpt: 'Moving to a new country for studies is exciting but can be challenging. Discover practical tips for cultural adaptation.',
    content: 'Full blog content goes here...',
    image: '/assets/img/blog/blog-5img.png',
    author: 'Student Life Coach',
    date: 'December 20, 2024',
    comments: 22,
    category: 'Student Life',
    published: true
  },
  {
    id: '6',
    slug: 'part-time-work-international-students',
    title: 'Part-Time Work Opportunities for International Students',
    excerpt: 'Balance your studies and finances with part-time work. Learn about work regulations for international students.',
    content: 'Full blog content goes here...',
    image: '/assets/img/blog/blog-6img.png',
    author: 'Career Advisor',
    date: 'December 15, 2024',
    comments: 19,
    category: 'Career & Employment',
    published: true
  },
];

// GET - Fetch all blog posts
export async function GET() {
  return NextResponse.json(blogsData);
}

// POST - Create new blog post
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newBlog: BlogPost = {
      id: String(blogsData.length + 1),
      slug: data.slug || data.title.toLowerCase().replace(/\s+/g, '-'),
      title: data.title,
      excerpt: data.excerpt,
      content: data.content || '',
      image: data.image || '/assets/img/blog/blog-1img.png',
      author: data.author || 'Admin',
      date: data.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      comments: data.comments || 0,
      category: data.category || 'Uncategorized',
      published: data.published !== undefined ? data.published : true
    };

    blogsData.push(newBlog);
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
