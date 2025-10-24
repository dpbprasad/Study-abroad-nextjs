import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // TEMPORARILY DISABLED

export async function GET(request: Request) {
  // TEMPORARILY DISABLED: Database fetching
  // Returning SAMPLE DATA for client preview

  const universities = [
    {
      id: 'sample-oxford',
      name: 'University of Oxford',
      logo: '/assets/img/uni-logo/deakin.png',
      countryId: 'sample-uk',
      order: 1,
      country: {
        id: 'sample-uk',
        name: 'United Kingdom'
      }
    },
    {
      id: 'sample-harvard',
      name: 'Harvard University',
      logo: '/assets/img/uni-logo/deakin.png',
      countryId: 'sample-usa',
      order: 2,
      country: {
        id: 'sample-usa',
        name: 'United States'
      }
    },
    {
      id: 'sample-toronto',
      name: 'University of Toronto',
      logo: '/assets/img/uni-logo/deakin.png',
      countryId: 'sample-canada',
      order: 3,
      country: {
        id: 'sample-canada',
        name: 'Canada'
      }
    },
    {
      id: 'sample-melbourne',
      name: 'University of Melbourne',
      logo: '/assets/img/uni-logo/deakin.png',
      countryId: 'sample-australia',
      order: 4,
      country: {
        id: 'sample-australia',
        name: 'Australia'
      }
    }
  ];

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
