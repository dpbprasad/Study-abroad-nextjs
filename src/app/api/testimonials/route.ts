import { NextResponse } from 'next/server';

// Testimonial data type
interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
  bgClass: string;
  featured?: boolean;
}

// Testimonials data store
let testimonialsData: Testimonial[] = [
  {
    id: '1',
    text: "We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry. The team guided me through every step.",
    name: "Albert Flores",
    role: "President of Sales",
    image: "/assets/img/testimonial/testimonial-dp.png",
    bgClass: "white-bg",
    featured: true
  },
  {
    id: '2',
    text: "Outstanding service and professional guidance throughout my visa application process. Highly recommended for anyone seeking immigration assistance.",
    name: "Eleanor Pena",
    role: "Dog Trainer",
    image: "/assets/img/testimonial/testimonial-dp.png",
    bgClass: "gray-bg"
  },
  {
    id: '3',
    text: "They made my dream of studying abroad come true. The team was supportive and knowledgeable every step of the way.",
    name: "Ronald Richards",
    role: "President of Sales",
    image: "/assets/img/testimonial/testimonial-dp.png",
    bgClass: "gray-bg"
  },
  {
    id: '4',
    text: "Professional and efficient service. Got my visa approved within the expected timeframe with no complications.",
    name: "Savannah Nguyen",
    role: "Marketing Coordinator",
    image: "/assets/img/testimonial/testimonial-dp.png",
    bgClass: "white-bg"
  },
  {
    id: '5',
    text: "Excellent consultation service. They helped me understand the entire process and made it stress-free.",
    name: "Jerome Bell",
    role: "Web Designer",
    image: "/assets/img/testimonial/testimonial-dp.png",
    bgClass: "white-bg"
  },
  {
    id: '6',
    text: "Very satisfied with their services. They were always available to answer my questions and provide guidance.",
    name: "Annette Black",
    role: "Nursing Assistant",
    image: "/assets/img/testimonial/testimonial-dp.png",
    bgClass: "gray-bg"
  }
];

// GET - Fetch all testimonials
export async function GET() {
  try {
    return NextResponse.json(testimonialsData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

// POST - Create new testimonial
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newTestimonial: Testimonial = {
      id: String(testimonialsData.length + 1),
      name: data.name,
      role: data.role,
      text: data.text,
      image: data.image || '/assets/img/testimonial/testimonial-dp.png',
      bgClass: data.bgClass || 'white-bg',
      featured: data.featured || false
    };

    testimonialsData.push(newTestimonial);
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
