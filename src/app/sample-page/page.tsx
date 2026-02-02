/**
 * Sample Component Showcase Page
 *
 * This page demonstrates a REAL-WORLD example using ALL layout and UI components
 * together in a realistic, production-ready structure.
 *
 * Visit: http://localhost:3000/sample-page
 *
 * This is what a refactored page will look like!
 */

import { Section, Container, Grid, Stack } from '@/components/layout';
import { Button, Card, Badge, Heading, Link } from '@/components/ui';
import Image from 'next/image';

export default function SamplePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <Section variant="dark" spacing="xl">
        <Container>
          <Grid cols={{ xs: 1, lg: 2 }} gap={8}>
            {/* Left Column - Content */}
            <Stack direction="vertical" spacing={6} justify="center">
              <Stack direction="horizontal" spacing={2} align="center">
                <Badge variant="success" size="lg">New Service</Badge>
                <Badge variant="primary" rounded="full">2026</Badge>
              </Stack>

              <Stack direction="vertical" spacing={4}>
                <Heading level="h1" size="3xl" marginBottom="none">
                  Your Dream University Awaits
                </Heading>
                <Heading level="h2" size="lg" color="default" weight="normal" marginBottom="none">
                  Expert Study Abroad Consultation
                </Heading>
              </Stack>

              <p className="text-lg opacity-90">
                We provide comprehensive visa and immigration consultation services to help you
                achieve your dreams of studying abroad. With over 15 years of experience and a
                98% visa success rate, we're your trusted partner in this journey.
              </p>

              <Stack direction="horizontal" spacing={4} wrap>
                <Button variant="primary" size="lg" href="/contact">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" href="/services">
                  Our Services
                </Button>
              </Stack>

              <Stack direction="horizontal" spacing={6} wrap>
                <div>
                  <Heading level="h3" size="2xl" color="default" marginBottom="sm">
                    5000+
                  </Heading>
                  <p className="text-sm opacity-80">Happy Students</p>
                </div>
                <div>
                  <Heading level="h3" size="2xl" color="default" marginBottom="sm">
                    98%
                  </Heading>
                  <p className="text-sm opacity-80">Visa Success Rate</p>
                </div>
                <div>
                  <Heading level="h3" size="2xl" color="default" marginBottom="sm">
                    15+
                  </Heading>
                  <p className="text-sm opacity-80">Years Experience</p>
                </div>
              </Stack>
            </Stack>

            {/* Right Column - Image */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/img/hero/banner-student-img.png"
                  alt="Student studying abroad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* SERVICES SECTION */}
      <Section variant="light" spacing="xl">
        <Container>
          <Stack direction="vertical" spacing={8} align="center">
            {/* Section Header */}
            <Stack direction="vertical" spacing={3} align="center">
              <Badge variant="primary">Our Services</Badge>
              <Heading level="h2" size="2xl" align="center">
                Complete Study Abroad Solutions
              </Heading>
              <p className="text-lg text-gray-600 text-center max-w-2xl">
                From choosing the right university to landing in your dream country,
                we handle every step of your journey.
              </p>
            </Stack>

            {/* Service Cards */}
            <Grid cols={{ xs: 1, md: 2, lg: 3 }} gap={6}>
              {/* Service 1 */}
              <Card variant="elevated" padding="lg" hoverable>
                <Card.Header>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#00AF5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <Stack direction="horizontal" spacing={3} align="center" justify="between">
                    <Heading level="h3" size="xl" marginBottom="none">
                      University Selection
                    </Heading>
                    <Badge variant="success" size="sm">Popular</Badge>
                  </Stack>
                </Card.Header>
                <Card.Body>
                  <Stack direction="vertical" spacing={4}>
                    <p className="text-gray-600">
                      Get personalized guidance to choose the perfect university that matches
                      your academic goals, budget, and career aspirations.
                    </p>
                    <Stack direction="vertical" spacing={2}>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-green-500">✓</span>
                        <p className="text-sm text-gray-600">Course & university matching</p>
                      </Stack>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-green-500">✓</span>
                        <p className="text-sm text-gray-600">Application assistance</p>
                      </Stack>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-green-500">✓</span>
                        <p className="text-sm text-gray-600">Scholarship guidance</p>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card.Body>
                <Card.Footer>
                  <Button variant="ghost" size="sm" href="/services">
                    Learn More →
                  </Button>
                </Card.Footer>
              </Card>

              {/* Service 2 */}
              <Card variant="elevated" padding="lg" hoverable>
                <Card.Header>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <Stack direction="horizontal" spacing={3} align="center" justify="between">
                    <Heading level="h3" size="xl" marginBottom="none">
                      Visa Processing
                    </Heading>
                    <Badge variant="info" size="sm">98% Success</Badge>
                  </Stack>
                </Card.Header>
                <Card.Body>
                  <Stack direction="vertical" spacing={4}>
                    <p className="text-gray-600">
                      Navigate the complex visa process with confidence. Our experts ensure
                      your application is complete, accurate, and submitted on time.
                    </p>
                    <Stack direction="vertical" spacing={2}>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-blue-500">✓</span>
                        <p className="text-sm text-gray-600">Document preparation</p>
                      </Stack>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-blue-500">✓</span>
                        <p className="text-sm text-gray-600">Interview coaching</p>
                      </Stack>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-blue-500">✓</span>
                        <p className="text-sm text-gray-600">Application tracking</p>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card.Body>
                <Card.Footer>
                  <Button variant="ghost" size="sm" href="/services">
                    Learn More →
                  </Button>
                </Card.Footer>
              </Card>

              {/* Service 3 */}
              <Card variant="elevated" padding="lg" hoverable>
                <Card.Header>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <Stack direction="horizontal" spacing={3} align="center" justify="between">
                    <Heading level="h3" size="xl" marginBottom="none">
                      Country Selection
                    </Heading>
                    <Badge variant="warning" size="sm">New</Badge>
                  </Stack>
                </Card.Header>
                <Card.Body>
                  <Stack direction="vertical" spacing={4}>
                    <p className="text-gray-600">
                      Explore study destinations worldwide. We help you find the perfect
                      country that aligns with your education goals and lifestyle preferences.
                    </p>
                    <Stack direction="vertical" spacing={2}>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-purple-500">✓</span>
                        <p className="text-sm text-gray-600">Cost of living analysis</p>
                      </Stack>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-purple-500">✓</span>
                        <p className="text-sm text-gray-600">Work opportunities</p>
                      </Stack>
                      <Stack direction="horizontal" spacing={2} align="start">
                        <span className="text-purple-500">✓</span>
                        <p className="text-sm text-gray-600">Post-study visa options</p>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card.Body>
                <Card.Footer>
                  <Button variant="ghost" size="sm" href="/countries">
                    Explore Countries →
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* DESTINATIONS SECTION */}
      <Section variant="gray" spacing="xl">
        <Container>
          <Stack direction="vertical" spacing={8} align="center">
            {/* Section Header */}
            <Stack direction="vertical" spacing={3} align="center">
              <Badge variant="secondary">Top Destinations</Badge>
              <Heading level="h2" size="2xl" align="center">
                Study in World's Best Countries
              </Heading>
              <p className="text-lg text-gray-600 text-center max-w-2xl">
                Choose from our top study destinations with excellent education systems
                and welcoming international student communities.
              </p>
            </Stack>

            {/* Country Cards */}
            <Grid cols={{ xs: 2, sm: 3, lg: 6 }} gap={4}>
              {[
                { name: 'USA', flag: '🇺🇸', students: '2500+' },
                { name: 'UK', flag: '🇬🇧', students: '1800+' },
                { name: 'Canada', flag: '🇨🇦', students: '1500+' },
                { name: 'Australia', flag: '🇦🇺', students: '1200+' },
                { name: 'Germany', flag: '🇩🇪', students: '900+' },
                { name: 'France', flag: '🇫🇷', students: '600+' }
              ].map((country) => (
                <Card key={country.name} variant="elevated" padding="md" hoverable>
                  <Stack direction="vertical" spacing={2} align="center">
                    <div className="text-5xl">{country.flag}</div>
                    <Heading level="h4" size="md" align="center" marginBottom="none">
                      {country.name}
                    </Heading>
                    <Badge variant="default" size="sm">{country.students}</Badge>
                  </Stack>
                </Card>
              ))}
            </Grid>

            <Button variant="outline" size="lg" href="/countries">
              View All Countries
            </Button>
          </Stack>
        </Container>
      </Section>

      {/* PROCESS SECTION */}
      <Section variant="light" spacing="xl">
        <Container>
          <Stack direction="vertical" spacing={8} align="center">
            {/* Section Header */}
            <Stack direction="vertical" spacing={3} align="center">
              <Badge variant="primary">Simple Process</Badge>
              <Heading level="h2" size="2xl" align="center">
                How It Works
              </Heading>
              <p className="text-lg text-gray-600 text-center max-w-2xl">
                Our streamlined 4-step process makes studying abroad simple and stress-free.
              </p>
            </Stack>

            {/* Process Steps */}
            <Grid cols={{ xs: 1, md: 2, lg: 4 }} gap={6}>
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  desc: 'Meet with our experts to discuss your goals, preferences, and budget.'
                },
                {
                  step: '02',
                  title: 'University Selection',
                  desc: 'We shortlist universities that match your profile and aspirations.'
                },
                {
                  step: '03',
                  title: 'Application & Visa',
                  desc: 'Complete application process and visa documentation with our guidance.'
                },
                {
                  step: '04',
                  title: 'Pre-Departure',
                  desc: 'Get ready for your journey with accommodation, travel, and orientation support.'
                }
              ].map((item, index) => (
                <Card key={index} variant="outlined" padding="lg">
                  <Stack direction="vertical" spacing={4}>
                    <div className="w-12 h-12 bg-[#00AF5B] text-white rounded-full flex items-center justify-center">
                      <Heading level="h3" size="lg" color="default" marginBottom="none">
                        {item.step}
                      </Heading>
                    </div>
                    <Heading level="h4" size="lg" marginBottom="none">
                      {item.title}
                    </Heading>
                    <p className="text-gray-600">{item.desc}</p>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section variant="dark" spacing="xl">
        <Container>
          <Stack direction="vertical" spacing={8}>
            {/* Section Header */}
            <Stack direction="vertical" spacing={3} align="center">
              <Badge variant="primary">Success Stories</Badge>
              <Heading level="h2" size="2xl" align="center" color="default">
                What Our Students Say
              </Heading>
              <p className="text-lg text-center opacity-90 max-w-2xl">
                Real stories from students who achieved their dreams with our help.
              </p>
            </Stack>

            {/* Testimonial Cards */}
            <Grid cols={{ xs: 1, md: 3 }} gap={6}>
              {[
                {
                  name: 'Sarah Johnson',
                  country: 'Now in USA 🇺🇸',
                  university: 'Stanford University',
                  text: 'The team guided me through every step. From selecting the right university to visa approval, their expertise was invaluable. Now I\'m living my dream at Stanford!'
                },
                {
                  name: 'Raj Patel',
                  country: 'Now in UK 🇬🇧',
                  university: 'University of Oxford',
                  text: 'I was overwhelmed by the application process, but they made it so simple. Their visa interview preparation was spot-on. Highly recommended!'
                },
                {
                  name: 'Maria Garcia',
                  country: 'Now in Canada 🇨🇦',
                  university: 'University of Toronto',
                  text: 'Best decision I made was choosing this consultancy. Professional, responsive, and genuinely care about students. Thank you for making my dream come true!'
                }
              ].map((testimonial, index) => (
                <Card key={index} variant="filled" padding="lg">
                  <Stack direction="vertical" spacing={4}>
                    <div className="text-[#00AF5B] text-4xl">"</div>
                    <p className="text-gray-700 italic">{testimonial.text}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <Heading level="h4" size="md" marginBottom="sm">
                        {testimonial.name}
                      </Heading>
                      <Stack direction="vertical" spacing={1}>
                        <Badge variant="success" size="sm">{testimonial.country}</Badge>
                        <p className="text-sm text-gray-600">{testimonial.university}</p>
                      </Stack>
                    </div>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section variant="light" spacing="xl">
        <Container size="md">
          <Card variant="elevated" padding="lg">
            <Stack direction="vertical" spacing={6} align="center">
              <Stack direction="vertical" spacing={3} align="center">
                <Badge variant="primary" size="lg">Start Your Journey Today</Badge>
                <Heading level="h2" size="2xl" align="center">
                  Ready to Study Abroad?
                </Heading>
                <p className="text-lg text-gray-600 text-center max-w-xl">
                  Book a free consultation with our expert counselors and take the first
                  step towards your international education dream.
                </p>
              </Stack>

              <Stack direction="horizontal" spacing={4} wrap justify="center">
                <Button variant="primary" size="lg" href="/contact">
                  Book Free Consultation
                </Button>
                <Button variant="outline" size="lg" href="/about">
                  Learn More About Us
                </Button>
              </Stack>

              <Stack direction="horizontal" spacing={6} wrap justify="center">
                <Stack direction="horizontal" spacing={2} align="center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-600">Free Consultation</p>
                </Stack>
                <Stack direction="horizontal" spacing={2} align="center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-600">No Hidden Fees</p>
                </Stack>
                <Stack direction="horizontal" spacing={2} align="center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-600">98% Success Rate</p>
                </Stack>
              </Stack>

              <div className="bg-gray-50 rounded-lg p-4 w-full">
                <Stack direction="vertical" spacing={2}>
                  <Heading level="h4" size="sm" align="center">
                    Contact Us
                  </Heading>
                  <Stack direction="horizontal" spacing={4} justify="center" wrap>
                    <Link href="tel:+1234567890" variant="primary">
                      📞 +1 (234) 567-890
                    </Link>
                    <Link href="mailto:info@studyabroad.com" variant="primary">
                      ✉️ info@studyabroad.com
                    </Link>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
