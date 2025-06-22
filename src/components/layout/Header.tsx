'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Heart, Music } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: '🖤💔 Home ✨', href: '/' },
  { name: '🎵⚡️ Events 🔥', href: '/events' },
  { name: '🏆👑 Hall of Fame 💀', href: '/hall-of-fame' },
  { name: '💔🌙 About ✨', href: '/about' },
  { name: '📧🖤 Contact 💔', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-emo-black/90 backdrop-blur-sm border-b border-emo-purple/20 sticky top-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Heart className="h-8 w-8 text-emo-pink group-hover:animate-pulse" fill="currentColor" />
                <Music className="h-4 w-4 text-neon-green absolute -top-1 -right-1 animate-bounce" />
              </div>
              <span className="text-2xl font-bold text-white font-scene tracking-wider">
                EMO<span className="text-emo-pink">NITE</span> 🖤💔
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-emo-pink transition-colors duration-200 font-emo text-sm uppercase tracking-wider relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emo-purple to-emo-pink transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/events"
              className="bg-gradient-to-r from-emo-purple to-emo-pink text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            >
              🎵⚡️ Find Events 🔥✨
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-emo-pink transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="space-y-1 pb-4 pt-2 border-t border-emo-purple/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-emo-pink transition-colors duration-200 font-emo text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/events"
                className="block w-full bg-gradient-to-r from-emo-purple to-emo-pink text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Events
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
