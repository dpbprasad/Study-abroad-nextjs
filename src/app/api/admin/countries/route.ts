import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Create new country
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const country = await prisma.country.create({
      data: {
        slug: body.slug,
        name: body.name,
        flag: body.flag,
        flagGif: body.flagGif || null,
        backgroundImage: body.backgroundImage,
        title: body.title,
        description: body.description,
        highlights: body.highlights || [],
        quickFacts: body.quickFacts || {},
      },
    });

    return NextResponse.json(country, { status: 201 });
  } catch (error: any) {
    console.error('Error creating country:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create country' },
      { status: 500 }
    );
  }
}
