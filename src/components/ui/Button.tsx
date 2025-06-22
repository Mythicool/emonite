import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emo-black disabled:opacity-50 disabled:cursor-not-allowed',
          // Variants
          {
            'bg-gradient-to-r from-emo-purple to-emo-pink text-white hover:shadow-neon transform hover:scale-105 focus:ring-emo-purple':
              variant === 'primary',
            'bg-emo-gray text-white hover:bg-emo-purple/80 focus:ring-emo-purple':
              variant === 'secondary',
            'border-2 border-emo-purple text-emo-purple hover:bg-emo-purple hover:text-white focus:ring-emo-purple':
              variant === 'outline',
            'text-gray-300 hover:text-emo-pink hover:bg-emo-gray/50 focus:ring-emo-pink':
              variant === 'ghost',
            'bg-neon-green text-emo-black hover:shadow-neon animate-pulse focus:ring-neon-green':
              variant === 'neon',
          },
          // Sizes
          {
            'px-3 py-1.5 text-xs': size === 'sm',
            'px-6 py-2 text-sm': size === 'md',
            'px-8 py-3 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
