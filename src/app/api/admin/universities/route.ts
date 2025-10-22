import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const university = await prisma.university.create({
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
    console.error('Error creating university:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create university' },
      { status: 500 }
    );
  }
}
