import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // TEMPORARILY DISABLED

export async function GET(request: Request) {
  // TEMPORARILY DISABLED: Database fetching
  // Returning empty array to prevent Vercel deployment errors

  const universities: any[] = [];
  return NextResponse.json(universities);

  /* ORIGINAL CODE - DISABLED FOR NOW
  try {
    const { searchParams } = new URL(request.url);
    const countryId = searchParams.get('countryId');

    const universities = await prisma.university.findMany({
      where: countryId ? { countryId } : undefined,
      include: {
        country: true
      },
      orderBy: {
        order: 'asc'
      }
    });

    return NextResponse.json(universities);
  } catch (error) {
    console.error('Error fetching universities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch universities' },
      { status: 500 }
    );
  }
  */
}
