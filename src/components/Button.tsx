import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20',

    secondary:
      'bg-slate-900 text-white hover:bg-slate-800',

    outline:
      'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',

    ghost:
      'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button