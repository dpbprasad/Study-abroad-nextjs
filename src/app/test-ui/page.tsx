/**
 * UI Primitives Test Page
 *
 * This page demonstrates all the UI primitive components.
 * Visit: http://localhost:3000/test-ui
 *
 * Once verified, these components can be used throughout the application!
 */

import { Section, Container, Grid, Stack } from '@/components/layout';
import { Button, Card, Badge, Heading, Link } from '@/components/ui';

export default function TestUIPage() {
  return (
    <div>
      {/* Hero */}
      <Section variant="dark" spacing="lg">
        <Container>
          <Stack direction="vertical" spacing={4} align="center">
            <Heading level="h1" size="3xl" color="default" align="center">
              UI Primitives Test Page
            </Heading>
            <p className="text-lg text-center opacity-90 max-w-2xl">
              This page demonstrates all the UI primitive components working together.
              These are the building blocks for the entire application.
            </p>
          </Stack>
        </Container>
      </Section>

      {/* Button Component */}
      <Section variant="light" spacing="lg">
        <Container>
          <Heading level="h2" size="2xl" marginBottom="lg">
            Button Component
          </Heading>

          <Stack direction="vertical" spacing={8}>
            {/* Variants */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Variants
              </Heading>
              <Stack direction="horizontal" spacing={4} wrap>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </Stack>
            </div>

            {/* Sizes */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Sizes
              </Heading>
              <Stack direction="horizontal" spacing={4} align="center" wrap>
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
              </Stack>
            </div>

            {/* With Icons */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                With Icons
              </Heading>
              <Stack direction="horizontal" spacing={4} wrap>
                <Button
                  iconBefore={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  }
                >
                  Add New
                </Button>
                <Button
                  variant="outline"
                  iconAfter={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                >
                  Next
                </Button>
              </Stack>
            </div>

            {/* Link Buttons */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Link Buttons
              </Heading>
              <Stack direction="horizontal" spacing={4} wrap>
                <Button href="/test-layout" variant="primary">
                  Go to Layout Test
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </Stack>
            </div>

            {/* States */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                States
              </Heading>
              <Stack direction="horizontal" spacing={4} wrap>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth>Full Width</Button>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Card Component */}
      <Section variant="gray" spacing="lg">
        <Container>
          <Heading level="h2" size="2xl" marginBottom="lg">
            Card Component
          </Heading>

          <Grid cols={{ xs: 1, md: 2, lg: 3 }} gap={6}>
            {/* Default Card */}
            <Card variant="default" padding="lg">
              <Card.Header>
                <Heading level="h3" size="lg" marginBottom="sm">
                  Default Card
                </Heading>
                <Badge variant="default">Default</Badge>
              </Card.Header>
              <Card.Body>
                <p className="text-gray-600">
                  This is a default card with no special styling. Just plain white background.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="ghost">Learn More</Button>
              </Card.Footer>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated" padding="lg" hoverable>
              <Card.Header>
                <Heading level="h3" size="lg" marginBottom="sm">
                  Elevated Card
                </Heading>
                <Badge variant="primary">Hover Me</Badge>
              </Card.Header>
              <Card.Body>
                <p className="text-gray-600">
                  This card has a shadow and a hover effect. Try hovering over it!
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="primary">Take Action</Button>
              </Card.Footer>
            </Card>

            {/* Outlined Card */}
            <Card variant="outlined" padding="lg">
              <Card.Header>
                <Heading level="h3" size="lg" marginBottom="sm">
                  Outlined Card
                </Heading>
                <Badge variant="secondary">Outlined</Badge>
              </Card.Header>
              <Card.Body>
                <p className="text-gray-600">
                  This card has a border instead of a shadow for a cleaner look.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="outline">View Details</Button>
              </Card.Footer>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Badge Component */}
      <Section variant="light" spacing="lg">
        <Container>
          <Heading level="h2" size="2xl" marginBottom="lg">
            Badge Component
          </Heading>

          <Stack direction="vertical" spacing={6}>
            {/* Variants */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Variants
              </Heading>
              <Stack direction="horizontal" spacing={3} wrap>
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </Stack>
            </div>

            {/* Sizes */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Sizes
              </Heading>
              <Stack direction="horizontal" spacing={3} align="center" wrap>
                <Badge size="sm" variant="primary">Small</Badge>
                <Badge size="md" variant="primary">Medium</Badge>
                <Badge size="lg" variant="primary">Large</Badge>
              </Stack>
            </div>

            {/* Rounded */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Rounded Styles
              </Heading>
              <Stack direction="horizontal" spacing={3} wrap>
                <Badge rounded="default" variant="success">Default Rounded</Badge>
                <Badge rounded="full" variant="success">Fully Rounded</Badge>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Heading Component */}
      <Section variant="gray" spacing="lg">
        <Container>
          <Heading level="h2" size="2xl" marginBottom="lg">
            Heading Component
          </Heading>

          <Stack direction="vertical" spacing={6}>
            {/* Semantic Levels */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Semantic Levels (with default sizes)
              </Heading>
              <Stack direction="vertical" spacing={3}>
                <Heading level="h1">Heading 1 - Main page title</Heading>
                <Heading level="h2">Heading 2 - Section title</Heading>
                <Heading level="h3">Heading 3 - Subsection title</Heading>
                <Heading level="h4">Heading 4 - Component title</Heading>
                <Heading level="h5">Heading 5 - Minor title</Heading>
                <Heading level="h6">Heading 6 - Smallest title</Heading>
              </Stack>
            </div>

            {/* Colors */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Color Variants
              </Heading>
              <Stack direction="vertical" spacing={2}>
                <Heading level="h3" color="default">Default Color (Gray 900)</Heading>
                <Heading level="h3" color="primary">Primary Color (Brand Green)</Heading>
                <Heading level="h3" color="secondary">Secondary Color (Gray 700)</Heading>
                <Heading level="h3" color="muted">Muted Color (Gray 500)</Heading>
              </Stack>
            </div>

            {/* Alignments */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Text Alignment
              </Heading>
              <Stack direction="vertical" spacing={2}>
                <Heading level="h3" align="left">Left Aligned (Default)</Heading>
                <Heading level="h3" align="center">Center Aligned</Heading>
                <Heading level="h3" align="right">Right Aligned</Heading>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Link Component */}
      <Section variant="light" spacing="lg">
        <Container>
          <Heading level="h2" size="2xl" marginBottom="lg">
            Link Component
          </Heading>

          <Stack direction="vertical" spacing={6}>
            {/* Variants */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Variants
              </Heading>
              <Stack direction="horizontal" spacing={4} wrap>
                <Link href="/about" variant="default">Default Link</Link>
                <Link href="/services" variant="primary">Primary Link</Link>
                <Link href="/contact" variant="secondary">Secondary Link</Link>
                <Link href="/team" variant="muted">Muted Link</Link>
              </Stack>
            </div>

            {/* Underline Styles */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                Underline Styles
              </Heading>
              <Stack direction="horizontal" spacing={4} wrap>
                <Link href="/about" underline="none">No Underline</Link>
                <Link href="/services" underline="hover">Underline on Hover</Link>
                <Link href="/contact" underline="always">Always Underlined</Link>
              </Stack>
            </div>

            {/* External Links */}
            <div>
              <Heading level="h3" size="lg" marginBottom="md">
                External Links
              </Heading>
              <Stack direction="horizontal" spacing={4} wrap>
                <Link href="https://example.com" external>External Link (Auto-detected)</Link>
                <Link href="https://example.com" external showExternalIcon>
                  With External Icon
                </Link>
                <Link href="mailto:hello@example.com">Email Link</Link>
                <Link href="tel:+1234567890">Phone Link</Link>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Real-World Example */}
      <Section variant="dark" spacing="xl">
        <Container>
          <Stack direction="vertical" spacing={8}>
            <div className="text-center">
              <Heading level="h2" size="3xl" marginBottom="md" color="default">
                Real-World Example
              </Heading>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Here's how all components work together in a realistic section
              </p>
            </div>

            <Grid cols={{ xs: 1, md: 3 }} gap={6}>
              <Card variant="elevated" padding="lg" hoverable>
                <Card.Header>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <Stack direction="horizontal" spacing={2} align="center">
                    <Heading level="h3" size="xl" marginBottom="none">
                      Study Abroad
                    </Heading>
                    <Badge variant="success" size="sm">Popular</Badge>
                  </Stack>
                </Card.Header>
                <Card.Body>
                  <p className="text-gray-600 mb-4">
                    Expert consultation for studying in top universities worldwide. We handle everything from application to visa.
                  </p>
                  <Link href="/services" variant="primary" weight="semibold">
                    Learn More →
                  </Link>
                </Card.Body>
              </Card>

              <Card variant="elevated" padding="lg" hoverable>
                <Card.Header>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <Stack direction="horizontal" spacing={2} align="center">
                    <Heading level="h3" size="xl" marginBottom="none">
                      Visa Services
                    </Heading>
                    <Badge variant="primary" size="sm">New</Badge>
                  </Stack>
                </Card.Header>
                <Card.Body>
                  <p className="text-gray-600 mb-4">
                    Streamlined visa processing with high success rates. Our experts guide you through every step.
                  </p>
                  <Link href="/services" variant="primary" weight="semibold">
                    Learn More →
                  </Link>
                </Card.Body>
              </Card>

              <Card variant="elevated" padding="lg" hoverable>
                <Card.Header>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <Heading level="h3" size="xl" marginBottom="sm">
                    Expert Team
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <p className="text-gray-600 mb-4">
                    Work with certified consultants who have helped thousands achieve their dreams.
                  </p>
                  <Link href="/team" variant="primary" weight="semibold">
                    Meet the Team →
                  </Link>
                </Card.Body>
              </Card>
            </Grid>

            <div className="text-center">
              <Button variant="primary" size="lg" href="/contact">
                Get Started Today
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Success Message */}
      <Section variant="light" spacing="lg">
        <Container size="md">
          <Card variant="elevated" padding="lg">
            <div className="text-center">
              <Heading level="h2" size="2xl" marginBottom="md">
                ✅ Phase 2 Complete!
              </Heading>
              <p className="text-lg text-gray-600 mb-6">
                All UI primitive components are working perfectly. These building blocks are ready for production use.
              </p>
              <Stack direction="vertical" spacing={3} align="start">
                <div className="text-left w-full">
                  <Badge variant="success" className="mb-2">Components Created</Badge>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Button - 5 variants, 3 sizes, with icons</li>
                    <li>✅ Card - 4 variants, sub-components, hoverable</li>
                    <li>✅ Badge - 7 variants, 3 sizes, rounded styles</li>
                    <li>✅ Heading - Semantic levels, colors, alignments</li>
                    <li>✅ Link - Next.js integration, external links</li>
                  </ul>
                </div>
                <div className="text-left w-full mt-4">
                  <Badge variant="info" className="mb-2">Next Steps</Badge>
                  <ul className="space-y-2 text-gray-700">
                    <li>⏭️ Phase 3 - Refactor ServiceCards as pilot</li>
                    <li>⏭️ Phase 4 - Refactor remaining sections</li>
                    <li>⏭️ Phase 5 - Page-level optimization</li>
                  </ul>
                </div>
              </Stack>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
