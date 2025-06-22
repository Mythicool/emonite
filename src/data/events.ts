import { Event, Venue, Artist } from '@/types'

export const venues: Venue[] = [
  {
    id: '1',
    name: 'The Underground',
    address: '123 Basement Ave',
    city: 'Chicago',
    state: 'IL',
    capacity: 300,
    website: 'https://theunderground.com'
  },
  {
    id: '2',
    name: 'Neon Dreams',
    address: '456 Retro Blvd',
    city: 'Los Angeles',
    state: 'CA',
    capacity: 500,
    website: 'https://neondreams.com'
  },
  {
    id: '3',
    name: 'Black Heart Bar',
    address: '789 Gothic St',
    city: 'New York',
    state: 'NY',
    capacity: 200
  },
  {
    id: '4',
    name: 'Velvet Rebellion',
    address: '321 Scene Kid Lane',
    city: 'Austin',
    state: 'TX',
    capacity: 400,
    website: 'https://velvetrebellion.com'
  },
  {
    id: '5',
    name: 'The Emo Den',
    address: '666 Heartbreak Blvd',
    city: 'Portland',
    state: 'OR',
    capacity: 250
  },
  {
    id: '6',
    name: 'Tears & Beers',
    address: '2006 Nostalgia Way',
    city: 'Denver',
    state: 'CO',
    capacity: 350,
    website: 'https://tearsandbeers.com'
  },
  {
    id: '7',
    name: 'The Warped Zone',
    address: '1337 Emo Ave',
    city: 'Nashville',
    state: 'TN',
    capacity: 600
  },
  {
    id: '8',
    name: 'Skinny Jeans Social Club',
    address: '420 Scene St',
    city: 'Seattle',
    state: 'WA',
    capacity: 180
  }
]

export const artists: Artist[] = [
  {
    id: '1',
    name: 'DJ Rawr XD',
    type: 'dj',
    description: 'Spinning the best emo classics from 2003-2009',
    socialLinks: {
      instagram: '@djrawrxd',
      spotify: 'djrawrxd'
    }
  },
  {
    id: '2',
    name: 'My Chemical Bromance',
    type: 'tribute',
    description: 'The ultimate My Chemical Romance tribute band',
    socialLinks: {
      instagram: '@mcrbromance',
      bandcamp: 'mcrbromance'
    }
  },
  {
    id: '3',
    name: 'Fall Out Boi',
    type: 'tribute',
    description: 'Fall Out Boy covers with extra eyeliner',
    socialLinks: {
      instagram: '@falloutboi',
      twitter: '@falloutboi'
    }
  },
  {
    id: '4',
    name: 'Scene Queen',
    type: 'dj',
    description: 'Your favorite scene kid anthems all night long'
  },
  {
    id: '5',
    name: 'Panic! At The Disko',
    type: 'tribute',
    description: 'Bringing the circus back to town with P!ATD classics',
    socialLinks: {
      instagram: '@panicatthedisko',
      twitter: '@panicatthedisko'
    }
  },
  {
    id: '6',
    name: 'Dashboard Confessional Covers',
    type: 'tribute',
    description: 'Acoustic emo ballads that will make you cry',
    socialLinks: {
      instagram: '@dashboardcovers'
    }
  },
  {
    id: '7',
    name: 'DJ Emo Kid',
    type: 'dj',
    description: 'The OG emo DJ since 2005, spinning deep cuts and classics'
  },
  {
    id: '8',
    name: 'Taking Back Sundae',
    type: 'tribute',
    description: 'Taking Back Sunday tribute with ice cream puns'
  },
  {
    id: '9',
    name: 'The Used & Abused',
    type: 'tribute',
    description: 'The Used covers with extra screaming'
  },
  {
    id: '10',
    name: 'Brand New Day',
    type: 'tribute',
    description: 'Brand New tribute band (before the drama)'
  },
  {
    id: '11',
    name: 'DJ Scene Kid Supreme',
    type: 'dj',
    description: 'Warped Tour memories and Hot Topic anthems'
  },
  {
    id: '12',
    name: 'Parawhore',
    type: 'tribute',
    description: 'Paramore tribute with the orange hair and attitude'
  }
]

// Past Events (for history/testimonials)
export const pastEvents: Event[] = [
  // 2022 Events
  {
    id: 'past-1',
    title: 'EmoNite Launch Party: Welcome to the Black Parade',
    description: 'Our very first event! 300 emo kids united for the ultimate MCR tribute night.',
    date: new Date('2022-03-15'),
    time: '9:00 PM',
    venue: venues[0],
    lineup: [artists[1], artists[0]],
    price: '$10-15',
    image: '/images/launch-party.jpg',
    featured: false,
    tags: ['launch', 'mcr', 'historic', 'sold out']
  },
  {
    id: 'past-2',
    title: 'Fall Out Boy Mania Night',
    description: 'Sugar, we\'re going down swinging! A night dedicated to FOB\'s greatest hits.',
    date: new Date('2022-05-20'),
    time: '8:00 PM',
    venue: venues[1],
    lineup: [artists[2], artists[3]],
    price: '$12-18',
    image: '/images/fob-mania.jpg',
    featured: false,
    tags: ['fall out boy', 'pop punk', 'dance party']
  },
  {
    id: 'past-3',
    title: 'Warped Tour Throwback',
    description: 'Reliving the best summer tour ever with all your favorite bands from 2005-2008.',
    date: new Date('2022-07-16'),
    time: '7:30 PM',
    venue: venues[2],
    lineup: [artists[4], artists[11]],
    price: '$15-22',
    image: '/images/warped-throwback.jpg',
    featured: false,
    tags: ['warped tour', 'summer', 'paramore', 'nostalgia']
  },
  // 2023 Events
  {
    id: 'past-4',
    title: 'Dashboard Confessional Acoustic Night',
    description: 'Hands down, this was our most emotional night yet. Tissues provided.',
    date: new Date('2023-02-14'),
    time: '8:00 PM',
    venue: venues[3],
    lineup: [artists[5]],
    price: '$18-25',
    image: '/images/dashboard-acoustic.jpg',
    featured: false,
    tags: ['acoustic', 'dashboard confessional', 'valentines', 'emotional']
  },
  {
    id: 'past-5',
    title: 'Panic! At The Disco Circus',
    description: 'A fever you can\'t sweat out! Circus-themed night with P!ATD classics.',
    date: new Date('2023-04-01'),
    time: '9:30 PM',
    venue: venues[4],
    lineup: [artists[4], artists[6]],
    price: '$20-28',
    image: '/images/panic-circus.jpg',
    featured: false,
    tags: ['panic at the disco', 'circus', 'theatrical', 'costume party']
  },
  {
    id: 'past-6',
    title: 'Taking Back Sunday Singalong',
    description: 'Tell all your friends about this epic TBS tribute night!',
    date: new Date('2023-06-10'),
    time: '8:30 PM',
    venue: venues[5],
    lineup: [artists[7], artists[10]],
    price: '$16-22',
    image: '/images/tbs-singalong.jpg',
    featured: false,
    tags: ['taking back sunday', 'singalong', 'long island', 'emo']
  },
  // 2024 Events
  {
    id: 'past-7',
    title: 'The Used & Abused Halloween Special',
    description: 'Taste of ink and Halloween vibes! Costumes encouraged, screaming required.',
    date: new Date('2024-10-31'),
    time: '10:00 PM',
    venue: venues[6],
    lineup: [artists[8], artists[10]],
    price: '$25-35',
    image: '/images/used-halloween.jpg',
    featured: false,
    tags: ['the used', 'halloween', 'costume party', 'screamo']
  },
  {
    id: 'past-8',
    title: 'Brand New Memories (Final Show)',
    description: 'Our last Brand New tribute before... well, you know. The devil and god were raging inside us.',
    date: new Date('2024-08-15'),
    time: '9:00 PM',
    venue: venues[7],
    lineup: [artists[9]],
    price: '$22-30',
    image: '/images/brand-new-final.jpg',
    featured: false,
    tags: ['brand new', 'final show', 'emotional', 'controversial']
  }
]

// Current/Upcoming Events
export const events: Event[] = [
  {
    id: '1',
    title: 'Millennial Emo Night: The Black Parade Returns',
    description: 'Join us for the ultimate throwback to 2006! Dance to My Chemical Romance, Fall Out Boy, Panic! At The Disco, and all your favorite emo classics. Wear your skinny jeans and bring your feelings. This is our biggest event yet!',
    date: new Date('2025-07-15'),
    time: '9:00 PM',
    venue: venues[0],
    lineup: [artists[0], artists[1]],
    ticketUrl: 'https://tickets.com/emo-night-1',
    price: '$15-20',
    image: '/images/black-parade-night.jpg',
    featured: true,
    tags: ['emo', 'throwback', '2000s', 'my chemical romance', 'anniversary']
  },
  {
    id: '2',
    title: 'Scene Kids Unite: Warped Tour Memories',
    description: 'Relive the glory days of Warped Tour with bands like Paramore, All Time Low, and Pierce The Veil. Teased hair and band tees encouraged! Special guest appearance by someone who actually went to Warped Tour 2005.',
    date: new Date('2025-07-22'),
    time: '8:30 PM',
    venue: venues[1],
    lineup: [artists[2], artists[3], artists[11]],
    ticketUrl: 'https://tickets.com/scene-night',
    price: '$18-25',
    image: '/images/warped-tour-night.jpg',
    featured: true,
    tags: ['scene', 'warped tour', 'paramore', 'pop punk', 'summer']
  },
  {
    id: '3',
    title: 'Dashboard Confessional Singalong',
    description: 'An intimate acoustic night featuring Dashboard Confessional covers and emo ballads. Bring tissues for the feels. We\'ll have a crying corner set up for maximum emotional release.',
    date: new Date('2025-08-05'),
    time: '7:00 PM',
    venue: venues[2],
    lineup: [artists[5]],
    price: '$12-15',
    image: '/images/dashboard-night.jpg',
    featured: false,
    tags: ['acoustic', 'dashboard confessional', 'emo ballads', 'intimate', 'emotional']
  },
  {
    id: '4',
    title: 'Fall Out Boy Dance Party: Sugar We\'re Going Down',
    description: 'Dance, dance to the best FOB hits! From Take This to Your Grave to Infinity on High, we\'re playing it all. Pete Wentz eyeliner tutorials at 9 PM.',
    date: new Date('2025-08-12'),
    time: '8:00 PM',
    venue: venues[3],
    lineup: [artists[2], artists[6]],
    ticketUrl: 'https://tickets.com/fob-dance',
    price: '$16-22',
    image: '/images/fob-dance.jpg',
    featured: false,
    tags: ['fall out boy', 'dance party', 'pop punk', 'pete wentz', 'eyeliner']
  },
  {
    id: '5',
    title: 'Panic! At The Disco Fever Dream',
    description: 'A fever you can\'t sweat out! Circus acts, theatrical performances, and all the P!ATD hits that made you question your sexuality in high school.',
    date: new Date('2025-08-19'),
    time: '9:30 PM',
    venue: venues[4],
    lineup: [artists[4], artists[10]],
    ticketUrl: 'https://tickets.com/panic-fever',
    price: '$20-28',
    image: '/images/panic-fever.jpg',
    featured: false,
    tags: ['panic at the disco', 'theatrical', 'circus', 'fever dream', 'brendon urie']
  },
  {
    id: '6',
    title: 'The Ultimate Emo Karaoke Night',
    description: 'Sing your heart out to all your favorite emo classics! Bonus points for dramatic hand gestures and emotional breakdowns. Eyeliner touch-up station available.',
    date: new Date('2025-08-26'),
    time: '8:00 PM',
    venue: venues[5],
    lineup: [artists[6], artists[10]],
    price: '$14-18',
    image: '/images/emo-karaoke.jpg',
    featured: false,
    tags: ['karaoke', 'singalong', 'interactive', 'emotional', 'community']
  }
]

// All events combined for search/filtering
export const allEvents = [...pastEvents, ...events]
