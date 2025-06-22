export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: Date
  category: 'news' | 'scene-update' | 'band-news' | 'community' | 'press'
  tags: string[]
  featured: boolean
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Chemical Romance Announces 2025 Tour: Emo Kids Everywhere Lose Their Minds',
    slug: 'mcr-2025-tour-announcement',
    excerpt: 'Gerard Way and the gang are back with a massive world tour, and we\'re already planning themed nights for every city they hit.',
    content: `The Black Parade is marching again! My Chemical Romance just announced their biggest tour since the reunion, and the emo community is absolutely losing it (in the best way possible).

The tour, dubbed "The Foundations of Decay World Tour," will hit 40+ cities across North America and Europe. While we can't confirm any official partnerships yet, we're already planning epic MCR tribute nights in every city they visit.

"When MCR announced their reunion, it felt like Christmas morning for every millennial who grew up with Three Cheers for Sweet Revenge," says EmoNite founder Ashley M. "Now with this tour announcement, it's like Christmas, our birthday, and the day we discovered eyeliner all rolled into one."

The tour is expected to feature deep cuts from their entire catalog, including rare performances of songs from "I Brought You My Bullets, You Brought Me Your Love." Tickets go on sale Friday, and we predict they'll sell out faster than you can say "I'm not okay."

Stay tuned for our official MCR tribute nights leading up to each tour date. We'll be providing eyeliner tutorials, singalong practice sessions, and emotional support for when "Cancer" inevitably makes everyone cry.`,
    author: 'EmoNite Editorial Team',
    date: new Date('2025-01-15'),
    category: 'band-news',
    tags: ['my chemical romance', 'tour', 'reunion', 'black parade'],
    featured: true
  },
  {
    id: '2',
    title: 'The Great Emo Revival: Why Millennials Are Returning to Their Roots',
    slug: 'great-emo-revival-millennials',
    excerpt: 'From TikTok trends to sold-out tribute shows, emo culture is having its biggest moment since 2006. Here\'s why.',
    content: `Something magical is happening in the music world, and it sounds suspiciously like the opening notes of "Welcome to the Black Parade."

The emo revival isn't just a trend – it's a full-blown cultural renaissance. From TikTok users discovering Dashboard Confessional for the first time to millennials dusting off their skinny jeans for tribute shows, emo is officially back.

**The Numbers Don't Lie**

Our events have seen a 300% increase in attendance over the past year. Spotify reports that emo playlists have gained over 2 million new followers, with "I'm Not Okay (I Promise)" being the most-streamed emo song of 2024.

**Why Now?**

Dr. Sarah Chen, a cultural anthropologist at Northwestern University, explains: "Millennials are at an age where nostalgia hits differently. They're dealing with adult responsibilities while longing for the emotional authenticity of their youth. Emo music provided a soundtrack for feeling deeply, and that's exactly what people need right now."

**The TikTok Effect**

Gen Z has discovered emo through TikTok, creating a beautiful intergenerational bridge. We've seen 16-year-olds at our events singing along to Taking Back Sunday with 35-year-old millennials, and honestly, it's enough to make you cry (happy tears, obviously).

**What's Next?**

The revival shows no signs of slowing down. Major festivals are adding more emo acts, tribute bands are booking months in advance, and somewhere, Pete Wentz is probably smiling behind his perfectly applied eyeliner.

Welcome to the emo renaissance. We've been waiting for you.`,
    author: 'Tyler K.',
    date: new Date('2024-12-20'),
    category: 'scene-update',
    tags: ['emo revival', 'millennials', 'culture', 'nostalgia'],
    featured: true
  },
  {
    id: '3',
    title: 'EmoNite Featured in Rolling Stone: "The Therapy Session Disguised as a Dance Party"',
    slug: 'rolling-stone-feature',
    excerpt: 'Rolling Stone calls our events "the most authentic nostalgia experience in America" in their latest feature on the emo revival.',
    content: `We're still pinching ourselves! Rolling Stone just published a massive feature on the emo revival, and EmoNite was front and center.

**The Article**

Writer Jake Morrison attended our "Dashboard Confessional Singalong" event in February and described it as "a therapy session disguised as a dance party, where grown adults process their teenage emotions through the healing power of Chris Carrabba's voice."

The piece, titled "How Emo Nights Are Saving Millennial Mental Health," explores how our events provide a safe space for emotional expression in an increasingly disconnected world.

**Key Quotes**

"EmoNite isn't just playing old songs – they're creating a time machine that lets people reconnect with the parts of themselves they thought they'd lost," Morrison writes.

He also noted our "impressive attention to detail," from the MySpace-inspired photo booths to the "crying corner" complete with tissues and emotional support volunteers.

**The Response**

Since the article dropped, we've been flooded with messages from emo kids around the world. Our Instagram followers jumped by 15,000 in 48 hours, and we've received booking requests from venues in 12 new cities.

**What This Means**

This recognition validates what we've known all along – emo culture isn't just nostalgia, it's a vital part of millennial identity. We're not just throwing parties; we're providing community, healing, and a reminder that it's okay to feel everything deeply.

Thank you, Rolling Stone, for understanding that emo isn't dead – it just grew up and learned better coping mechanisms.`,
    author: 'EmoNite Editorial Team',
    date: new Date('2024-11-08'),
    category: 'press',
    tags: ['rolling stone', 'press coverage', 'mental health', 'community'],
    featured: true
  },
  {
    id: '4',
    title: 'Fall Out Boy\'s Pete Wentz Shares Our Event on Instagram: "This Is So Fetch"',
    slug: 'pete-wentz-instagram-share',
    excerpt: 'The eyeliner king himself gave us a shoutout, and we\'re still not over it. Here\'s what happened when Pete discovered EmoNite.',
    content: `STOP EVERYTHING. Pete Wentz just shared our Fall Out Boy tribute night on his Instagram story, and we're officially deceased.

**The Post**

Pete shared a video from our "Sugar, We're Goin Down" dance party with the caption: "This is so fetch 🖤 Love seeing the next generation keeping the emo spirit alive. Also, that bassist's eyeliner game is STRONG."

**The Backstory**

Apparently, Pete discovered us through his daughter's TikTok feed (yes, really). She showed him videos from our events, and he was impressed by the "authenticity and passion" of our community.

**The Response**

Our phones haven't stopped buzzing since the post went live. We gained 8,000 new followers in 6 hours, and ticket sales for our upcoming events increased by 400%.

**Pete's Message**

In a follow-up post, Pete wrote: "Emo isn't just music – it's about finding your tribe and feeling everything deeply. These events are keeping that spirit alive for a new generation, and that's beautiful."

**What's Next?**

While we can't confirm anything official, let's just say we might be planning something very special for our next Fall Out Boy tribute night. 👀

Thank you, Pete, for the validation and for proving that emo legends support the emo revival. We promise to keep the eyeliner game strong.`,
    author: 'Scene Queen',
    date: new Date('2024-10-22'),
    category: 'band-news',
    tags: ['pete wentz', 'fall out boy', 'instagram', 'validation'],
    featured: false
  },
  {
    id: '5',
    title: 'Community Spotlight: How EmoNite Helped Sarah Find Her People',
    slug: 'community-spotlight-sarah',
    excerpt: 'Meet Sarah, a 32-year-old mom who rediscovered her emo identity and found lifelong friends at our events.',
    content: `This month's community spotlight features Sarah L., a 32-year-old mother of two who found her emo family at EmoNite.

**Sarah's Story**

"I thought my emo days were behind me," Sarah tells us over coffee (black, obviously). "I was a mom, a professional, a 'responsible adult.' But something was missing."

Sarah discovered EmoNite through a Facebook ad and decided to attend our Dashboard Confessional acoustic night. "I almost didn't go. I thought I'd be the oldest person there, that I wouldn't fit in."

**Finding Her Tribe**

Instead, Sarah found a community of like-minded millennials who understood that being an adult doesn't mean abandoning the parts of yourself that make you feel alive.

"When they played 'Hands Down,' I started crying," Sarah remembers. "Not sad tears – happy tears. I realized I'd been suppressing this huge part of my identity for years."

**The Impact**

Sarah is now a regular at our events and has made several close friends through the EmoNite community. She even convinced her husband to attend a Taking Back Sunday tribute night.

"My kids think it's hilarious that their mom is in a 'emo phase,'" Sarah laughs. "I tell them it's not a phase – it's who I am."

**The Bigger Picture**

Sarah's story isn't unique. We hear similar tales at every event – people rediscovering parts of themselves they thought were lost, finding community, and learning that it's never too late to embrace your authentic self.

**Sarah's Advice**

"Don't let anyone tell you that you're too old for the music that shaped you. Emo taught us that it's okay to feel deeply, and that lesson is just as relevant at 32 as it was at 16."

Thank you, Sarah, for reminding us why we do what we do. See you at the next singalong! 🖤`,
    author: 'Jenna R.',
    date: new Date('2024-09-15'),
    category: 'community',
    tags: ['community spotlight', 'personal story', 'identity', 'belonging'],
    featured: false
  }
]

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

export const getPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category === category)
}

export const getRecentPosts = (limit: number = 5) => {
  return blogPosts
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, limit)
}
