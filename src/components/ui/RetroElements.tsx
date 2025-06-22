'use client'

import { useState, useEffect } from 'react'
import { Star, Heart, Music } from 'lucide-react'

export function VisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Simulate visitor count
    const baseCount = 133742
    const randomAdd = Math.floor(Math.random() * 50)
    setCount(baseCount + randomAdd)
  }, [])

  return (
    <div className="visitor-counter inline-block">
      🖤 You are visitor #{count.toLocaleString()} 💔
    </div>
  )
}

export function MarqueeText({ children, speed = 15 }: { children: React.ReactNode, speed?: number }) {
  return (
    <div className="marquee overflow-hidden">
      <span style={{ animationDuration: `${speed}s` }}>
        {children}
      </span>
    </div>
  )
}

export function BlinkText({ children }: { children: React.ReactNode }) {
  return <span className="blink">{children}</span>
}

export function RainbowText({ children }: { children: React.ReactNode }) {
  return <span className="enhanced-rainbow-text font-bold">{children}</span>
}

export function TypewriterText({ children, speed = 100 }: { children: string, speed?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + children[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, children, speed])

  return <span className="typewriter">{displayText}</span>
}

export function NeonText({ children }: { children: React.ReactNode }) {
  return <span className="neon-text font-bold">{children}</span>
}

export function PulsingText({ children }: { children: React.ReactNode }) {
  return <span className="pulsing-text font-bold">{children}</span>
}

export function GlitchText({ children, text }: { children: React.ReactNode, text: string }) {
  return <span className="glitch-text font-bold" data-text={text}>{children}</span>
}

export function FloatingText({ children }: { children: React.ReactNode }) {
  return <span className="floating-text">{children}</span>
}

export function WobbleText({ children }: { children: React.ReactNode }) {
  return <span className="wobble-text">{children}</span>
}

export function UnderConstruction() {
  return (
    <div className="under-construction">
      🚧💔 UNDER CONSTRUCTION 🖤⚡️ PARDON OUR DUST WHILE WE ADD MORE EMO VIBES 🌙✨ COMING SOON 🚧💀
    </div>
  )
}

export function BandSticker({ band, color = 'pink', interactive = false }: { band: string, color?: string, interactive?: boolean }) {
  const colors = {
    pink: 'bg-gradient-to-r from-pink-600 to-pink-700',
    purple: 'bg-gradient-to-r from-purple-600 to-purple-700',
    blue: 'bg-gradient-to-r from-blue-600 to-blue-700',
    green: 'bg-gradient-to-r from-green-600 to-green-700',
  }

  return (
    <div
      className={`
        sticker text-xs transition-all duration-200 gentle-hover
        ${colors[color as keyof typeof colors] || colors.pink}
        m-2 mx-3 my-2
      `}
    >
      {band}
    </div>
  )
}

export function InteractiveHeart({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const [isLiked, setIsLiked] = useState(false)
  const [hearts, setHearts] = useState<Array<{ id: number, x: number, y: number }>>([])

  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  const handleClick = (e: React.MouseEvent) => {
    setIsLiked(!isLiked)

    // Create floating hearts
    const rect = e.currentTarget.getBoundingClientRect()
    const newHeart = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }

    setHearts(prev => [...prev, newHeart])

    // Remove heart after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id))
    }, 1000)
  }

  return (
    <div className="relative inline-block">
      <Heart
        className={`
          ${sizes[size]} cursor-pointer transition-all duration-200
          ${isLiked ? 'text-emo-pink scale-110 heart-beat' : 'text-gray-400 hover:text-emo-pink hover:scale-105'}
        `}
        fill={isLiked ? 'currentColor' : 'none'}
        onClick={handleClick}
      />

      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute pointer-events-none animate-bounce"
          style={{
            left: heart.x,
            top: heart.y,
            animation: 'fadeInUp 1s ease-out forwards'
          }}
        >
          💔
        </div>
      ))}
    </div>
  )
}

export function ClickableEmoji({
  emoji,
  hoverEmoji,
  onClick
}: {
  emoji: string
  hoverEmoji?: string
  onClick?: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)
    onClick?.()
  }

  return (
    <span
      className={`
        inline-block cursor-pointer transition-all duration-200 select-none
        hover:scale-125 active:scale-95
        ${isClicked ? 'animate-spin' : ''}
        ${isHovered ? 'animate-bounce' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {isHovered && hoverEmoji ? hoverEmoji : emoji}
    </span>
  )
}

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number, y: number, id: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      }

      setTrail(prev => [...prev.slice(-10), newTrail])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-emo-pink rounded-full opacity-50"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}
    </div>
  )
}

export function PolaroidPhoto({ 
  src, 
  alt, 
  caption, 
  rotation = 'random' 
}: { 
  src: string
  alt: string
  caption?: string
  rotation?: 'left' | 'right' | 'random'
}) {
  const getRotation = () => {
    if (rotation === 'random') {
      return Math.random() > 0.5 ? 'rotate-2' : '-rotate-2'
    }
    return rotation === 'left' ? '-rotate-2' : 'rotate-2'
  }

  return (
    <div className={`polaroid ${getRotation()} hover:rotate-0 hover:scale-105 transition-transform duration-300`}>
      <div className="w-48 h-48 bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
        📸 {alt}
      </div>
      {caption && (
        <div className="text-center mt-2 text-black font-emo text-sm">
          {caption}
        </div>
      )}
    </div>
  )
}

export function SparkleBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 sparkle-bg opacity-20"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function CheckeredPattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 checkered-bg opacity-10"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function RetroButton({ 
  children, 
  onClick, 
  variant = 'primary' 
}: { 
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}) {
  return (
    <button
      onClick={onClick}
      className={`
        retro-border px-6 py-3 font-bold uppercase tracking-wider
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
          : 'bg-black text-neon-green'
        }
        hover:scale-105 transition-transform duration-200
      `}
    >
      {children}
    </button>
  )
}

export function MySpaceProfile({
  name,
  mood,
  song,
  friends
}: {
  name: string
  mood: string
  song: string
  friends: number
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="bg-gradient-to-b from-purple-900 to-black p-6 rounded-lg border-2 border-pink-500 emo-shadow subtle-texture">
      {/* Profile Header */}
      <div className="text-center mb-4 relative z-10">
        <h3 className="text-2xl font-bold text-white font-scene">{name}</h3>
        <div className="text-pink-400 text-sm font-emo">"It's not a phase, mom!"</div>
        <div className="text-xs text-gray-500 font-emo mt-1">Last Login: 2 hours ago</div>
      </div>

      {/* Profile Picture Placeholder */}
      <div className="text-center mb-4 relative z-10">
        <div className="w-24 h-24 mx-auto bg-black border-2 border-pink-500 rounded flex items-center justify-center">
          <span className="text-pink-400 text-xs font-emo">No Pic 💔</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="space-y-2 text-sm font-emo mb-4 relative z-10">
        <div className="flex justify-between">
          <span className="text-gray-400">Mood:</span>
          <span className="text-white">{mood}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Now Playing:</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-pink-400 hover:text-pink-300"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <span className="text-pink-400 text-xs">{song}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Friends:</span>
          <span className="text-neon-green">{friends.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Profile Views:</span>
          <span className="text-yellow-400">133,742</span>
        </div>
      </div>

      {/* Band Stickers */}
      <div className="sticker-container relative z-10">
        <div className="sticker-grid">
          <BandSticker band="MCR 🖤" color="pink" />
          <BandSticker band="FOB ⚡" color="purple" />
          <BandSticker band="P!ATD 🎪" color="blue" />
        </div>
      </div>

      {/* Top Friends Preview */}
      <div className="border-t border-pink-500/30 pt-3 relative z-10">
        <div className="text-pink-400 font-bold text-xs font-scene mb-2">TOP 8 FRIENDS 👑</div>
        <div className="grid grid-cols-4 gap-1">
          {['Gerard 🖤', 'Pete ⚡', 'Brendon 🎪', 'Chris 💔'].map((friend, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 bg-black border border-gray-500 rounded text-xs flex items-center justify-center">
                <span className="text-gray-400">👤</span>
              </div>
              <div className="text-xs text-gray-400 font-emo mt-1 truncate">{friend}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MySpaceComments() {
  const comments = [
    {
      name: "xXemo_princess_2006Xx",
      message: "OMG your profile is SO cute!! Love the MCR song 🖤💔 Comment me back!",
      time: "2 hours ago"
    },
    {
      name: "scene_kid_rawr",
      message: "RAWR XD!! Your top 8 is perfect bestie!! Miss you 💕✨",
      time: "5 hours ago"
    },
    {
      name: "dashboard_lover",
      message: "Dashboard Confessional is LIFE!! We should totally hang out at the mall 🎵",
      time: "1 day ago"
    }
  ]

  return (
    <div className="bg-emo-dark/50 border border-pink-500/30 rounded p-4">
      <div className="text-pink-400 font-bold text-sm font-scene mb-3">
        COMMENTS (1,337) 💬
      </div>
      <div className="space-y-3">
        {comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-700 pb-2 last:border-b-0">
            <div className="flex justify-between items-start mb-1">
              <span className="text-pink-400 font-bold text-xs font-emo">{comment.name}</span>
              <span className="text-gray-500 text-xs font-emo">{comment.time}</span>
            </div>
            <div className="text-gray-300 text-sm font-emo">{comment.message}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-gray-700">
        <button className="text-neon-green text-xs font-emo hover:text-pink-400">
          💬 Add Comment
        </button>
      </div>
    </div>
  )
}

export function GlitterText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="sparkle-bg absolute inset-0 opacity-30"></span>
      <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
        {children}
      </span>
    </span>
  )
}

export function EmoQuote() {
  const quotes = [
    "Rawr means I love you in dinosaur xD",
    "My heart is black like my soul",
    "Screaming internally since 2003",
    "Too emo for this world",
    "I'm not okay (I promise)",
    "Welcome to the Black Parade of my feelings",
    "Fall Out Boy saved my life",
    "Dashboard Confessional understands me",
    "Panic! At The Disco is my religion",
    "My Chemical Romance is my therapy"
  ]

  const [quote, setQuote] = useState('')

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
    <div className="text-center p-4 bg-black/50 rounded-lg border border-pink-500/30">
      <div className="text-pink-400 font-emo italic text-sm">
        "{quote}"
      </div>
      <div className="text-gray-500 text-xs mt-2">
        - Random Emo Kid, circa 2006
      </div>
    </div>
  )
}

export function LastFmWidget() {
  const recentTracks = [
    "My Chemical Romance - Welcome to the Black Parade",
    "Fall Out Boy - Sugar, We're Goin Down",
    "Panic! At The Disco - I Write Sins Not Tragedies",
    "Dashboard Confessional - Hands Down",
    "Taking Back Sunday - Cute Without the 'E'"
  ]

  return (
    <div className="bg-red-900/20 p-4 rounded border border-red-500/30">
      <div className="flex items-center mb-3">
        <Music className="h-4 w-4 text-red-400 mr-2" />
        <span className="text-red-400 font-bold text-sm font-scene">LAST.FM</span>
      </div>
      <div className="space-y-1">
        {recentTracks.slice(0, 3).map((track, index) => (
          <div key={index} className="text-xs text-gray-300 font-emo truncate">
            {track}
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-2">
        Scrobbling since 2005
      </div>
    </div>
  )
}

export function HitCounter({ label = "Total Hits" }: { label?: string }) {
  const [hits, setHits] = useState(0)

  useEffect(() => {
    const baseHits = 1337420
    const randomAdd = Math.floor(Math.random() * 100)
    setHits(baseHits + randomAdd)
  }, [])

  return (
    <div className="bg-black border-2 border-gray-500 p-2 inline-block">
      <div className="text-neon-green font-emo text-xs text-center">
        {label}: {hits.toLocaleString()}
      </div>
    </div>
  )
}

export function AnimatedGifPlaceholder({
  text,
  color = 'pink'
}: {
  text: string
  color?: 'pink' | 'purple' | 'green' | 'blue'
}) {
  const colors = {
    pink: 'border-pink-500 text-pink-400',
    purple: 'border-purple-500 text-purple-400',
    green: 'border-green-500 text-green-400',
    blue: 'border-blue-500 text-blue-400'
  }

  return (
    <div className={`w-32 h-32 border-2 ${colors[color]} bg-black/50 flex items-center justify-center animate-pulse`}>
      <div className="text-center">
        <div className="text-xs font-emo mb-1">📸 GIF</div>
        <div className="text-xs font-emo">{text}</div>
      </div>
    </div>
  )
}

export function WebRing() {
  const sites = [
    "EmoKidsUnite.net",
    "MyChemicalRomance.org",
    "SceneKidsForever.com",
    "EmoPoetry.net",
    "BlackParadeMemories.org"
  ]

  return (
    <div className="bg-gradient-to-r from-purple-900 to-black p-4 border-2 border-pink-500 rounded">
      <div className="text-center mb-3">
        <div className="text-pink-400 font-bold text-sm font-scene">EMO WEBRING 💔</div>
        <div className="text-xs text-gray-400 font-emo">Navigate the Scene</div>
      </div>
      <div className="flex justify-between items-center text-xs">
        <button className="text-neon-green hover:text-pink-400 font-emo">← PREV</button>
        <div className="text-center">
          <div className="text-pink-400 font-emo">{sites[Math.floor(Math.random() * sites.length)]}</div>
        </div>
        <button className="text-neon-green hover:text-pink-400 font-emo">NEXT →</button>
      </div>
      <div className="text-center mt-2">
        <button className="text-xs text-gray-400 hover:text-pink-400 font-emo">RANDOM SITE</button>
      </div>
    </div>
  )
}

export function GuestbookEntry({
  name,
  message,
  date,
  mood
}: {
  name: string
  message: string
  date: string
  mood: string
}) {
  return (
    <div className="bg-emo-dark/50 border border-pink-500/30 p-3 rounded mb-2">
      <div className="flex justify-between items-start mb-2">
        <div className="text-pink-400 font-bold text-sm font-emo">{name}</div>
        <div className="text-xs text-gray-500 font-emo">{date}</div>
      </div>
      <div className="text-gray-300 text-sm font-emo mb-2">{message}</div>
      <div className="text-xs text-purple-400 font-emo">Mood: {mood}</div>
    </div>
  )
}

export function OnlineNowWidget() {
  const [onlineCount, setOnlineCount] = useState(0)

  useEffect(() => {
    const baseCount = 69
    const randomAdd = Math.floor(Math.random() * 20)
    setOnlineCount(baseCount + randomAdd)
  }, [])

  return (
    <div className="bg-green-900/20 border border-green-500/30 p-2 rounded">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-xs font-emo">
          {onlineCount} emo kids online now 🖤
        </span>
      </div>
    </div>
  )
}
