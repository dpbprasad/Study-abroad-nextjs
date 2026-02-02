import React from 'react';

/**
 * Section Component - Standardized section wrapper for all page sections
 *
 * Usage:
 * <Section spacing="lg" variant="light">
 *   <Container>Your content</Container>
 * </Section>
 */

interface SectionProps {
  children: React.ReactNode;
  /** Background variant */
  variant?: 'default' | 'light' | 'dark' | 'gray';
  /** Vertical spacing (padding top/bottom) */
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Additional CSS classes */
  className?: string;
  /** Section ID for navigation */
  id?: string;
}

const Section = ({
  children,
  variant = 'default',
  spacing = 'md',
  className = '',
  id
}: SectionProps) => {
  // Spacing mapping to match your existing design system
  const spacingMap = {
    none: '',
    sm: 'py-12 md:py-16',           // Small: 48px → 64px
    md: 'py-16 md:py-24',           // Medium: 64px → 96px
    lg: 'py-20 md:py-32',           // Large: 80px → 128px
    xl: 'py-24 md:py-40'            // XL: 96px → 160px
  };

  // Background variants
  const variantMap = {
    default: '',
    light: 'bg-white',
    dark: 'dark-green text-white',
    gray: 'gray-bg'
  };

  return (
    <section
      id={id}
      className={`
        ${spacingMap[spacing]}
        ${variantMap[variant]}
        ${className}
      `.trim()}
    >
      {children}
    </section>
  );
};

export default Section;
