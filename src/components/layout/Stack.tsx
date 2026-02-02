import React from 'react';

/**
 * Stack Component - Vertical or horizontal spacing between items
 *
 * Usage:
 * <Stack direction="vertical" spacing={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 */

interface StackProps {
  children: React.ReactNode;
  /** Stack direction */
  direction?: 'vertical' | 'horizontal';
  /** Spacing between items (in Tailwind spacing units) */
  spacing?: number;
  /** Alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify content */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Wrap items */
  wrap?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const Stack = ({
  children,
  direction = 'vertical',
  spacing = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = ''
}: StackProps) => {
  // Direction classes
  const directionClass = direction === 'vertical' ? 'flex-col' : 'flex-row';

  // Gap class
  const gapClass = `gap-${spacing}`;

  // Alignment classes
  const alignMap = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  // Justify classes
  const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
  };

  // Wrap class
  const wrapClass = wrap ? 'flex-wrap' : '';

  return (
    <div
      className={`
        flex
        ${directionClass}
        ${gapClass}
        ${alignMap[align]}
        ${justifyMap[justify]}
        ${wrapClass}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Stack;
