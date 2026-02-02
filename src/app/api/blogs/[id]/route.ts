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

// Simple in-memory store
const blogStore = {
  data: [] as BlogPost[],
  init() {
    if (this.data.length === 0) {
      this.data = [
        {
          id: '1',
          slug: 'complete-guide-student-visa-application',
          title: 'Complete Guide to Student Visa Application Process',
          excerpt: 'Navigating the student visa application process can be overwhelming.',
          content: 'Full blog content goes here...',
          image: '/assets/img/blog/blog-1img.png',
          author: 'Study Abroad Expert',
          date: 'January 15, 2025',
          comments: 24,
          category: 'Visa & Immigration',
          published: true
        }
      ];
    }
    return this.data;
  }
};

// GET - Fetch single blog post by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogs = blogStore.init();
    const blog = blogs.find(b => b.id === id || b.slug === id);

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PATCH - Update blog post
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const blogs = blogStore.init();
    const index = blogs.findIndex(b => b.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const updatedBlog: BlogPost = {
      ...blogs[index],
      ...data,
      id: blogs[index].id // Preserve ID
    };

    blogs[index] = updatedBlog;
    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogs = blogStore.init();
    const index = blogs.findIndex(b => b.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    blogs.splice(index, 1);
    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
