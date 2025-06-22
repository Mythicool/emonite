import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emo Night Events | EmoNite - Find Millennial Nostalgia Nights Near You',
  description: 'Discover upcoming emo night events featuring My Chemical Romance, Fall Out Boy, Panic! At The Disco, and all your favorite 2000s emo classics. Find emo nights in your city.',
  keywords: 'emo night events, millennial nostalgia, My Chemical Romance events, Fall Out Boy tribute, emo music events, scene kid nights, 2000s music events',
  openGraph: {
    title: 'Emo Night Events | EmoNite',
    description: 'Find emo night events near you featuring all your favorite 2000s classics.',
    type: 'website',
  },
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
