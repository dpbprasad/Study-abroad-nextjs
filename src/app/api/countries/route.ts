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
      universities: [
        {
          id: 'sample-oxford',
          name: 'University of Oxford',
          logo: '/assets/img/uni-logo/h-logo/black-brands1.png',
          website: 'https://www.ox.ac.uk',
          ranking: 1
        },
        {
          id: 'sample-cambridge',
          name: 'University of Cambridge',
          logo: '/assets/img/uni-logo/h-logo/black-brands2.png',
          website: 'https://www.cam.ac.uk',
          ranking: 2
        }
      ]
    },
    {
      id: 'sample-usa',
      name: 'United States',
      slug: 'united-states',
      description: 'Explore opportunities in American universities',
      flagImage: '/assets/img/country/usa-gif.gif',
      universities: [
        {
          id: 'sample-harvard',
          name: 'Harvard University',
          logo: '/assets/img/uni-logo/h-logo/black-brands3.png',
          website: 'https://www.harvard.edu',
          ranking: 3
        },
        {
          id: 'sample-mit',
          name: 'MIT',
          logo: '/assets/img/uni-logo/h-logo/black-brands4.png',
          website: 'https://www.mit.edu',
          ranking: 4
        }
      ]
    },
    {
      id: 'sample-canada',
      name: 'Canada',
      slug: 'canada',
      description: 'Quality education in a multicultural environment',
      flagImage: '/assets/img/country/canada-gif.gif',
      universities: [
        {
          id: 'sample-toronto',
          name: 'University of Toronto',
          logo: '/assets/img/uni-logo/h-logo/black-brands5.png',
          website: 'https://www.utoronto.ca',
          ranking: 5
        },
        {
          id: 'sample-ubc',
          name: 'University of British Columbia',
          logo: '/assets/img/uni-logo/h-logo/black-brands1.png',
          website: 'https://www.ubc.ca',
          ranking: 6
        }
      ]
    },
    {
      id: 'sample-australia',
      name: 'Australia',
      slug: 'australia',
      description: 'Study down under with excellent research opportunities',
      flagImage: '/assets/img/country/srilanka-gif.gif',
      universities: [
        {
          id: 'sample-melbourne',
          name: 'University of Melbourne',
          logo: '/assets/img/uni-logo/h-logo/black-brands2.png',
          website: 'https://www.unimelb.edu.au',
          ranking: 7
        },
        {
          id: 'sample-sydney',
          name: 'University of Sydney',
          logo: '/assets/img/uni-logo/h-logo/black-brands3.png',
          website: 'https://www.sydney.edu.au',
          ranking: 8
        }
      ]
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
