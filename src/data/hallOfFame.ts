export interface HallOfFameEntry {
  id: string
  title: string
  description: string
  date: Date
  event: string
  imageDescription: string
  tags: string[]
  stats?: {
    attendance?: number
    photosShared?: number
    tearsShared?: number
  }
}

export const hallOfFameEntries: HallOfFameEntry[] = [
  {
    id: '1',
    title: 'The Great MCR Singalong of 2022',
    description: 'Our launch party where 300 emo kids united to sing "Welcome to the Black Parade" so loud that the neighbors called the police... to ask if they could join.',
    date: new Date('2022-03-15'),
    event: 'EmoNite Launch Party',
    imageDescription: 'Crowd of people in black clothing with hands raised, singing passionately under purple stage lights',
    tags: ['mcr', 'singalong', 'historic', 'launch'],
    stats: {
      attendance: 300,
      photosShared: 847,
      tearsShared: 1337
    }
  },
  {
    id: '2',
    title: 'The Dashboard Confessional Cry-Along',
    description: 'Valentine\'s Day 2023: An acoustic night so emotional that we had to set up a designated crying corner. Tissues were provided, dignity was optional.',
    date: new Date('2023-02-14'),
    event: 'Dashboard Confessional Acoustic Night',
    imageDescription: 'Intimate venue with acoustic guitar on stage, audience sitting on floor with candles, many people visibly emotional',
    tags: ['dashboard', 'acoustic', 'emotional', 'valentines'],
    stats: {
      attendance: 180,
      photosShared: 234,
      tearsShared: 2006
    }
  },
  {
    id: '3',
    title: 'Fall Out Boy Dance Explosion',
    description: 'The night everyone remembered they still knew every word to "Sugar, We\'re Goin Down" and proved that emo kids can actually dance (sort of).',
    date: new Date('2022-05-20'),
    event: 'Fall Out Boy Mania Night',
    imageDescription: 'Dance floor packed with people jumping and dancing, someone crowd surfing, FOB tribute band on stage',
    tags: ['fob', 'dance', 'energy', 'crowd surfing'],
    stats: {
      attendance: 450,
      photosShared: 623,
      tearsShared: 420
    }
  },
  {
    id: '4',
    title: 'Panic! Circus Spectacular',
    description: 'A fever dream come to life with actual circus performers, theatrical makeup stations, and enough drama to make Brendon Urie proud.',
    date: new Date('2023-04-01'),
    event: 'Panic! At The Disco Circus',
    imageDescription: 'Theatrical stage setup with circus elements, performers in elaborate costumes, audience in dramatic makeup',
    tags: ['panic', 'circus', 'theatrical', 'costume'],
    stats: {
      attendance: 380,
      photosShared: 1205,
      tearsShared: 666
    }
  },
  {
    id: '5',
    title: 'The Great Eyeliner Tutorial of 2023',
    description: 'When we set up Pete Wentz eyeliner tutorials and accidentally created the most emo photo booth in history. The line was longer than Warped Tour merch.',
    date: new Date('2023-06-10'),
    event: 'Taking Back Sunday Singalong',
    imageDescription: 'Photo booth area with mirrors and makeup supplies, people applying dramatic eyeliner, polaroid photos scattered around',
    tags: ['eyeliner', 'photo booth', 'pete wentz', 'makeup'],
    stats: {
      attendance: 275,
      photosShared: 892,
      tearsShared: 333
    }
  },
  {
    id: '6',
    title: 'Halloween Costume Chaos',
    description: 'The Used tribute night where everyone came dressed as their favorite emo icon. We counted 7 Gerard Ways, 4 Pete Wentzes, and 1 very committed Frank Iero.',
    date: new Date('2024-10-31'),
    event: 'The Used & Abused Halloween Special',
    imageDescription: 'Crowd in elaborate emo/scene costumes, multiple Gerard Way lookalikes, someone in full Black Parade uniform',
    tags: ['halloween', 'costumes', 'the used', 'tribute'],
    stats: {
      attendance: 420,
      photosShared: 1666,
      tearsShared: 777
    }
  },
  {
    id: '7',
    title: 'Warped Tour Memory Lane',
    description: 'The night we recreated Warped Tour 2007 and everyone realized they still had their old band tees (and they still fit... mostly).',
    date: new Date('2022-07-16'),
    event: 'Warped Tour Throwback',
    imageDescription: 'Outdoor-style setup with multiple "stages", people in vintage band tees, Warped Tour banners and decorations',
    tags: ['warped tour', 'throwback', 'band tees', 'nostalgia'],
    stats: {
      attendance: 550,
      photosShared: 1007,
      tearsShared: 2007
    }
  },
  {
    id: '8',
    title: 'The Skinny Jeans Solidarity Circle',
    description: 'A spontaneous moment during Brand New\'s final tribute when everyone in skinny jeans formed a circle and shared their emo origin stories.',
    date: new Date('2024-08-15'),
    event: 'Brand New Memories (Final Show)',
    imageDescription: 'Circle of people sitting on floor in skinny jeans, intimate lighting, emotional expressions, group hug formation',
    tags: ['brand new', 'skinny jeans', 'community', 'final show'],
    stats: {
      attendance: 200,
      photosShared: 456,
      tearsShared: 2024
    }
  },
  {
    id: '9',
    title: 'The MySpace Profile Recreation',
    description: 'When someone brought a laptop and we all tried to remember our old MySpace passwords. Spoiler alert: nobody could, but we recreated our profiles anyway.',
    date: new Date('2023-09-15'),
    event: 'Emo Nostalgia Night',
    imageDescription: 'Laptop setup with MySpace-style profiles on screen, people gathered around laughing and pointing at old photos',
    tags: ['myspace', 'nostalgia', 'profiles', 'memories'],
    stats: {
      attendance: 320,
      photosShared: 2006,
      tearsShared: 1337
    }
  },
  {
    id: '10',
    title: 'The Emo Dad Takeover',
    description: 'The night all the millennial dads showed up and proved they still had it. Bonus points for the dad who brought his teenage daughter and she was actually impressed.',
    date: new Date('2024-03-20'),
    event: 'Millennial Dad Emo Night',
    imageDescription: 'Mix of people in their 30s and teens, father-daughter duo sharing headphones, dads in vintage band tees',
    tags: ['millennial dads', 'family', 'generations', 'bonding'],
    stats: {
      attendance: 280,
      photosShared: 567,
      tearsShared: 1995
    }
  }
]

export const getHallOfFameByYear = (year: number) => {
  return hallOfFameEntries.filter(entry => entry.date.getFullYear() === year)
}

export const getFeaturedHallOfFame = () => {
  return hallOfFameEntries.slice(0, 6)
}
