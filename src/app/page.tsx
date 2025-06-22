import Link from 'next/link'
import { Heart, Music, Calendar, Users, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import TestimonialCard from '@/components/ui/TestimonialCard'
import BlogCard from '@/components/ui/BlogCard'
import SocialProof from '@/components/ui/SocialProof'
import { getFeaturedTestimonials } from '@/data/testimonials'
import { getFeaturedPosts } from '@/data/blog'
import { getFeaturedPartners, getFeaturedPress } from '@/data/partners'
import {
  VisitorCounter,
  MarqueeText,
  BlinkText,
  RainbowText,
  SparkleBackground,
  BandSticker,
  EmoQuote,
  MySpaceProfile,
  GlitterText,
  NeonText,
  PulsingText,
  FloatingText,
  InteractiveHeart,
  ClickableEmoji,
  HitCounter,
  OnlineNowWidget,
  MySpaceComments,
  WebRing
} from '@/components/ui/RetroElements'

export default function Home() {
  const featuredTestimonials = getFeaturedTestimonials()
  const featuredPosts = getFeaturedPosts()
  const featuredPartners = getFeaturedPartners()
  const featuredPress = getFeaturedPress()

  return (
    <div className="min-h-screen w-full">
      {/* Visitor Counter */}
      <div className="bg-black py-2 border-b border-emo-purple/20 w-full stars-bg">
        <div className="section-center flex items-center justify-center space-x-4 flex-wrap">
          <VisitorCounter />
          <HitCounter label="Total Emo Feels" />
          <OnlineNowWidget />
        </div>
      </div>

      {/* Marquee Announcement */}
      <div className="bg-gradient-to-r from-emo-purple to-emo-pink text-white py-3">
        <MarqueeText>
          🖤💔✨ NEW EMO NIGHT ADDED: Dashboard Confessional Singalong - March 15th! 🎵💀🌙
          Bring tissues for the feels! 💔⚡️🔥
          MCR Tribute Night sold out in 2 hours! 👑🖤💔
          Scene kids unite! 🎵✨🌙
          RAWR XD means I love you! 🦖💔🖤
          Fall Out Boy karaoke night coming soon! ⚡️🔥👑
          Panic! At The Disco circus theme next month! 🎪💔✨
        </MarqueeText>
      </div>

      {/* Hero Section */}
      <SparkleBackground>
        <section className="relative overflow-hidden bg-gradient-emo section-spacing w-full dark-romantic">
          <div className="absolute inset-0 bg-gradient-to-br from-emo-purple/10 to-emo-pink/10"></div>

          <div className="relative centered-container container-spacing">
            <div className="section-center max-w-4xl">
              {/* Main Heading */}
              <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-scene mb-6">
                  🖤💔 Welcome to{' '}
                  <GlitterText>EmoNite</GlitterText> 💔🖤
                </h1>
                <div className="mt-6 flex items-center justify-center space-x-3 flex-wrap">
                  <Heart className="h-6 w-6 text-emo-pink animate-pulse" fill="currentColor" />
                  <span className="text-xl text-gray-300 font-emo italic melancholic-glow">
                    <BlinkText>"It's not a phase, it's a lifestyle"</BlinkText> ✨🌙💀
                  </span>
                  <Heart className="h-6 w-6 text-emo-pink animate-pulse" fill="currentColor" />
                </div>
              </div>

              {/* Subtitle */}
              <div className="mt-8 mb-12">
                <p className="text-lg leading-8 text-gray-300 font-emo max-w-2xl mx-auto">
                  🌙✨ Relive the glory days of 2006 with millennial emo nostalgia nights 🖤💔
                  Dance to My Chemical Romance, Fall Out Boy, Panic! At The Disco, and
                  all your favorite scene kid anthems 🎵💀⚡️ <RainbowText>Skinny jeans optional, feelings mandatory 💔🖤👑</RainbowText> 🔥✨
                </p>
              </div>

              {/* Band Stickers */}
              <div className="sticker-container mb-16 mt-8">
                <div className="sticker-grid max-w-4xl mx-auto">
                  <BandSticker band="MCR 4EVR 🖤💔" color="pink" />
                  <BandSticker band="FOB ⚡️🔥" color="purple" />
                  <BandSticker band="P!ATD 🎪✨" color="blue" />
                  <BandSticker band="RAWR XD 🦖💀" color="green" />
                  <BandSticker band="TBS 👑🌙" color="pink" />
                  <BandSticker band="ATL 💔⚡️" color="purple" />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="button-group mb-16">
                <Link href="/events">
                  <Button variant="primary" size="lg">
                    <Calendar className="h-5 w-5 mr-2" />
                    🎵 Find Events 🎵
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    ✨ Learn More ✨
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center p-6 bg-emo-dark/30 rounded-lg border border-emo-pink/20">
                  <div className="text-3xl font-bold text-emo-pink font-scene">1,337+ 🖤</div>
                  <div className="text-sm text-gray-400 font-emo uppercase tracking-wider mt-2">Emo Kids United</div>
                </div>
                <div className="text-center p-6 bg-emo-dark/30 rounded-lg border border-emo-purple/20">
                  <div className="text-3xl font-bold text-emo-purple font-scene">69+ 🎵</div>
                  <div className="text-sm text-gray-400 font-emo uppercase tracking-wider mt-2">Events Hosted</div>
                </div>
                <div className="text-center p-6 bg-emo-dark/30 rounded-lg border border-neon-green/20">
                  <div className="text-3xl font-bold text-neon-green font-scene">∞ 💔</div>
                  <div className="text-sm text-gray-400 font-emo uppercase tracking-wider mt-2">Feelings Felt</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SparkleBackground>

      {/* MySpace Profile Section */}
      <section className="section-spacing bg-emo-dark/50 w-full subtle-texture">
        <div className="centered-container container-spacing">
          <div className="grid gap-8 lg:grid-cols-3 w-full max-w-6xl">
            <div className="lg:col-span-1 space-y-6">
              <MySpaceProfile
                name="EmoNite Official 👑"
                mood="Emotionally Devastated 💔🖤"
                song="MCR - I'm Not Okay 🎵"
                friends={13337}
              />
              <WebRing />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <EmoQuote />
              <div className="text-center p-8 gothic-border rounded-lg emo-shadow">
                <h2 className="text-3xl font-bold text-white mb-6 font-scene melancholic-glow">
                  🌙 <FloatingText>Latest from the Scene</FloatingText> ✨
                </h2>
                <p className="text-gray-300 font-emo text-lg leading-relaxed">
                  🔥💀 Check out our latest events and join the emo revival!
                  🖤 We're bringing back the feels, one Dashboard Confessional song at a time
                  🎵💔 The black parade never ended, it just got better with age! ⚡️
                </p>
              </div>
              <MySpaceComments />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing w-full dark-romantic">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-scene melancholic-glow">
              💔 What Our <RainbowText>Emo Kids</RainbowText> Say 🖤
            </h2>
            <p className="text-lg text-gray-300 font-emo leading-relaxed">
              🎵✨ Real reviews from real emo kids who attended our events (and survived the feels)
              💀👑 These testimonials are more authentic than your 2006 MySpace profile! 💔
            </p>
          </div>

          <div className="card-grid mb-16 w-full max-w-6xl">
            {featuredTestimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant="featured"
              />
            ))}
          </div>

          <div className="section-center p-8 gothic-border rounded-lg emo-shadow max-w-2xl">
            <p className="text-gray-400 font-emo text-lg mb-6">
              <BlinkText>🔥⚡️ Over 1,337 emo kids can't be wrong! 💀🔥</BlinkText>
            </p>
            <Link href="/events">
              <Button variant="outline" size="lg">
                🖤💔 Join the Emo Revival 💔🖤
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="section-spacing bg-emo-dark/30 w-full stars-bg">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-scene">
              🌙 <FloatingText>Latest from the <NeonText><RainbowText>Emo Scene</RainbowText></NeonText></FloatingText> ⚡️
            </h2>
            <p className="text-lg text-gray-300 font-emo leading-relaxed">
              <ClickableEmoji emoji="🎵" hoverEmoji="💀" /> Stay updated with band news, scene updates, and community highlights
              <ClickableEmoji emoji="💔" hoverEmoji="✨" /> Fresh drama and feels delivered straight to your broken heart!
              <InteractiveHeart size="sm" />
            </p>
          </div>

          <div className="card-grid mb-16 w-full max-w-6xl">
            {featuredPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                variant="featured"
              />
            ))}
          </div>

          <div className="section-center p-8 bg-emo-black/30 rounded-lg border border-emo-purple/20 max-w-2xl">
            <p className="text-gray-400 font-emo text-lg mb-6">
              <BlinkText>🔥 Fresh content updated weekly! 🔥</BlinkText>
            </p>
            <Link href="/blog">
              <Button variant="outline" size="lg">
                📖 Read All Posts 🖤
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-spacing w-full">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-scene">
              👑 Trusted by the <GlitterText>Emo Community</GlitterText> 🖤
            </h2>
            <p className="text-lg text-gray-300 font-emo leading-relaxed">
              From major publications to iconic venues, the emo world supports what we do 🎵💔
              We're basically the MySpace of emo events! ✨🌙
            </p>
          </div>

          <SocialProof
            partners={featuredPartners}
            pressFeatures={featuredPress}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-emo w-full dark-romantic">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-scene mb-8 melancholic-glow">
              💔 Ready to Feel <span className="text-emo-pink">All The Feels</span>? 🖤
            </h2>
            <p className="text-xl leading-8 text-gray-300 font-emo mb-12 max-w-3xl mx-auto">
              🌙✨ Join us for an unforgettable night of millennial emo nostalgia
              💀🎵 Bring your black eyeliner and your biggest emotions
              💔⚡️ Warning: May cause spontaneous crying during Dashboard Confessional! 🖤
            </p>
            <div className="button-group">
              <Link href="/events">
                <Button variant="neon" size="lg">
                  <Heart className="h-5 w-5 mr-2" fill="currentColor" />
                  🔥⚡️ Find Your Scene ⚡️🔥
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg">
                  📧💔 Book an Event 🖤✨
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}
