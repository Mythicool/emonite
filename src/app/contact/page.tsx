'use client'

import { useState } from 'react'
import { Mail, MapPin, Calendar, Users, Heart, Send } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    eventType: 'general',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! We\'ll get back to you soon. 🖤')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-emo-black w-full">
      {/* Hero Section */}
      <section className="bg-gradient-emo section-spacing w-full">
        <div className="centered-container container-spacing">
          <div className="section-center max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-scene mb-8">
              📧 Get In <span className="text-emo-pink">Touch</span> 🖤
            </h1>
            <p className="text-xl leading-8 text-gray-300 font-emo max-w-3xl mx-auto">
              Ready to bring emo nights to your city? 🌙✨ Have questions? Want to share your feelings? 💔🎵
              We're here for all of it! No judgment, just emo solidarity 🖤💀⚡️
            </p>
          </div>
        </div>
      </section>

      <div className="section-spacing w-full">
        <div className="centered-container container-spacing">
          <div className="grid gap-16 lg:grid-cols-2 w-full max-w-6xl">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 font-scene">
                💔 Send Us Your Feels 🖤
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2 font-scene uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-emo-dark border border-emo-purple/20 px-4 py-3 text-white placeholder-gray-400 focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo"
                      placeholder="🖤 Your scene name 🖤"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-scene uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-emo-dark border border-emo-purple/20 px-4 py-3 text-white placeholder-gray-400 focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo"
                      placeholder="📧 your.email@example.com 💔"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-white mb-2 font-scene uppercase tracking-wider">
                    What's This About?
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-emo-dark border border-emo-purple/20 px-4 py-3 text-white focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Event Booking</option>
                    <option value="venue">Venue Partnership</option>
                    <option value="press">Press & Media</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2 font-scene uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-emo-dark border border-emo-purple/20 px-4 py-3 text-white placeholder-gray-400 focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo"
                    placeholder="🌙 What's on your mind? ✨"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 font-scene uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-emo-dark border border-emo-purple/20 px-4 py-3 text-white placeholder-gray-400 focus:border-emo-pink focus:outline-none focus:ring-1 focus:ring-emo-pink font-emo resize-none"
                    placeholder="💔 Pour your heart out... we're here for it 🖤"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  🖤 Send Message 💔
                </Button>
              </form>
            </div>

            {/* Contact Info & Booking Details */}
            <div className="space-y-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 font-scene">
                  Other Ways to Connect
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-emo-pink mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold font-scene mb-1">Email</h3>
                      <p className="text-gray-400 font-emo">hello@emonite.com</p>
                      <p className="text-gray-500 text-sm font-emo">We usually respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-emo-purple mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold font-scene mb-1">Based In</h3>
                      <p className="text-gray-400 font-emo">Chicago, IL</p>
                      <p className="text-gray-500 text-sm font-emo">But we travel for the right vibes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Information */}
              <div className="bg-emo-dark rounded-lg p-8 border border-emo-purple/20">
                <h3 className="text-2xl font-bold text-white mb-6 font-scene flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-neon-green" />
                  Event Booking
                </h3>
                
                <div className="space-y-4 text-gray-300 font-emo">
                  <p>
                    <strong className="text-emo-pink">Venues:</strong> Looking to host an emo night? 
                    We bring the playlist, the vibes, and the crowd. You bring the space.
                  </p>
                  
                  <p>
                    <strong className="text-emo-pink">Event Organizers:</strong> Want to collaborate 
                    on the ultimate millennial nostalgia experience? Let's make some magic happen.
                  </p>
                  
                  <p>
                    <strong className="text-emo-pink">Cities We're Expanding To:</strong> Austin, 
                    Portland, Denver, Nashville, and anywhere else emo kids gather.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-emo-black/50 rounded-lg">
                  <h4 className="text-white font-bold font-scene mb-2">What We Provide:</h4>
                  <ul className="text-sm text-gray-400 font-emo space-y-1">
                    <li>• Curated emo/scene/pop-punk playlists</li>
                    <li>• Professional DJ services</li>
                    <li>• Event promotion and marketing</li>
                    <li>• Emo-themed decorations and props</li>
                    <li>• Photo booth with MySpace-style setups</li>
                  </ul>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-scene flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-emo-pink" fill="currentColor" />
                  Quick Questions
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold font-emo mb-1">Do I need to dress emo?</h4>
                    <p className="text-gray-400 text-sm font-emo">
                      Absolutely not required, but highly encouraged! Come as you are, 
                      or come as your 2006 self – we love both.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold font-emo mb-1">What if I cry during Dashboard Confessional?</h4>
                    <p className="text-gray-400 text-sm font-emo">
                      That's the point! We provide tissues and emotional support. 
                      Crying is not only allowed, it's encouraged.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold font-emo mb-1">Can you play my favorite deep cut?</h4>
                    <p className="text-gray-400 text-sm font-emo">
                      Send us your requests! We love discovering hidden gems and 
                      B-sides that defined someone's teenage years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
