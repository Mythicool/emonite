import { Calendar, Users, Camera, Heart } from 'lucide-react'
import { HallOfFameEntry } from '@/data/hallOfFame'
import { PolaroidPhoto, BandSticker } from './RetroElements'

interface HallOfFameCardProps {
  entry: HallOfFameEntry
}

export default function HallOfFameCard({ entry }: HallOfFameCardProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-emo-dark rounded-lg p-6 border border-emo-purple/20 hover:border-emo-pink/50 transition-all duration-300 relative overflow-hidden">
      {/* Polaroid Photo */}
      <div className="mb-6 flex justify-center">
        <div className="polaroid bg-white p-3 pb-8 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="w-48 h-32 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 text-xs text-center p-2">
            📸 {entry.imageDescription}
          </div>
          <div className="text-center mt-2 text-black font-emo text-xs">
            {entry.title}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Title and Date */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2 font-scene">
            {entry.title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm font-emo">
            <Calendar className="h-4 w-4 mr-2" />
            {formatDate(entry.date)}
          </div>
        </div>

        {/* Event */}
        <div className="text-emo-purple text-sm font-bold font-scene">
          {entry.event}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm font-emo leading-relaxed">
          {entry.description}
        </p>

        {/* Stats */}
        {entry.stats && (
          <div className="grid grid-cols-3 gap-4 p-4 bg-emo-black/50 rounded-lg">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Users className="h-4 w-4 text-emo-pink" />
              </div>
              <div className="text-emo-pink font-bold text-sm">
                {entry.stats.attendance}
              </div>
              <div className="text-gray-500 text-xs font-emo">
                Attendees
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Camera className="h-4 w-4 text-emo-purple" />
              </div>
              <div className="text-emo-purple font-bold text-sm">
                {entry.stats.photosShared}
              </div>
              <div className="text-gray-500 text-xs font-emo">
                Photos
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Heart className="h-4 w-4 text-neon-green" />
              </div>
              <div className="text-neon-green font-bold text-sm">
                {entry.stats.tearsShared}
              </div>
              <div className="text-gray-500 text-xs font-emo">
                Tears
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {entry.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-emo-purple/20 text-emo-pink px-2 py-1 rounded-full text-xs font-emo uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-2 opacity-20">
        <div className="text-4xl">🖤</div>
      </div>
    </div>
  )
}
