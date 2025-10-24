import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // TEMPORARILY DISABLED

export async function GET() {
  // TEMPORARILY DISABLED: Database fetching
  // Returning empty array to prevent Vercel deployment errors

  const countries: any[] = [];
  return NextResponse.json(countries);

  /* ORIGINAL CODE - DISABLED FOR NOW
  try {
    const countries = await prisma.country.findMany({
      include: {
        universities: {
          orderBy: {
            order: 'asc'
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
  */
}
