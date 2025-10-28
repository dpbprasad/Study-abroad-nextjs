import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // TEMPORARILY DISABLED

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // TEMPORARILY DISABLED: Database fetching
  // Returning SAMPLE DATA for client preview

  const { slug } = await params;

  const countries = [
    {
      id: 'australia',
      slug: 'australia',
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      flagImage: '/assets/img/country/australia-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/australia-bg.jpg',
      title: 'Study in Australia',
      description: 'Study in one of the world\'s most liveable countries with world-class education',
      highlights: ['High quality of life', 'World-class universities', 'Post-study work opportunities', 'Safe and welcoming'],
      quickFacts: {
        language: 'English',
        currency: 'AUD',
        timezone: 'UTC+10',
        studyDuration: '2-4 years'
      },
      universities: [
        { id: 'deakin', name: 'Deakin University', logo: '/assets/img/uni-logo/deakin.png', website: 'https://www.deakin.edu.au/', location: 'Australia' },
        { id: 'melbourne', name: 'University of Melbourne', logo: '/assets/img/uni-logo/deakin.png', ranking: 14, location: 'Australia' },
        { id: 'sydney', name: 'University of Sydney', logo: '/assets/img/uni-logo/deakin.png', ranking: 19, location: 'Australia' },
        { id: 'anu', name: 'Australian National University', logo: '/assets/img/uni-logo/deakin.png', ranking: 27, location: 'Australia' },
        { id: 'monash', name: 'Monash University', logo: '/assets/img/uni-logo/deakin.png', ranking: 37, location: 'Australia' },
        { id: 'queensland', name: 'University of Queensland', logo: '/assets/img/uni-logo/deakin.png', ranking: 43, location: 'Australia' },
        { id: 'rmit', name: 'RMIT University', logo: '/assets/img/uni-logo/deakin.png', location: 'Australia' },
        { id: 'adelaide', name: 'University of Adelaide', logo: '/assets/img/uni-logo/deakin.png', location: 'Australia' },
        { id: 'uts', name: 'University of Technology Sydney', logo: '/assets/img/uni-logo/deakin.png', location: 'Australia' },
        { id: 'macquarie', name: 'Macquarie University', logo: '/assets/img/uni-logo/deakin.png', location: 'Australia' },
        { id: 'griffith', name: 'Griffith University', logo: '/assets/img/uni-logo/deakin.png', location: 'Australia' },
        { id: 'latrobe', name: 'La Trobe University', logo: '/assets/img/uni-logo/deakin.png', location: 'Australia' }
      ]
    },
    {
      id: 'new-zealand',
      slug: 'new-zealand',
      name: 'New Zealand',
      code: 'NZ',
      flag: '🇳🇿',
      flagImage: '/assets/img/country/newzealand-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/newzealand-bg.jpg',
      title: 'Study in New Zealand',
      description: 'Experience world-renowned education in stunning natural landscapes',
      highlights: ['Beautiful landscapes', 'Quality education', 'Safe environment', 'Work while studying'],
      quickFacts: {
        language: 'English',
        currency: 'NZD',
        timezone: 'UTC+12',
        studyDuration: '2-4 years'
      },
      universities: [
        { id: 'auckland', name: 'University of Auckland', logo: '/assets/img/uni-logo/deakin.png', ranking: 85, location: 'New Zealand' },
        { id: 'otago', name: 'University of Otago', logo: '/assets/img/uni-logo/deakin.png', location: 'New Zealand' },
        { id: 'victoria', name: 'Victoria University of Wellington', logo: '/assets/img/uni-logo/deakin.png', location: 'New Zealand' },
        { id: 'canterbury', name: 'University of Canterbury', logo: '/assets/img/uni-logo/deakin.png', location: 'New Zealand' },
        { id: 'massey', name: 'Massey University', logo: '/assets/img/uni-logo/deakin.png', location: 'New Zealand' },
        { id: 'lincoln', name: 'Lincoln University', logo: '/assets/img/uni-logo/deakin.png', location: 'New Zealand' },
        { id: 'aut', name: 'Auckland University of Technology', logo: '/assets/img/uni-logo/deakin.png', location: 'New Zealand' },
        { id: 'waikato', name: 'University of Waikato', logo: '/assets/img/uni-logo/deakin.png', location: 'New Zealand' }
      ]
    },
    {
      id: 'canada',
      slug: 'canada',
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      flagImage: '/assets/img/country/canada-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/canada-bg-s.jpg',
      title: 'Study in Canada',
      description: 'Experience world-class education in a multicultural environment',
      highlights: ['Multicultural society', 'Affordable tuition', 'Post-graduation work permit', 'High quality of life'],
      quickFacts: {
        language: 'English, French',
        currency: 'CAD',
        timezone: 'UTC-5 to UTC-8',
        studyDuration: '2-4 years'
      },
      universities: [
        { id: 'toronto', name: 'University of Toronto', logo: '/assets/img/uni-logo/deakin.png', ranking: 21, location: 'Canada' },
        { id: 'ubc', name: 'University of British Columbia', logo: '/assets/img/uni-logo/deakin.png', ranking: 34, location: 'Canada' },
        { id: 'mcgill', name: 'McGill University', logo: '/assets/img/uni-logo/deakin.png', ranking: 30, location: 'Canada' },
        { id: 'mcmaster', name: 'McMaster University', logo: '/assets/img/uni-logo/deakin.png', location: 'Canada' },
        { id: 'alberta', name: 'University of Alberta', logo: '/assets/img/uni-logo/deakin.png', location: 'Canada' },
        { id: 'montreal', name: 'University of Montreal', logo: '/assets/img/uni-logo/deakin.png', location: 'Canada' },
        { id: 'waterloo', name: 'University of Waterloo', logo: '/assets/img/uni-logo/deakin.png', location: 'Canada' },
        { id: 'western', name: 'Western University', logo: '/assets/img/uni-logo/deakin.png', location: 'Canada' },
        { id: 'calgary', name: 'University of Calgary', logo: '/assets/img/uni-logo/deakin.png', location: 'Canada' },
        { id: 'queens', name: 'Queen\'s University', logo: '/assets/img/uni-logo/deakin.png', location: 'Canada' }
      ]
    },
    {
      id: 'united-kingdom',
      slug: 'united-kingdom',
      name: 'United Kingdom',
      code: 'GB',
      flag: '🇬🇧',
      flagImage: '/assets/img/country/uk-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/uk-bg-s.jpg',
      title: 'Study in United Kingdom',
      description: 'Study at prestigious universities with centuries of academic excellence',
      highlights: ['World-renowned universities', 'Rich cultural heritage', 'Graduate route visa', 'Central location in Europe'],
      quickFacts: {
        language: 'English',
        currency: 'GBP',
        timezone: 'UTC+0',
        studyDuration: '1-3 years'
      },
      universities: [
        { id: 'oxford', name: 'University of Oxford', logo: '/assets/img/uni-logo/deakin.png', ranking: 1, location: 'United Kingdom' },
        { id: 'cambridge', name: 'University of Cambridge', logo: '/assets/img/uni-logo/deakin.png', ranking: 2, location: 'United Kingdom' },
        { id: 'imperial', name: 'Imperial College London', logo: '/assets/img/uni-logo/deakin.png', ranking: 6, location: 'United Kingdom' },
        { id: 'ucl', name: 'University College London', logo: '/assets/img/uni-logo/deakin.png', ranking: 9, location: 'United Kingdom' },
        { id: 'lse', name: 'London School of Economics', logo: '/assets/img/uni-logo/deakin.png', ranking: 45, location: 'United Kingdom' },
        { id: 'edinburgh', name: 'University of Edinburgh', logo: '/assets/img/uni-logo/deakin.png', ranking: 22, location: 'United Kingdom' },
        { id: 'kcl', name: 'King\'s College London', logo: '/assets/img/uni-logo/deakin.png', ranking: 35, location: 'United Kingdom' },
        { id: 'manchester', name: 'University of Manchester', logo: '/assets/img/uni-logo/deakin.png', ranking: 27, location: 'United Kingdom' },
        { id: 'warwick', name: 'University of Warwick', logo: '/assets/img/uni-logo/deakin.png', ranking: 67, location: 'United Kingdom' },
        { id: 'bristol', name: 'University of Bristol', logo: '/assets/img/uni-logo/deakin.png', ranking: 55, location: 'United Kingdom' }
      ]
    },
    {
      id: 'norway',
      slug: 'norway',
      name: 'Norway',
      code: 'NO',
      flag: '🇳🇴',
      flagImage: '/assets/img/country/norway-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/norway-bg.jpg',
      title: 'Study in Norway',
      description: 'Study in a country known for high quality of life and excellent education',
      highlights: ['Free tuition', 'High quality of life', 'Beautiful nature', 'Strong economy'],
      quickFacts: {
        language: 'Norwegian, English',
        currency: 'NOK',
        timezone: 'UTC+1',
        studyDuration: '2-5 years'
      },
      universities: [
        { id: 'oslo', name: 'University of Oslo', logo: '/assets/img/uni-logo/deakin.png', ranking: 117, location: 'Norway' },
        { id: 'ntnu', name: 'Norwegian University of Science and Technology', logo: '/assets/img/uni-logo/deakin.png', location: 'Norway' },
        { id: 'bergen', name: 'University of Bergen', logo: '/assets/img/uni-logo/deakin.png', location: 'Norway' },
        { id: 'uit', name: 'UiT The Arctic University of Norway', logo: '/assets/img/uni-logo/deakin.png', location: 'Norway' },
        { id: 'bi', name: 'BI Norwegian Business School', logo: '/assets/img/uni-logo/deakin.png', location: 'Norway' },
        { id: 'nhh', name: 'Norwegian School of Economics', logo: '/assets/img/uni-logo/deakin.png', location: 'Norway' }
      ]
    },
    {
      id: 'united-states',
      slug: 'united-states',
      name: 'United States',
      code: 'US',
      flag: '🇺🇸',
      flagImage: '/assets/img/country/usa-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/usa-bg-s.jpg',
      title: 'Study in United States',
      description: 'Study at top-ranked universities with cutting-edge research and innovation',
      highlights: ['World\'s top universities', 'Research opportunities', 'Diverse programs', 'Career opportunities'],
      quickFacts: {
        language: 'English',
        currency: 'USD',
        timezone: 'UTC-5 to UTC-10',
        studyDuration: '2-4 years'
      },
      universities: [
        { id: 'harvard', name: 'Harvard University', logo: '/assets/img/uni-logo/deakin.png', ranking: 4, location: 'United States' },
        { id: 'stanford', name: 'Stanford University', logo: '/assets/img/uni-logo/deakin.png', ranking: 3, location: 'United States' },
        { id: 'mit', name: 'Massachusetts Institute of Technology', logo: '/assets/img/uni-logo/deakin.png', ranking: 1, location: 'United States' },
        { id: 'yale', name: 'Yale University', logo: '/assets/img/uni-logo/deakin.png', ranking: 9, location: 'United States' },
        { id: 'princeton', name: 'Princeton University', logo: '/assets/img/uni-logo/deakin.png', ranking: 6, location: 'United States' },
        { id: 'columbia', name: 'Columbia University', logo: '/assets/img/uni-logo/deakin.png', ranking: 11, location: 'United States' },
        { id: 'berkeley', name: 'University of California Berkeley', logo: '/assets/img/uni-logo/deakin.png', ranking: 10, location: 'United States' },
        { id: 'chicago', name: 'University of Chicago', logo: '/assets/img/uni-logo/deakin.png', ranking: 10, location: 'United States' },
        { id: 'cornell', name: 'Cornell University', logo: '/assets/img/uni-logo/deakin.png', ranking: 12, location: 'United States' },
        { id: 'penn', name: 'University of Pennsylvania', logo: '/assets/img/uni-logo/deakin.png', ranking: 12, location: 'United States' }
      ]
    },
    {
      id: 'bangladesh',
      slug: 'bangladesh',
      name: 'Bangladesh',
      code: 'BD',
      flag: '🇧🇩',
      flagImage: '/assets/img/country/bangaladesh-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/usa-bg-s.jpg',
      title: 'Study in Bangladesh',
      description: 'Discover education opportunities in this vibrant South Asian country',
      highlights: ['Affordable education', 'Cultural diversity', 'Growing economy', 'Strategic location'],
      quickFacts: {
        language: 'Bengali, English',
        currency: 'BDT',
        timezone: 'UTC+6',
        studyDuration: '3-4 years'
      },
      universities: []
    },
    {
      id: 'sri-lanka',
      slug: 'sri-lanka',
      name: 'Sri Lanka',
      code: 'LK',
      flag: '🇱🇰',
      flagImage: '/assets/img/country/srilanka-gif.gif',
      backgroundImage: '/assets/img/country/country-bg/canada-bg-s.jpg',
      title: 'Study in Sri Lanka',
      description: 'Experience quality education in the pearl of the Indian Ocean',
      highlights: ['Tropical paradise', 'Affordable costs', 'English medium', 'Rich culture'],
      quickFacts: {
        language: 'Sinhala, Tamil, English',
        currency: 'LKR',
        timezone: 'UTC+5:30',
        studyDuration: '3-4 years'
      },
      universities: []
    }
  ];

  const country = countries.find(c => c.slug === slug || c.id === slug);

  if (!country) {
    return NextResponse.json(
      { error: 'Country not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(country);

  /* ORIGINAL CODE - DISABLED FOR NOW
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
  */
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
