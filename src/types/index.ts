export interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  venue: Venue
  lineup: Artist[]
  ticketUrl?: string
  price: string
  image: string
  featured: boolean
  tags: string[]
}

export interface Venue {
  id: string
  name: string
  address: string
  city: string
  state: string
  capacity?: number
  website?: string
}

export interface Artist {
  id: string
  name: string
  type: 'band' | 'dj' | 'tribute'
  description?: string
  image?: string
  socialLinks?: {
    instagram?: string
    twitter?: string
    spotify?: string
    bandcamp?: string
  }
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  eventType?: 'booking' | 'general' | 'press'
}
