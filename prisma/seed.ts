import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.university.deleteMany();
  await prisma.country.deleteMany();

  console.log('✅ Cleared existing data');

  // Seed Countries with Universities
  const countries = [
    {
      slug: 'australia',
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      flagGif: '/assets/img/country/australia-gif.gif',
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
        { name: 'Deakin University', logo: '/assets/img/uni-logo/deakin.png', website: 'https://www.deakin.edu.au/' },
        { name: 'University of Melbourne', logo: '/assets/img/uni-logo/deakin.png', ranking: 14 },
        { name: 'University of Sydney', logo: '/assets/img/uni-logo/deakin.png', ranking: 19 },
        { name: 'Australian National University', logo: '/assets/img/uni-logo/deakin.png', ranking: 27 },
        { name: 'Monash University', logo: '/assets/img/uni-logo/deakin.png', ranking: 37 },
        { name: 'University of Queensland', logo: '/assets/img/uni-logo/deakin.png', ranking: 43 },
        { name: 'RMIT University', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Adelaide', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Technology Sydney', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Macquarie University', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Griffith University', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'La Trobe University', logo: '/assets/img/uni-logo/deakin.png' }
      ]
    },
    {
      slug: 'new-zealand',
      name: 'New Zealand',
      code: 'NZ',
      flag: '🇳🇿',
      flagGif: '/assets/img/country/newzealand-gif.gif',
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
        { name: 'University of Auckland', logo: '/assets/img/uni-logo/deakin.png', ranking: 85 },
        { name: 'University of Otago', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Victoria University of Wellington', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Canterbury', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Massey University', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Lincoln University', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Auckland University of Technology', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Waikato', logo: '/assets/img/uni-logo/deakin.png' }
      ]
    },
    {
      slug: 'canada',
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      flagGif: '/assets/img/country/canada-gif.gif',
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
        { name: 'University of Toronto', logo: '/assets/img/uni-logo/deakin.png', ranking: 21 },
        { name: 'University of British Columbia', logo: '/assets/img/uni-logo/deakin.png', ranking: 34 },
        { name: 'McGill University', logo: '/assets/img/uni-logo/deakin.png', ranking: 30 },
        { name: 'McMaster University', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Alberta', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Montreal', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Waterloo', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Western University', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Calgary', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Queen\'s University', logo: '/assets/img/uni-logo/deakin.png' }
      ]
    },
    {
      slug: 'united-kingdom',
      name: 'United Kingdom',
      code: 'GB',
      flag: '🇬🇧',
      flagGif: '/assets/img/country/uk-gif.gif',
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
        { name: 'University of Oxford', logo: '/assets/img/uni-logo/deakin.png', ranking: 1 },
        { name: 'University of Cambridge', logo: '/assets/img/uni-logo/deakin.png', ranking: 2 },
        { name: 'Imperial College London', logo: '/assets/img/uni-logo/deakin.png', ranking: 6 },
        { name: 'University College London', logo: '/assets/img/uni-logo/deakin.png', ranking: 9 },
        { name: 'London School of Economics', logo: '/assets/img/uni-logo/deakin.png', ranking: 45 },
        { name: 'University of Edinburgh', logo: '/assets/img/uni-logo/deakin.png', ranking: 22 },
        { name: 'King\'s College London', logo: '/assets/img/uni-logo/deakin.png', ranking: 35 },
        { name: 'University of Manchester', logo: '/assets/img/uni-logo/deakin.png', ranking: 27 },
        { name: 'University of Warwick', logo: '/assets/img/uni-logo/deakin.png', ranking: 67 },
        { name: 'University of Bristol', logo: '/assets/img/uni-logo/deakin.png', ranking: 55 }
      ]
    },
    {
      slug: 'norway',
      name: 'Norway',
      code: 'NO',
      flag: '🇳🇴',
      flagGif: '/assets/img/country/norway-gif.gif',
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
        { name: 'University of Oslo', logo: '/assets/img/uni-logo/deakin.png', ranking: 117 },
        { name: 'Norwegian University of Science and Technology', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Bergen', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'UiT The Arctic University of Norway', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'BI Norwegian Business School', logo: '/assets/img/uni-logo/deakin.png' },
        { name: 'Norwegian School of Economics', logo: '/assets/img/uni-logo/deakin.png' }
      ]
    },
    {
      slug: 'united-states',
      name: 'United States',
      code: 'US',
      flag: '🇺🇸',
      flagGif: '/assets/img/country/usa-gif.gif',
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
        { name: 'Harvard University', logo: '/assets/img/uni-logo/deakin.png', ranking: 4 },
        { name: 'Stanford University', logo: '/assets/img/uni-logo/deakin.png', ranking: 3 },
        { name: 'Massachusetts Institute of Technology', logo: '/assets/img/uni-logo/deakin.png', ranking: 1 },
        { name: 'Yale University', logo: '/assets/img/uni-logo/deakin.png', ranking: 9 },
        { name: 'Princeton University', logo: '/assets/img/uni-logo/deakin.png', ranking: 6 },
        { name: 'Columbia University', logo: '/assets/img/uni-logo/deakin.png', ranking: 11 },
        { name: 'University of California Berkeley', logo: '/assets/img/uni-logo/deakin.png', ranking: 10 },
        { name: 'University of Chicago', logo: '/assets/img/uni-logo/deakin.png', ranking: 10 },
        { name: 'Cornell University', logo: '/assets/img/uni-logo/deakin.png', ranking: 12 },
        { name: 'University of Pennsylvania', logo: '/assets/img/uni-logo/deakin.png', ranking: 12 }
      ]
    },
    {
      slug: 'bangladesh',
      name: 'Bangladesh',
      code: 'BD',
      flag: '🇧🇩',
      flagGif: '/assets/img/country/bangaladesh-gif.gif',
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
      slug: 'sri-lanka',
      name: 'Sri Lanka',
      code: 'LK',
      flag: '🇱🇰',
      flagGif: '/assets/img/country/srilanka-gif.gif',
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

  // Create countries and universities
  for (const countryData of countries) {
    const { universities, ...countryInfo } = countryData;

    const country = await prisma.country.create({
      data: {
        slug: countryInfo.slug,
        name: countryInfo.name,
        flag: countryInfo.flag,
        flagGif: countryInfo.flagGif,
        backgroundImage: countryInfo.backgroundImage,
        title: countryInfo.title,
        description: countryInfo.description,
        highlights: countryInfo.highlights,
        quickFacts: countryInfo.quickFacts,
        universities: {
          create: universities.map(uni => ({
            name: uni.name,
            logo: uni.logo,
            website: uni.website,
            ranking: uni.ranking,
            location: countryInfo.name
          }))
        }
      }
    });

    console.log(`✅ Created ${countryInfo.name} with ${universities.length} universities`);
  }

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
