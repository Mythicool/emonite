import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react'
import { Event } from '@/types'
import { formatDate, formatTime } from '@/lib/utils'
import Button from './Button'

interface EventCardProps {
  event: Event
  featured?: boolean
}

export default function EventCard({ event, featured = false }: EventCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-emo-dark border border-emo-purple/20 hover:border-emo-pink/50 transition-all duration-300 ${featured ? 'ring-2 ring-emo-purple/50' : ''}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-emo-purple to-emo-pink text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Featured
        </div>
      )}

      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emo-black/80 to-transparent z-10" />
        <div className="w-full h-full bg-gradient-to-br from-emo-purple/20 to-emo-pink/20 flex items-center justify-center">
          <div className="text-6xl opacity-20">🖤</div>
        </div>
        
        {/* Event Tags */}
        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
          {event.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-emo-black/80 text-emo-pink px-2 py-1 rounded text-xs font-emo uppercase"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        {/* Event Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emo-pink transition-colors duration-200 font-scene">
          {event.title}
        </h3>

        {/* Event Description */}
        <p className="text-gray-400 text-sm mb-4 font-emo line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300 text-sm font-emo">
            <Calendar className="h-4 w-4 mr-2 text-emo-purple" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-gray-300 text-sm font-emo">
            <Clock className="h-4 w-4 mr-2 text-emo-purple" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-300 text-sm font-emo">
            <MapPin className="h-4 w-4 mr-2 text-emo-purple" />
            {event.venue.name}, {event.venue.city}
          </div>
        </div>

        {/* Lineup Preview */}
        {event.lineup.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-scene mb-1">
              Lineup
            </p>
            <div className="flex flex-wrap gap-1">
              {event.lineup.slice(0, 2).map((artist) => (
                <span
                  key={artist.id}
                  className="text-emo-pink text-sm font-emo"
                >
                  {artist.name}
                  {event.lineup.indexOf(artist) < Math.min(event.lineup.length - 1, 1) && ', '}
                </span>
              ))}
              {event.lineup.length > 2 && (
                <span className="text-gray-500 text-sm font-emo">
                  +{event.lineup.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="text-neon-green font-bold text-lg font-emo">
            {event.price}
          </div>
          <div className="flex space-x-2">
            <Link href={`/events/${event.id}`}>
              <Button variant="outline" size="sm">
                Details
              </Button>
            </Link>
            {event.ticketUrl && (
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="primary" size="sm">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Tickets
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
