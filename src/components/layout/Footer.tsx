import Link from 'next/link'
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react'
import { VisitorCounter, LastFmWidget } from '@/components/ui/RetroElements'

const navigation = {
  main: [
    { name: 'Events', href: '/events' },
    { name: 'Hall of Fame', href: '/hall-of-fame' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Email',
      href: 'mailto:hello@emonite.com',
      icon: Mail,
    },
  ],
}

const emoQuotes = [
  "It's not a phase, it's a lifestyle 🖤",
  "Rawr means I love you in dinosaur xD",
  "My heart is black like my soul",
  "Screaming internally since 2003",
  "Too emo for this world",
]

export default function Footer() {
  const randomQuote = emoQuotes[Math.floor(Math.random() * emoQuotes.length)]

  return (
    <footer className="bg-emo-black border-t border-emo-purple/20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-emo-pink" fill="currentColor" />
              <span className="text-2xl font-bold text-white font-scene tracking-wider">
                EMO<span className="text-emo-pink">NITE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm font-emo leading-relaxed">
              Bringing millennial emo nostalgia to life through unforgettable nights
              of music, memories, and pure emotional catharsis. Because some of us
              never really left 2006.
            </p>
            <div className="text-emo-purple text-sm font-emo italic">
              "{randomQuote}"
            </div>
            <VisitorCounter />
          </div>

          {/* Last.fm Widget */}
          <div className="mt-16 xl:mt-0">
            <LastFmWidget />
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider font-scene">
                  Navigation
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-emo-pink transition-colors duration-200 font-emo"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider font-scene">
                  Emo Essentials
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <span className="text-sm leading-6 text-gray-400 font-emo">
                      My Chemical Romance
                    </span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-400 font-emo">
                      Fall Out Boy
                    </span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-400 font-emo">
                      Panic! At The Disco
                    </span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-400 font-emo">
                      Dashboard Confessional
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="mt-16 border-t border-emo-purple/20 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            {/* Social Links */}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-emo-pink transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="mt-8 text-xs leading-5 text-gray-400 sm:mt-0 font-emo">
              &copy; 2025 EmoNite. Made with 🖤 for the emo kids who never grew up.
            </p>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600 font-emo">
            *Skinny jeans and side-swept bangs not included
          </p>
        </div>
      </div>
    </footer>
  )
}
