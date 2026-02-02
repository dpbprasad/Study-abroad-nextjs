import React from 'react';
import Link from 'next/link';

/**
 * Button Component - Flexible button with multiple variants and sizes
 *
 * Usage:
 * <Button variant="primary" size="lg">Click me</Button>
 * <Button href="/contact" variant="secondary">Go to Contact</Button>
 */

interface ButtonProps {
  children: React.ReactNode;
  /** Button variant/style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
  /** Link href (converts to Link component) */
  href?: string;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Icon before text */
  iconBefore?: React.ReactNode;
  /** Icon after text */
  iconAfter?: React.ReactNode;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  iconBefore,
  iconAfter
}: ButtonProps) => {
  // Base styles
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    font-semibold
    rounded-lg
    transition-all
    duration-300
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  // Variant styles
  const variantMap = {
    primary: 'bg-[#00AF5B] text-white hover:bg-[#009850] focus:ring-4 focus:ring-green-200',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300',
    outline: 'bg-transparent border-2 border-[#00AF5B] text-[#00AF5B] hover:bg-[#00AF5B] hover:text-white focus:ring-4 focus:ring-green-200',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:ring-red-200'
  };

  // Size styles
  const sizeMap = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Width style
  const widthClass = fullWidth ? 'w-full' : '';

  // Combine all classes
  const combinedClasses = `
    ${baseStyles}
    ${variantMap[variant]}
    ${sizeMap[size]}
    ${widthClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Content with icons
  const content = (
    <>
      {iconBefore && <span className="inline-flex">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="inline-flex">{iconAfter}</span>}
    </>
  );

  // If href provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

export default Button;
