import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    // Базовые стили
    const baseStyles = 'font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    // Стили размеров
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    // Стили вариантов
    const variantStyles = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
      outline: 'border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70',
    };

    const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    if (asChild) {
      return React.cloneElement(props.children as React.ReactElement, {
        className: classes,
        ...props,
        ref,
      });
    }

    return (
      <button ref={ref} className={classes} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { Button };
