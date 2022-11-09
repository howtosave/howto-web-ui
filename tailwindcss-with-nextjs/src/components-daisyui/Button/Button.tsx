import { Fragment } from 'react'
import Link from 'next/link';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: ThemeColor;
  isActive?: boolean;
  hasOutline?: boolean;
  bpSize?: BreakpointSize;
  isWide?: boolean;
  isGlass?: boolean;
  isSquare?: boolean;
  isLoading?: boolean;
  noAnimation?: boolean;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Button: React.FC<ButtonProps> = ({ 
  variant, isActive, hasOutline, bpSize, isWide, isGlass, isSquare, isLoading, noAnimation,
  className, children 
}) => {
  return (
    <button className={
      classNames(
        'btn', 
        variant && `btn-${variant}`, 
        isActive && `btn-active`, 
        hasOutline && `btn-outline`, 
        bpSize && `btn-${bpSize}`,
        isWide && `btn-wide`,
        isGlass && 'glass',
        isSquare && 'btn-square',
        isLoading && 'loading',
        noAnimation && 'no-animation',
        className
      )
    }>
      {children}
    </button>
  );
};

export default Button;
