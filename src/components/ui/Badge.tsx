import React from 'react';

/**
 * Badge Component - Small label for status, categories, or tags
 *
 * Usage:
 * <Badge variant="success">New</Badge>
 * <Badge variant="warning" size="lg">Popular</Badge>
 */

interface BadgeProps {
  children: React.ReactNode;
  /** Badge color variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Rounded style */
  rounded?: 'default' | 'full';
  /** Additional CSS classes */
  className?: string;
}

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  rounded = 'default',
  className = ''
}: BadgeProps) => {
  // Variant styles
  const variantMap = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-[#00AF5B] text-white',
    secondary: 'bg-gray-800 text-white',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };

  // Size styles
  const sizeMap = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  // Rounded styles
  const roundedMap = {
    default: 'rounded',
    full: 'rounded-full'
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        font-semibold
        ${variantMap[variant]}
        ${sizeMap[size]}
        ${roundedMap[rounded]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </span>
  );
};

export default Badge;
