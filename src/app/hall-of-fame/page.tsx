import type { Metadata } from 'next'
import Link from 'next/link'
import { Trophy, Calendar, Users, Camera } from 'lucide-react'
import HallOfFameCard from '@/components/ui/HallOfFameCard'
import Button from '@/components/ui/Button'
import { hallOfFameEntries, getHallOfFameByYear } from '@/data/hallOfFame'
import { 
  RainbowText, 
  GlitterText, 
  SparkleBackground,
  MarqueeText 
} from '@/components/ui/RetroElements'

export const metadata: Metadata = {
  title: 'Hall of Fame | EmoNite - Epic Emo Night Memories',
  description: 'Relive the most epic moments from EmoNite events. See photos, stories, and memories from our legendary emo nights featuring My Chemical Romance, Fall Out Boy, and more.',
  keywords: 'emo night photos, event memories, My Chemical Romance events, Fall Out Boy nights, emo community, millennial nostalgia photos',
  openGraph: {
    title: 'Hall of Fame | EmoNite',
    description: 'Epic moments and memories from our legendary emo nights.',
    type: 'website',
  },
}

export default function HallOfFamePage() {
  const entries2024 = getHallOfFameByYear(2024)
  const entries2023 = getHallOfFameByYear(2023)
  const entries2022 = getHallOfFameByYear(2022)

  const totalStats = hallOfFameEntries.reduce((acc, entry) => {
    if (entry.stats) {
      acc.attendance += entry.stats.attendance || 0
      acc.photos += entry.stats.photosShared || 0
      acc.tears += entry.stats.tearsShared || 0
    }
    return acc
  }, { attendance: 0, photos: 0, tears: 0 })

  return (
    <div className="min-h-screen bg-emo-black w-full">
      {/* Marquee */}
      <div className="bg-gradient-to-r from-emo-purple to-emo-pink text-white py-3 w-full">
        <MarqueeText>
          🏆💔 HALL OF FAME: Celebrating the most epic emo moments since 2022! 🖤✨
          Over {totalStats.attendance.toLocaleString()} emo kids united! 🎵💀
          {totalStats.tears.toLocaleString()} tears of joy shared! ⚡️🌙
          Legendary feels documented forever! 👑🔥
        </MarqueeText>
      </div>

      {/* Hero Section */}
      <SparkleBackground>
        <section className="bg-gradient-emo section-spacing w-full">
          <div className="centered-container container-spacing">
            <div className="section-center max-w-4xl">
              <div className="flex justify-center mb-8">
                <Trophy className="h-20 w-20 text-yellow-400 animate-bounce" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-scene mb-8">
                🏆 <GlitterText>Hall of Fame</GlitterText> 👑
              </h1>
              <p className="text-xl leading-8 text-gray-300 font-emo max-w-3xl mx-auto">
                The most <RainbowText>legendary moments</RainbowText> from our emo nights 🖤💔
                These are the memories that prove emo isn't dead – it just got better with age! 🌙✨
                Prepare for maximum nostalgia and documented feels! ⚡️💀
              </p>

              {/* Overall Stats */}
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-emo-pink" />
                  </div>
                  <div className="text-3xl font-bold text-emo-pink font-scene">
                    {totalStats.attendance.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-400 font-emo uppercase tracking-wider">
                    Emo Kids United
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Camera className="h-8 w-8 text-emo-purple" />
                  </div>
                  <div className="text-3xl font-bold text-emo-purple font-scene">
                    {totalStats.photos.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-400 font-emo uppercase tracking-wider">
                    Memories Captured
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-3xl">💧</div>
                  </div>
                  <div className="text-3xl font-bold text-neon-green font-scene">
                    {totalStats.tears.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-400 font-emo uppercase tracking-wider">
                    Happy Tears Shed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SparkleBackground>

      {/* 2024 Memories */}
      {entries2024.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 font-scene">
                2024 <span className="text-emo-pink">Highlights</span>
              </h2>
              <p className="text-gray-300 font-emo">
                The year we proved emo is eternal
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {entries2024.map((entry) => (
                <HallOfFameCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2023 Memories */}
      {entries2023.length > 0 && (
        <section className="py-16 bg-emo-dark/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 font-scene">
                2023 <span className="text-emo-purple">Memories</span>
              </h2>
              <p className="text-gray-300 font-emo">
                The year of emotional breakthroughs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {entries2023.map((entry) => (
                <HallOfFameCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2022 Memories */}
      {entries2022.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 font-scene">
                2022 <span className="text-neon-green">Origins</span>
              </h2>
              <p className="text-gray-300 font-emo">
                Where it all began – our legendary first year
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {entries2022.map((entry) => (
                <HallOfFameCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-emo-dark/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-scene">
            Want to Be in Our Next <span className="text-emo-pink">Hall of Fame</span>?
          </h2>
          <p className="text-gray-400 font-emo mb-8 max-w-2xl mx-auto">
            Join us at our next event and create memories that will last forever. 
            Who knows? Your emo moment might be the next legendary entry!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button variant="primary" size="lg">
                <Calendar className="h-5 w-5 mr-2" />
                Find Events
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Share Your Memory
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
