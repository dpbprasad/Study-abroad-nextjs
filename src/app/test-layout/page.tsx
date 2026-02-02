/**
 * Layout Components Test Page
 *
 * This page demonstrates all the new layout components.
 * Visit: http://localhost:3000/test-layout
 *
 * Once you verify everything works, we can start using these in production!
 */

import { Section, Container, Grid, Stack } from '@/components/layout';

export default function TestLayoutPage() {
  return (
    <div>
      {/* Test 1: Section with different variants and spacing */}
      <Section variant="light" spacing="md">
        <Container>
          <h1 className="text-4xl font-bold mb-4">Layout Components Test Page</h1>
          <p className="text-lg text-gray-600">
            This page demonstrates all the new layout components working together.
          </p>
        </Container>
      </Section>

      {/* Test 2: Grid with responsive columns */}
      <Section variant="gray" spacing="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Grid Component Test</h2>
          <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold mb-2">Card {num}</h3>
                <p className="text-gray-600">Grid item content</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Test 3: Stack (Vertical) */}
      <Section variant="light" spacing="lg">
        <Container size="md">
          <h2 className="text-3xl font-bold mb-6">Stack Component (Vertical)</h2>
          <Stack direction="vertical" spacing={4}>
            <div className="bg-blue-100 p-4 rounded">Item 1</div>
            <div className="bg-blue-200 p-4 rounded">Item 2</div>
            <div className="bg-blue-300 p-4 rounded">Item 3</div>
          </Stack>
        </Container>
      </Section>

      {/* Test 4: Stack (Horizontal) */}
      <Section variant="gray" spacing="lg">
        <Container size="md">
          <h2 className="text-3xl font-bold mb-6">Stack Component (Horizontal)</h2>
          <Stack direction="horizontal" spacing={4} justify="center">
            <div className="bg-green-100 p-4 rounded">Item 1</div>
            <div className="bg-green-200 p-4 rounded">Item 2</div>
            <div className="bg-green-300 p-4 rounded">Item 3</div>
          </Stack>
        </Container>
      </Section>

      {/* Test 5: Different container sizes */}
      <Section variant="light" spacing="xl">
        <Container size="sm">
          <div className="bg-purple-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Small Container</h3>
            <p className="text-gray-700">This container has a max-width of 540px</p>
          </div>
        </Container>
      </Section>

      <Section variant="gray" spacing="md">
        <Container size="lg">
          <div className="bg-purple-200 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Large Container (Default)</h3>
            <p className="text-gray-700">This container has a max-width of 960px</p>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="md">
        <Container size="xl">
          <div className="bg-purple-300 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">XL Container</h3>
            <p className="text-gray-700">This container has a max-width of 1140px</p>
          </div>
        </Container>
      </Section>

      {/* Test 6: Complex nested layout (Real-world example) */}
      <Section variant="dark" spacing="xl">
        <Container>
          <Stack direction="vertical" spacing={8}>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Real-World Example</h2>
              <p className="text-lg opacity-90">
                This shows how components work together in a real section
              </p>
            </div>

            <Grid cols={{ xs: 1, md: 2, lg: 3 }} gap={6}>
              {[
                { title: 'Feature 1', desc: 'Amazing feature description here' },
                { title: 'Feature 2', desc: 'Another great feature' },
                { title: 'Feature 3', desc: 'One more awesome feature' }
              ].map((feature, i) => (
                <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <Stack direction="vertical" spacing={3}>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      {i + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="opacity-80">{feature.desc}</p>
                  </Stack>
                </div>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Test 7: Spacing variants */}
      <Section variant="light" spacing="sm">
        <Container>
          <p className="text-center text-gray-600">Section with SMALL spacing</p>
        </Container>
      </Section>

      <Section variant="gray" spacing="md">
        <Container>
          <p className="text-center text-gray-600">Section with MEDIUM spacing (default)</p>
        </Container>
      </Section>

      <Section variant="light" spacing="lg">
        <Container>
          <p className="text-center text-gray-600">Section with LARGE spacing</p>
        </Container>
      </Section>

      <Section variant="gray" spacing="xl">
        <Container>
          <p className="text-center text-gray-600">Section with XL spacing</p>
        </Container>
      </Section>

      {/* Success message */}
      <Section variant="dark" spacing="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">✅ All Components Working!</h2>
            <p className="text-lg mb-6">
              If you can see this page with all the examples above, the foundation is ready!
            </p>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg inline-block">
              <Stack direction="vertical" spacing={2}>
                <p className="font-semibold">Next Steps:</p>
                <ul className="text-left space-y-2">
                  <li>✅ Phase 1 Complete - Foundation created</li>
                  <li>⏭️ Phase 2 - Create UI primitives (Button, Card, etc.)</li>
                  <li>⏭️ Phase 3 - Refactor first section as pilot</li>
                </ul>
              </Stack>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
