import Link from 'next/link'
import { Calendar, User, Tag } from 'lucide-react'
import { BlogPost } from '@/data/blog'
import { BandSticker } from './RetroElements'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured'
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'band-news': 'bg-emo-pink/20 text-emo-pink',
      'scene-update': 'bg-emo-purple/20 text-emo-purple',
      'press': 'bg-neon-green/20 text-neon-green',
      'community': 'bg-blue-500/20 text-blue-400',
      'news': 'bg-yellow-500/20 text-yellow-400'
    }
    return colors[category as keyof typeof colors] || colors.news
  }

  return (
    <article className={`
      bg-emo-dark rounded-lg p-6 border border-emo-purple/20 
      hover:border-emo-pink/50 transition-all duration-300
      ${variant === 'featured' ? 'ring-2 ring-emo-pink/30' : ''}
      relative overflow-hidden group
    `}>
      {/* Featured badge */}
      {variant === 'featured' && (
        <div className="absolute top-4 right-4">
          <BandSticker band="FEATURED" color="pink" />
        </div>
      )}

      {/* Category */}
      <div className="mb-4">
        <span className={`
          inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
          ${getCategoryColor(post.category)}
        `}>
          {post.category.replace('-', ' ')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 font-scene group-hover:text-emo-pink transition-colors">
        <Link href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="text-gray-300 text-sm font-emo leading-relaxed mb-4">
        {post.excerpt}
      </p>

      {/* Meta info */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span className="font-emo">{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span className="font-emo">{formatDate(post.date)}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="bg-emo-black/50 text-gray-400 px-2 py-1 rounded text-xs font-emo"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Read more link */}
      <div className="pt-4 border-t border-emo-purple/20">
        <Link 
          href={`/blog/${post.slug}`}
          className="text-emo-pink hover:text-emo-purple transition-colors text-sm font-bold font-scene uppercase tracking-wider"
        >
          Read More →
        </Link>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emo-purple/5 to-emo-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </article>
  )
}
