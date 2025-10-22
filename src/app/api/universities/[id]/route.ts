import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const university = await prisma.university.findUnique({
      where: { id },
      include: {
        country: true
      }
    });

    if (!university) {
      return NextResponse.json(
        { error: 'University not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(university);
  } catch (error) {
    console.error('Error fetching university:', error);
    return NextResponse.json(
      { error: 'Failed to fetch university' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const university = await prisma.university.update({
      where: { id },
      data: {
        name: body.name,
        logo: body.logo,
        website: body.website || null,
        ranking: body.ranking ? parseInt(body.ranking) : null,
        location: body.location || null,
        countryId: body.countryId,
        order: body.order ? parseInt(body.order) : 0,
      },
    });

    return NextResponse.json(university);
  } catch (error: any) {
    console.error('Error updating university:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update university' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.university.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'University deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting university:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete university' },
      { status: 500 }
    );
  }
}
