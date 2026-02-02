import React from 'react';

/**
 * Heading Component - Semantic heading with consistent styling
 *
 * Usage:
 * <Heading level="h1" size="xl">Page Title</Heading>
 * <Heading level="h2" size="lg" align="center">Section Title</Heading>
 */

interface HeadingProps {
  children: React.ReactNode;
  /** HTML heading level (semantic) */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Visual size (can differ from level for flexibility) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Text color */
  color?: 'default' | 'primary' | 'secondary' | 'muted';
  /** Bottom margin */
  marginBottom?: 'none' | 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

const Heading = ({
  children,
  level = 'h2',
  size,
  weight = 'bold',
  align = 'left',
  color = 'default',
  marginBottom = 'md',
  className = ''
}: HeadingProps) => {
  const Component = level;

  // Default size based on level if not specified
  const defaultSizeMap = {
    h1: '3xl',
    h2: '2xl',
    h3: 'xl',
    h4: 'lg',
    h5: 'md',
    h6: 'sm'
  };

  const finalSize = size || defaultSizeMap[level];

  // Size styles
  const sizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl md:text-3xl',
    '3xl': 'text-3xl md:text-4xl lg:text-5xl'
  };

  // Weight styles
  const weightMap = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  // Alignment styles
  const alignMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  // Color styles
  const colorMap = {
    default: 'text-gray-900',
    primary: 'text-[#00AF5B]',
    secondary: 'text-gray-700',
    muted: 'text-gray-500'
  };

  // Margin bottom styles
  const marginMap = {
    none: '',
    sm: 'mb-2',
    md: 'mb-4',
    lg: 'mb-6'
  };

  return (
    <Component
      className={`
        ${sizeMap[finalSize]}
        ${weightMap[weight]}
        ${alignMap[align]}
        ${colorMap[color]}
        ${marginMap[marginBottom]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </Component>
  );
};

export default Heading;
