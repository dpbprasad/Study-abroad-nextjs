import React from 'react';

/**
 * Grid Component - Responsive grid layout system
 *
 * Usage:
 * <Grid cols={{ xs: 1, md: 2, lg: 3 }} gap={6}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 */

interface GridProps {
  children: React.ReactNode;
  /** Number of columns at different breakpoints */
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /** Gap between grid items (in Tailwind spacing units) */
  gap?: number;
  /** Additional CSS classes */
  className?: string;
}

const Grid = ({
  children,
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 6,
  className = ''
}: GridProps) => {
  // Build responsive grid classes
  const getGridCols = () => {
    const classes = [];

    if (cols.xs) classes.push(`grid-cols-${cols.xs}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);

    return classes.join(' ');
  };

  return (
    <div
      className={`
        grid
        ${getGridCols()}
        gap-${gap}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Grid;
