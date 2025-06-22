export interface Partner {
  id: string
  name: string
  type: 'venue' | 'sponsor' | 'media' | 'brand'
  logo?: string
  description: string
  website?: string
  partnership_since: Date
  featured: boolean
}

export interface PressFeature {
  id: string
  publication: string
  title: string
  date: Date
  url?: string
  quote: string
  author?: string
  featured: boolean
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'The Underground Chicago',
    type: 'venue',
    description: 'Our flagship venue and the birthplace of EmoNite. Home to our most legendary events.',
    website: 'https://theunderground.com',
    partnership_since: new Date('2022-03-01'),
    featured: true
  },
  {
    id: '2',
    name: 'Hot Topic',
    type: 'sponsor',
    description: 'Official merchandise partner providing exclusive emo fashion and accessories.',
    website: 'https://hottopic.com',
    partnership_since: new Date('2022-08-15'),
    featured: true
  },
  {
    id: '3',
    name: 'Warped Tour',
    type: 'brand',
    description: 'Legendary tour brand supporting the emo revival movement.',
    partnership_since: new Date('2023-01-20'),
    featured: true
  },
  {
    id: '4',
    name: 'Alternative Press',
    type: 'media',
    description: 'Leading alternative music publication covering our events and the emo scene.',
    website: 'https://altpress.com',
    partnership_since: new Date('2022-11-10'),
    featured: true
  },
  {
    id: '5',
    name: 'Neon Dreams LA',
    type: 'venue',
    description: 'West Coast venue partner bringing emo nights to Los Angeles.',
    partnership_since: new Date('2022-06-01'),
    featured: false
  },
  {
    id: '6',
    name: 'Journeys',
    type: 'sponsor',
    description: 'Footwear sponsor keeping our emo kids in the freshest Converse and Vans.',
    partnership_since: new Date('2023-03-15'),
    featured: false
  },
  {
    id: '7',
    name: 'Kerrang!',
    type: 'media',
    description: 'UK rock magazine featuring our international expansion.',
    partnership_since: new Date('2023-09-01'),
    featured: false
  },
  {
    id: '8',
    name: 'Spencer\'s',
    type: 'sponsor',
    description: 'Alternative lifestyle brand supporting emo culture and self-expression.',
    partnership_since: new Date('2023-05-20'),
    featured: false
  }
]

export const pressFeatures: PressFeature[] = [
  {
    id: '1',
    publication: 'Rolling Stone',
    title: 'How Emo Nights Are Saving Millennial Mental Health',
    date: new Date('2024-11-08'),
    quote: 'EmoNite isn\'t just playing old songs – they\'re creating a time machine that lets people reconnect with the parts of themselves they thought they\'d lost.',
    author: 'Jake Morrison',
    featured: true
  },
  {
    id: '2',
    publication: 'Billboard',
    title: 'The Emo Revival: How Millennials Are Bringing Back 2000s Culture',
    date: new Date('2024-09-22'),
    quote: 'EmoNite has become the gold standard for nostalgia events, proving that emo culture is more than just a trend – it\'s a lifestyle.',
    author: 'Sarah Chen',
    featured: true
  },
  {
    id: '3',
    publication: 'Alternative Press',
    title: 'EmoNite: The Community That\'s Keeping Emo Alive',
    date: new Date('2024-07-15'),
    quote: 'What started as a simple tribute night has evolved into a movement that\'s redefining what it means to be emo in 2024.',
    author: 'Mike Rodriguez',
    featured: true
  },
  {
    id: '4',
    publication: 'Pitchfork',
    title: 'The Unexpected Return of Emo Culture',
    date: new Date('2024-05-30'),
    quote: 'EmoNite events feel like group therapy sessions disguised as dance parties, and that\'s exactly what millennials need right now.',
    author: 'Emma Thompson',
    featured: false
  },
  {
    id: '5',
    publication: 'Vice',
    title: 'Why Emo Kids Are Taking Over Nightlife',
    date: new Date('2024-03-18'),
    quote: 'These aren\'t just nostalgia cash grabs – they\'re genuine communities built around shared emotional experiences.',
    author: 'Alex Kim',
    featured: false
  },
  {
    id: '6',
    publication: 'The Guardian',
    title: 'Emo Nights: The Millennial Therapy Session',
    date: new Date('2024-01-25'),
    quote: 'EmoNite has tapped into something deeper than nostalgia – they\'ve created a space for authentic emotional expression.',
    author: 'James Wilson',
    featured: false
  },
  {
    id: '7',
    publication: 'NME',
    title: 'How EmoNite Conquered America',
    date: new Date('2023-12-10'),
    quote: 'From Chicago basements to sold-out venues across the country, EmoNite has proven that emo culture is alive and thriving.',
    author: 'Lucy Martinez',
    featured: false
  },
  {
    id: '8',
    publication: 'Consequence of Sound',
    title: 'The Emo Revival Is Real, and It\'s Spectacular',
    date: new Date('2023-10-05'),
    quote: 'EmoNite events are masterclasses in community building, proving that music can still bring people together in meaningful ways.',
    author: 'David Park',
    featured: false
  }
]

export const socialStats = {
  instagram: {
    followers: 47300,
    posts: 892,
    engagement: '8.4%'
  },
  tiktok: {
    followers: 156700,
    videos: 234,
    views: '2.3M'
  },
  twitter: {
    followers: 23400,
    tweets: 1567,
    mentions: 'Daily'
  },
  facebook: {
    followers: 31200,
    events: 156,
    checkins: '12K+'
  }
}

export const getFeaturedPartners = () => {
  return partners.filter(partner => partner.featured)
}

export const getFeaturedPress = () => {
  return pressFeatures.filter(feature => feature.featured)
}

export const getPartnersByType = (type: string) => {
  return partners.filter(partner => partner.type === type)
}
