import { AnchorHTMLAttributes, ReactNode } from 'react';
import { config } from '../utils/config';

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  children?: ReactNode;
}

export function CTAButton({
  variant = 'primary',
  size = 'md',
  text = config.ctaMainText,
  className = '',
  ...props
}: CTAButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 inline-block text-center';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark shadow-lg',
    secondary: 'bg-metallic text-primary hover:bg-opacity-90',
    outline: 'bg-transparent border border-accent text-accent hover:bg-accent hover:bg-opacity-10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={config.checkoutLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {text}
    </a>
  );
}
