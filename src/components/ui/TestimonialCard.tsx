import { Star, Heart, Verified } from 'lucide-react'
import { Testimonial } from '@/data/testimonials'
import { BandSticker } from './RetroElements'

interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'default' | 'featured'
}

export default function TestimonialCard({ testimonial, variant = 'default' }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ))
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className={`
      bg-emo-dark rounded-lg p-6 border border-emo-purple/20 
      ${variant === 'featured' ? 'ring-2 ring-emo-pink/30' : ''}
      hover:border-emo-pink/50 transition-all duration-300
      relative overflow-hidden
    `}>
      {/* MySpace-style profile header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emo-purple to-emo-pink rounded-full flex items-center justify-center text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="text-white font-bold font-scene text-sm">
                {testimonial.name}
              </h4>
              {testimonial.verified && (
                <Verified className="h-4 w-4 text-blue-400 fill-current" />
              )}
            </div>
            <div className="text-emo-pink text-xs font-emo">
              @{testimonial.username}
            </div>
            <div className="text-gray-500 text-xs font-emo">
              {formatDate(testimonial.date)}
            </div>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
      </div>

      {/* Event name */}
      <div className="mb-3">
        <span className="text-xs text-gray-400 font-emo uppercase tracking-wider">
          Event:
        </span>
        <div className="text-emo-purple text-sm font-bold font-scene">
          {testimonial.event}
        </div>
      </div>

      {/* Review text */}
      <div className="mb-4">
        <p className="text-gray-300 text-sm font-emo leading-relaxed">
          {testimonial.review}
        </p>
      </div>

      {/* Favorite band sticker */}
      {testimonial.favoriteband && (
        <div className="flex justify-between items-center">
          <BandSticker band={testimonial.favoriteband} color="pink" />
          <div className="flex items-center space-x-1 text-emo-pink">
            <Heart className="h-3 w-3 fill-current" />
            <span className="text-xs font-emo">Emo Kid Since 2003</span>
          </div>
        </div>
      )}

      {/* Featured badge */}
      {variant === 'featured' && (
        <div className="absolute top-2 right-2">
          <div className="bg-gradient-to-r from-emo-purple to-emo-pink text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Featured
          </div>
        </div>
      )}
    </div>
  )
}
