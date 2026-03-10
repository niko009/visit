import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const variantStyles = {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-accent text-accent-foreground',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-amber-100 text-amber-800',
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
