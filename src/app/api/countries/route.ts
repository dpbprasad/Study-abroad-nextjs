import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // TEMPORARILY DISABLED

export async function GET() {
  // TEMPORARILY DISABLED: Database fetching
  // Returning SAMPLE DATA for client preview

  const countries = [
    {
      id: 'sample-uk',
      name: 'United Kingdom',
      slug: 'united-kingdom',
      description: 'Study in the UK with world-class universities',
      flagImage: '/assets/img/country/uk-gif.gif',
      universities: []
    },
    {
      id: 'sample-usa',
      name: 'United States',
      slug: 'united-states',
      description: 'Explore opportunities in American universities',
      flagImage: '/assets/img/country/usa-gif.gif',
      universities: []
    },
    {
      id: 'sample-canada',
      name: 'Canada',
      slug: 'canada',
      description: 'Quality education in a multicultural environment',
      flagImage: '/assets/img/country/canada-gif.gif',
      universities: []
    },
    {
      id: 'sample-australia',
      name: 'Australia',
      slug: 'australia',
      description: 'Study down under with excellent research opportunities',
      flagImage: '/assets/img/country/srilanka-gif.gif',
      universities: []
    }
  ];

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
