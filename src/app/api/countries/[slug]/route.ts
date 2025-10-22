import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Try to find by slug first, then by ID
    let country = await prisma.country.findUnique({
      where: { slug },
      include: {
        universities: {
          orderBy: { order: 'asc' }
        }
      }
    });

    // If not found by slug, try by ID
    if (!country) {
      country = await prisma.country.findUnique({
        where: { id: slug },
        include: {
          universities: {
            orderBy: { order: 'asc' }
          }
        }
      });
    }

    if (!country) {
      return NextResponse.json(
        { error: 'Country not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(country);
  } catch (error) {
    console.error('Error fetching country:', error);
    return NextResponse.json(
      { error: 'Failed to fetch country' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const country = await prisma.country.update({
      where: { id: slug },
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

    return NextResponse.json(country);
  } catch (error: any) {
    console.error('Error updating country:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update country' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    await prisma.country.delete({
      where: { id: slug },
    });

    return NextResponse.json({ message: 'Country deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting country:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete country' },
      { status: 500 }
    );
  }
}
