import React from 'react';

/**
 * Container Component - Max-width wrapper for content
 *
 * Usage:
 * <Container size="lg">
 *   Your content
 * </Container>
 */

interface ContainerProps {
  children: React.ReactNode;
  /** Container max-width size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Additional CSS classes */
  className?: string;
}

const Container = ({
  children,
  size = 'lg',
  className = ''
}: ContainerProps) => {
  // Size mapping to match Bootstrap container sizes
  const sizeMap = {
    sm: 'max-w-screen-sm',      // 540px
    md: 'max-w-screen-md',      // 720px
    lg: 'max-w-screen-lg',      // 960px
    xl: 'max-w-screen-xl',      // 1140px
    full: 'max-w-full'          // 100%
  };

  return (
    <div
      className={`
        container
        mx-auto
        px-4
        ${sizeMap[size]}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Container;
