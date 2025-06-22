import { Event } from '@/types'

interface StructuredDataProps {
  type: 'organization' | 'event'
  data?: Event
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any

  if (type === 'organization') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'EmoNite',
      description: 'Millennial emo nostalgia night events featuring My Chemical Romance, Fall Out Boy, Panic! At The Disco, and 2000s emo classics.',
      url: 'https://emonite.com',
      logo: 'https://emonite.com/logo.png',
      sameAs: [
        'https://instagram.com/emonite',
        'https://twitter.com/emonite',
        'https://facebook.com/emonite'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-EMO-NITE',
        contactType: 'customer service',
        email: 'hello@emonite.com'
      }
    }
  } else if (type === 'event' && data) {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'MusicEvent',
      name: data.title,
      description: data.description,
      startDate: data.date.toISOString(),
      location: {
        '@type': 'Place',
        name: data.venue.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.venue.address,
          addressLocality: data.venue.city,
          addressRegion: data.venue.state,
          addressCountry: 'US'
        }
      },
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: data.ticketUrl || `https://emonite.com/events/${data.id}`
      },
      performer: data.lineup.map(artist => ({
        '@type': 'MusicGroup',
        name: artist.name
      })),
      organizer: {
        '@type': 'Organization',
        name: 'EmoNite',
        url: 'https://emonite.com'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
