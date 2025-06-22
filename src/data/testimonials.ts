export interface Testimonial {
  id: string
  name: string
  username: string
  event: string
  rating: number
  review: string
  date: Date
  avatar?: string
  verified: boolean
  favoriteband?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ashley M.',
    username: 'xXashley_emo_princessXx',
    event: 'EmoNite Launch Party: Welcome to the Black Parade',
    rating: 5,
    review: 'OMG this was literally the best night of my life since 2006!!! I cried during Welcome to the Black Parade and everyone sang along. It felt like being 16 again but with better eyeliner skills. The DJ played EVERYTHING - even some deep cuts from Three Cheers. 11/10 would emo again! 🖤',
    date: new Date('2022-03-16'),
    verified: true,
    favoriteband: 'My Chemical Romance'
  },
  {
    id: '2',
    name: 'Tyler K.',
    username: 'scene_kid_4_lyfe',
    event: 'Fall Out Boy Mania Night',
    rating: 5,
    review: 'SUGAR WE\'RE GOING DOWN SWINGING!!! This event was absolutely perfect. They played everything from Take This to Your Grave to Folie à Deux. I haven\'t danced that hard since Warped Tour 2007. The tribute band was spot on - the bassist even had Pete Wentz\'s exact eyeliner look. My skinny jeans survived the night barely! rawr xD',
    date: new Date('2022-05-21'),
    verified: true,
    favoriteband: 'Fall Out Boy'
  },
  {
    id: '3',
    name: 'Jenna R.',
    username: 'dashboard_confessional_saved_my_life',
    event: 'Dashboard Confessional Acoustic Night',
    rating: 5,
    review: 'I\'m not crying, you\'re crying! This acoustic night was everything my emo heart needed. When they played "Hands Down" the entire venue was singing along and I swear I saw grown adults sobbing. The intimate setting made it feel like Chris Carrabba was personally serenading my teenage heartbreak. Brought back so many memories of driving around at 2am listening to Dashboard. Perfect Valentine\'s Day for us single emo kids! 💔',
    date: new Date('2023-02-15'),
    verified: true,
    favoriteband: 'Dashboard Confessional'
  },
  {
    id: '4',
    name: 'Mike S.',
    username: 'warped_tour_veteran',
    event: 'Warped Tour Throwback',
    rating: 4,
    review: 'As someone who went to Warped Tour every year from 2005-2010, this brought back ALL the feels. The setlist was perfect - Paramore, All Time Low, Pierce the Veil, even some Hawthorne Heights! Only complaint is they didn\'t play enough Taking Back Sunday, but overall amazing night. Felt like being back in the pit at 17 years old. My back hurts today but it was worth it!',
    date: new Date('2022-07-17'),
    verified: true,
    favoriteband: 'Paramore'
  },
  {
    id: '5',
    name: 'Sarah L.',
    username: 'panic_at_the_disco_queen',
    event: 'Panic! At The Disco Circus',
    rating: 5,
    review: 'A FEVER YOU CAN\'T SWEAT OUT! This circus-themed night was absolutely incredible. The theatrical elements, the costumes, the DRAMA - it was everything P!ATD represents. They even had actual circus performers during "The Only Difference Between Martyrdom and Suicide Is Press Coverage." I wore my original 2005 Panic! shirt and felt like the coolest person there. Brendon would be proud! 🎪',
    date: new Date('2023-04-02'),
    verified: true,
    favoriteband: 'Panic! At The Disco'
  },
  {
    id: '6',
    name: 'Alex T.',
    username: 'taking_back_my_sunday',
    event: 'Taking Back Sunday Singalong',
    rating: 5,
    review: 'TELL ALL YOUR FRIENDS ABOUT THIS EVENT! Seriously though, this was amazing. The energy when they played "Cute Without the E" was insane - everyone was screaming along. The tribute band nailed Adam\'s vocals and even did the classic TBS stage banter. Felt like being at Bamboozle again. Already told all my friends and we\'re coming to the next one as a group!',
    date: new Date('2023-06-11'),
    verified: true,
    favoriteband: 'Taking Back Sunday'
  },
  {
    id: '7',
    name: 'Emma W.',
    username: 'emo_girl_2006',
    event: 'The Used & Abused Halloween Special',
    rating: 5,
    review: 'TASTE OF INK! This Halloween show was absolutely perfect. Everyone came in costume - I saw at least 5 Gerard Ways, 3 Pete Wentzes, and someone dressed as the entire Black Parade. The Used tribute band was INCREDIBLE, especially during "I Caught Fire." The screaming, the energy, the nostalgia - it was everything. Best Halloween ever! 🎃🖤',
    date: new Date('2024-11-01'),
    verified: true,
    favoriteband: 'The Used'
  },
  {
    id: '8',
    name: 'Jordan M.',
    username: 'brand_new_fan_4ever',
    event: 'Brand New Memories (Final Show)',
    rating: 4,
    review: 'Bittersweet night knowing this was the last Brand New tribute show. The band played everything from "Your Favorite Weapon" to "Science Fiction." When they played "Jesus Christ" the entire venue was silent except for singing - it was hauntingly beautiful. Mixed feelings about the whole Brand New situation but the music still hits different. The devil and god were definitely raging inside all of us that night.',
    date: new Date('2024-08-16'),
    verified: true,
    favoriteband: 'Brand New'
  },
  {
    id: '9',
    name: 'Chloe B.',
    username: 'scene_queen_supreme',
    event: 'Warped Tour Throwback',
    rating: 5,
    review: 'This event was SO FETCH! (wrong era but whatever lol) The Paramore tribute was absolutely perfect - the singer even had the orange hair! They played "Misery Business" and I swear I was transported back to 2007. Everyone was wearing their old band tees and the nostalgia was REAL. Can\'t wait for the next one! Already planning my outfit 💕',
    date: new Date('2022-07-17'),
    verified: true,
    favoriteband: 'Paramore'
  },
  {
    id: '10',
    name: 'Ryan D.',
    username: 'emo_dad_now',
    event: 'EmoNite Launch Party: Welcome to the Black Parade',
    rating: 5,
    review: 'As a 35-year-old dad who still secretly listens to MCR in the car, this event was everything I needed. Got a babysitter, dusted off my old Converse, and relived my youth for one night. The crowd was amazing - all millennials who grew up with this music. We\'re not teenagers anymore but the music still hits the same. My wife thinks I\'m having a midlife crisis but jokes on her - this IS my midlife crisis and it\'s AWESOME! 🖤',
    date: new Date('2022-03-16'),
    verified: true,
    favoriteband: 'My Chemical Romance'
  },
  {
    id: '11',
    name: 'Megan K.',
    username: 'hawthorne_heights_4ever',
    event: 'Warped Tour Throwback',
    rating: 4,
    review: 'So here I am, growing older all the time... This event brought back so many memories! They played some deep cuts that I haven\'t heard in years. The only thing missing was more Hawthorne Heights but I understand they can\'t play everything. The venue was perfect and everyone was so friendly. It\'s amazing how this music brings people together even 15+ years later!',
    date: new Date('2022-07-17'),
    verified: true,
    favoriteband: 'Hawthorne Heights'
  },
  {
    id: '12',
    name: 'Kevin L.',
    username: 'all_time_low_enthusiast',
    event: 'Scene Kids Unite: Warped Tour Memories',
    rating: 5,
    review: 'WEIGHTLESS! This event was absolutely incredible. The All Time Low tribute was spot on - they even did the classic Alex Gaskarth stage banter. When they played "Dear Maria" the entire crowd went WILD. Felt like being at Warped Tour again but with better sound quality and cheaper drinks lol. Already bought tickets for the next show!',
    date: new Date('2025-07-23'),
    verified: true,
    favoriteband: 'All Time Low'
  }
]

export const getTestimonialsByEvent = (eventId: string) => {
  return testimonials.filter(t => t.event.includes(eventId))
}

export const getFeaturedTestimonials = () => {
  return testimonials.filter(t => t.rating === 5).slice(0, 6)
}
