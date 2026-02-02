import React from 'react';

/**
 * Card Component - Flexible content container with variants
 *
 * Usage:
 * <Card variant="elevated" padding="lg">
 *   <Card.Header>
 *     <h3>Card Title</h3>
 *   </Card.Header>
 *   <Card.Body>
 *     Card content goes here
 *   </Card.Body>
 *   <Card.Footer>
 *     Footer content
 *   </Card.Footer>
 * </Card>
 */

interface CardProps {
  children: React.ReactNode;
  /** Card visual variant */
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Hover effect */
  hoverable?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler (makes card interactive) */
  onClick?: () => void;
}

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className = '',
  onClick
}: CardProps) => {
  // Variant styles
  const variantMap = {
    default: 'bg-white',
    elevated: 'bg-white shadow-md',
    outlined: 'bg-white border border-gray-200',
    filled: 'bg-gray-50'
  };

  // Padding styles
  const paddingMap = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  // Hover effect
  const hoverClass = hoverable ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';

  // Interactive class
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`
        rounded-lg
        ${variantMap[variant]}
        ${paddingMap[padding]}
        ${hoverClass}
        ${interactiveClass}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

// Card sub-components
const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mb-4 ${className}`.trim()}>
    {children}
  </div>
);

const CardBody = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-4 ${className}`.trim()}>
    {children}
  </div>
);

// Attach sub-components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
