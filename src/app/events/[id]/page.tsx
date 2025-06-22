import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, MapPin, ExternalLink, Users, Music, Heart } from 'lucide-react'
import Button from '@/components/ui/Button'
import { events } from '@/data/events'
import { formatDate } from '@/lib/utils'

interface EventPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params
  const event = events.find(e => e.id === id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-emo-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-emo py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emo-purple/20 to-emo-pink/20"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/events" 
                className="text-emo-pink hover:text-emo-purple transition-colors font-emo text-sm"
              >
                ← Back to Events
              </Link>
            </nav>

            {/* Event Header */}
            <div className="text-center">
              {event.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emo-purple to-emo-pink text-white mb-4">
                  Featured Event
                </div>
              )}
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-scene mb-6">
                {event.title}
              </h1>

              {/* Event Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-emo-purple" />
                  <span className="font-emo">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-emo-purple" />
                  <span className="font-emo">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-emo-purple" />
                  <span className="font-emo">{event.venue.name}, {event.venue.city}</span>
                </div>
              </div>

              {/* Price and Tickets */}
              <div className="flex items-center justify-center gap-4">
                <div className="text-2xl font-bold text-neon-green font-emo">
                  {event.price}
                </div>
                {event.ticketUrl && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="neon" size="lg">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Get Tickets
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 font-scene">About This Event</h2>
                <p className="text-gray-300 leading-relaxed font-emo text-lg">
                  {event.description}
                </p>
              </div>

              {/* Lineup */}
              {event.lineup.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 font-scene flex items-center">
                    <Music className="h-6 w-6 mr-2 text-emo-pink" />
                    Lineup
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {event.lineup.map((artist) => (
                      <div key={artist.id} className="bg-emo-dark rounded-lg p-6 border border-emo-purple/20">
                        <h3 className="text-xl font-bold text-white mb-2 font-scene">
                          {artist.name}
                        </h3>
                        <div className="text-sm text-emo-pink mb-3 font-emo uppercase tracking-wider">
                          {artist.type === 'dj' ? 'DJ' : artist.type === 'tribute' ? 'Tribute Band' : 'Band'}
                        </div>
                        {artist.description && (
                          <p className="text-gray-400 text-sm font-emo mb-4">
                            {artist.description}
                          </p>
                        )}
                        {artist.socialLinks && (
                          <div className="flex gap-2">
                            {Object.entries(artist.socialLinks).map(([platform, handle]) => (
                              <span key={platform} className="text-xs text-gray-500 font-emo">
                                {platform}: {handle}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {event.tags.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 font-scene">Vibes</h2>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-emo-purple/20 text-emo-pink px-3 py-1 rounded-full text-sm font-emo uppercase tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Venue Info */}
              <div className="bg-emo-dark rounded-lg p-6 border border-emo-purple/20 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 font-scene flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-emo-pink" />
                  Venue Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-white font-bold font-emo">{event.venue.name}</div>
                    <div className="text-gray-400 text-sm font-emo">
                      {event.venue.address}<br />
                      {event.venue.city}, {event.venue.state}
                    </div>
                  </div>
                  {event.venue.capacity && (
                    <div className="flex items-center text-gray-400 text-sm font-emo">
                      <Users className="h-4 w-4 mr-2" />
                      Capacity: {event.venue.capacity}
                    </div>
                  )}
                  {event.venue.website && (
                    <a
                      href={event.venue.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emo-pink hover:text-emo-purple transition-colors text-sm font-emo"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Venue Website
                    </a>
                  )}
                </div>
              </div>

              {/* Share */}
              <div className="bg-emo-dark rounded-lg p-6 border border-emo-purple/20">
                <h3 className="text-xl font-bold text-white mb-4 font-scene flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-emo-pink" />
                  Share the Feels
                </h3>
                <p className="text-gray-400 text-sm font-emo mb-4">
                  Spread the emo love and bring your friends to feel all the feels together.
                </p>
                <Button variant="outline" className="w-full">
                  Share Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-emo-dark/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-scene">
            More Emo Nights
          </h2>
          <div className="text-center">
            <Link href="/events">
              <Button variant="primary" size="lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
