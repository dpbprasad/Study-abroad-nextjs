import React from 'react';
import NextLink from 'next/link';

/**
 * Link Component - Enhanced Next.js Link with consistent styling
 *
 * Usage:
 * <Link href="/about" variant="primary">About Us</Link>
 * <Link href="https://example.com" external>External Link</Link>
 */

interface LinkProps {
  children: React.ReactNode;
  /** Link destination */
  href: string;
  /** Link style variant */
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'unstyled';
  /** External link (opens in new tab) */
  external?: boolean;
  /** Underline style */
  underline?: 'none' | 'hover' | 'always';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Additional CSS classes */
  className?: string;
  /** Show external icon */
  showExternalIcon?: boolean;
}

const Link = ({
  children,
  href,
  variant = 'default',
  external = false,
  underline = 'hover',
  weight = 'normal',
  className = '',
  showExternalIcon = false
}: LinkProps) => {
  // Variant styles
  const variantMap = {
    default: 'text-gray-900 hover:text-[#00AF5B]',
    primary: 'text-[#00AF5B] hover:text-[#009850]',
    secondary: 'text-gray-700 hover:text-gray-900',
    muted: 'text-gray-500 hover:text-gray-700',
    unstyled: ''
  };

  // Underline styles
  const underlineMap = {
    none: 'no-underline',
    hover: 'no-underline hover:underline',
    always: 'underline'
  };

  // Weight styles
  const weightMap = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const combinedClasses = `
    transition-colors
    duration-200
    ${variantMap[variant]}
    ${underlineMap[underline]}
    ${weightMap[weight]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Content with optional external icon
  const content = (
    <>
      {children}
      {showExternalIcon && external && (
        <span className="inline-block ml-1">
          <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      )}
    </>
  );

  // External link
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  // Internal Next.js link
  return (
    <NextLink href={href} className={combinedClasses}>
      {content}
    </NextLink>
  );
};

export default Link;
