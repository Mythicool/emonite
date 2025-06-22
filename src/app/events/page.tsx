'use client'

import { useState } from 'react'
import { Search, Filter, Calendar, MapPin } from 'lucide-react'
import EventCard from '@/components/ui/EventCard'
import Button from '@/components/ui/Button'
import { UnderConstruction } from '@/components/ui/RetroElements'
import { events } from '@/data/events'
import { Event } from '@/types'

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  // Get unique cities for filter
  const cities = ['all', ...Array.from(new Set(events.map(event => event.venue.city)))]

  // Filter and sort events
  const filteredEvents = events
    .filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.venue.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCity = selectedCity === 'all' || event.venue.city === selectedCity
      return matchesSearch && matchesCity
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'price':
          return a.price.localeCompare(b.price)
        case 'venue':
          return a.venue.name.localeCompare(b.venue.name)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-emo-black w-full">
      {/* Hero Section */}
      <section className="bg-gradient-emo section-spacing w-full">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-scene mb-8">
              🎵 Emo <span className="text-emo-pink">Events</span> 💔
            </h1>
            <p className="text-xl leading-8 text-gray-300 font-emo">
              Find your next emotional catharsis 🌙✨ All the emo nights, scene kid gatherings,
              and millennial nostalgia events you could ever want 🖤💀
              Prepare for maximum feels and minimum sleep! ⚡️🔥
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 border-b border-emo-purple/20 bg-emo-dark/30 w-full">
        <div className="centered-container container-spacing">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between w-full max-w-6xl">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="🔍 Search events, venues, or bands... 🎵"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg bg-emo-dark border border-emo-purple/20 pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="rounded-lg bg-emo-dark border border-emo-purple/20 px-4 py-2 text-white focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo"
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city === 'all' ? 'All Cities' : city}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg bg-emo-dark border border-emo-purple/20 px-4 py-2 text-white focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo"
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="venue">Sort by Venue</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 p-4 bg-emo-black/30 rounded-lg border border-emo-purple/20">
            <p className="text-sm text-gray-400 font-emo text-center">
              🎵 Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}" 🔍`}
              {selectedCity !== 'all' && ` in ${selectedCity} 📍`}
              💔 Ready for the feels? 🖤
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-spacing w-full">
        <div className="centered-container container-spacing">
          {filteredEvents.length > 0 ? (
            <div className="card-grid w-full max-w-6xl">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} featured={event.featured} />
              ))}
            </div>
          ) : (
            <div className="section-center py-16 max-w-2xl">
              <div className="text-8xl mb-6">💔</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-scene">🖤 No Events Found 🖤</h3>
              <p className="text-gray-400 font-emo mb-8 text-lg leading-relaxed">
                No emo nights match your search 😢💀 Try adjusting your filters or check back later for new events!
                The black parade will return soon... ⚡️🌙
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCity('all')
                  setSortBy('date')
                }}
              >
                🔄 Clear Filters 🔄
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Under Construction Banner */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <UnderConstruction />
          <div className="text-center mt-4">
            <p className="text-gray-400 font-emo text-sm">
              New features coming soon! Advanced filtering, event reminders, and more emo goodness! 🖤
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emo-dark/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-scene">
            Don't See Your City?
          </h2>
          <p className="text-gray-400 font-emo mb-8 max-w-2xl mx-auto">
            We're always looking to bring emo nights to new cities.
            Contact us if you're interested in hosting or attending events in your area.
          </p>
          <Button variant="primary" size="lg">
            Request Your City
          </Button>
        </div>
      </section>
    </div>
  )
}
