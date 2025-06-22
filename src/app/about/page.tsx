import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About EmoNite | Millennial Emo Nostalgia Culture & Events',
  description: 'Learn about EmoNite and the millennial emo renaissance. Discover why emo culture is having its moment again and how we celebrate 2000s nostalgia through music events.',
  keywords: 'about emo culture, millennial nostalgia, emo renaissance, 2000s music culture, scene kid culture, emo fashion, Dashboard Confessional, My Chemical Romance',
  openGraph: {
    title: 'About EmoNite | Millennial Emo Culture',
    description: 'The story behind EmoNite and the millennial emo renaissance.',
    type: 'website',
  },
}
import { Heart, Music, Users, Sparkles, Calendar, Star } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-emo-black w-full">
      {/* Hero Section */}
      <section className="bg-gradient-emo section-spacing w-full">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-scene mb-8">
              🖤 About <span className="text-emo-pink">EmoNite</span> 💔
            </h1>
            <p className="text-xl leading-8 text-gray-300 font-emo max-w-3xl mx-auto">
              Where millennial nostalgia meets emotional catharsis, and skinny jeans are always in style 🌙✨
              We're basically group therapy disguised as a dance party! 🎵💀⚡️
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing w-full">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center font-scene">
              🌙 Our Story ✨
            </h2>
            <div className="space-y-8">
              <p className="text-gray-300 leading-relaxed font-emo text-lg">
                Remember when your biggest problem was whether your side-swept bangs were perfectly positioned? 💇‍♀️🖤
                When Dashboard Confessional lyrics felt like they were written specifically about your life? 🎵💔
                When Hot Topic was basically your second home? 🛍️⚡️
              </p>
              <p className="text-gray-300 leading-relaxed font-emo text-lg">
                <strong className="text-emo-pink">EmoNite</strong> was born from the realization that those feelings never really went away 🌙💀
                We're the millennials who grew up with MySpace profiles featuring angsty song lyrics,
                who knew every word to "The Black Parade," and who still get emotional listening to
                "Hands Down" by Dashboard Confessional 🎵✨
              </p>
              <p className="text-gray-300 leading-relaxed font-emo text-lg">
                What started as a group of friends reminiscing about the "good old days" of 2006
                has evolved into a movement celebrating the music, fashion, and culture that defined
                our teenage years 👑🔥 Because let's be honest – it wasn't just a phase 💔🖤
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Emo Renaissance */}
      <section className="py-16 sm:py-24 bg-emo-dark/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-scene">
              The Millennial Emo Renaissance
            </h2>
            <p className="text-lg text-gray-300 font-emo">
              Why emo culture is having its moment (again)
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-emo-dark rounded-lg p-8 border border-emo-purple/20 text-center">
              <Heart className="h-12 w-12 text-emo-pink mx-auto mb-4" fill="currentColor" />
              <h3 className="text-xl font-bold text-white mb-4 font-scene">Emotional Authenticity</h3>
              <p className="text-gray-400 font-emo">
                In a world of curated social media, emo culture's raw emotional honesty feels refreshingly real.
              </p>
            </div>

            <div className="bg-emo-dark rounded-lg p-8 border border-emo-purple/20 text-center">
              <Music className="h-12 w-12 text-emo-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4 font-scene">Timeless Music</h3>
              <p className="text-gray-400 font-emo">
                The songs that defined our youth still hit just as hard. Some melodies are eternal.
              </p>
            </div>

            <div className="bg-emo-dark rounded-lg p-8 border border-emo-purple/20 text-center">
              <Users className="h-12 w-12 text-neon-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4 font-scene">Community</h3>
              <p className="text-gray-400 font-emo">
                Finding your tribe of fellow emo kids who understand the importance of perfect eyeliner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-scene">
              What We Do
            </h2>
            <p className="text-lg text-gray-300 font-emo">
              More than just nostalgia – we're creating new memories with old favorites
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-scene flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-emo-pink" />
                Curated Events
              </h3>
              <ul className="space-y-4 text-gray-300 font-emo">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-purple mr-3 mt-0.5 flex-shrink-0" />
                  <span>DJ nights featuring the best emo, scene, and pop-punk hits from 2003-2009</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-purple mr-3 mt-0.5 flex-shrink-0" />
                  <span>Tribute band performances celebrating iconic emo acts</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-purple mr-3 mt-0.5 flex-shrink-0" />
                  <span>Themed parties with costume contests and emo fashion shows</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-purple mr-3 mt-0.5 flex-shrink-0" />
                  <span>Acoustic nights for intimate Dashboard Confessional singalongs</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-scene flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-neon-green" />
                The Experience
              </h3>
              <ul className="space-y-4 text-gray-300 font-emo">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-pink mr-3 mt-0.5 flex-shrink-0" />
                  <span>Judgment-free zones where you can embrace your inner scene kid</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-pink mr-3 mt-0.5 flex-shrink-0" />
                  <span>Photo booths with emo props and MySpace-style angles</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-pink mr-3 mt-0.5 flex-shrink-0" />
                  <span>Venues decorated with early 2000s nostalgia</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-emo-pink mr-3 mt-0.5 flex-shrink-0" />
                  <span>Community of like-minded millennials who get it</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emo Hall of Fame */}
      <section className="py-16 sm:py-24 bg-emo-dark/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-scene">
              Emo Hall of Fame
            </h2>
            <p className="text-lg text-gray-300 font-emo">
              The bands that soundtracked our teenage angst
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              'My Chemical Romance',
              'Fall Out Boy',
              'Panic! At The Disco',
              'Dashboard Confessional',
              'Taking Back Sunday',
              'Brand New',
              'The Used',
              'Hawthorne Heights',
              'Paramore',
              'All Time Low',
              'Pierce The Veil',
              'Sleeping With Sirens'
            ].map((band) => (
              <div key={band} className="text-emo-pink font-emo text-sm hover:text-white transition-colors cursor-default">
                {band}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-scene">
              Ready to Feel All The Feels?
            </h2>
            <p className="text-lg text-gray-300 font-emo mb-8">
              Join our community of emo kids who never really grew up (and that's perfectly okay).
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
                  <Heart className="h-5 w-5 mr-2" fill="currentColor" />
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
