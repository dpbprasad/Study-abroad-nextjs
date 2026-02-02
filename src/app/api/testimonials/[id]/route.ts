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

// Note: This is a simple in-memory store. In production, use a database.
const testimonialsStore = {
  data: [] as Testimonial[],
  init() {
    if (this.data.length === 0) {
      this.data = [
        {
          id: '1',
          text: "We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.",
          name: "Albert Flores",
          role: "President of Sales",
          image: "/assets/img/testimonial/testimonial-dp.png",
          bgClass: "white-bg",
          featured: true
        },
        {
          id: '2',
          text: "Outstanding service and professional guidance throughout my visa application process.",
          name: "Eleanor Pena",
          role: "Dog Trainer",
          image: "/assets/img/testimonial/testimonial-dp.png",
          bgClass: "gray-bg"
        }
      ];
    }
    return this.data;
  }
};

// GET - Fetch single testimonial by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const testimonials = testimonialsStore.init();
    const testimonial = testimonials.find(t => t.id === id);

    if (!testimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(testimonial);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch testimonial' },
      { status: 500 }
    );
  }
}

// PATCH - Update testimonial
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const testimonials = testimonialsStore.init();
    const index = testimonials.findIndex(t => t.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    const updatedTestimonial: Testimonial = {
      ...testimonials[index],
      ...data,
      id: testimonials[index].id // Preserve ID
    };

    testimonials[index] = updatedTestimonial;
    return NextResponse.json(updatedTestimonial);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

// DELETE - Delete testimonial
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const testimonials = testimonialsStore.init();
    const index = testimonials.findIndex(t => t.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    testimonials.splice(index, 1);
    return NextResponse.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}
