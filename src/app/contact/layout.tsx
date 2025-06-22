import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Booking | EmoNite - Book Emo Night Events',
  description: 'Contact EmoNite for event booking, venue partnerships, and general inquiries. Book emo night events for your venue or city. Get in touch with the emo community.',
  keywords: 'contact emo night, book emo event, venue booking, emo night booking, event organizer contact, emo event planning',
  openGraph: {
    title: 'Contact & Booking | EmoNite',
    description: 'Get in touch with EmoNite for event booking and partnerships.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
