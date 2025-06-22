import { Quote, ExternalLink, Users, Heart, TrendingUp } from 'lucide-react'
import { Partner, PressFeature } from '@/data/partners'
import { socialStats } from '@/data/partners'

interface SocialProofProps {
  partners: Partner[]
  pressFeatures: PressFeature[]
}

export default function SocialProof({ partners, pressFeatures }: SocialProofProps) {
  return (
    <div className="space-y-16">
      {/* Press Features */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center font-scene">
          Featured In
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pressFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-emo-dark/50 rounded-lg p-6 border border-emo-purple/20 hover:border-emo-pink/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <Quote className="h-6 w-6 text-emo-pink flex-shrink-0 mt-1" />
                <div>
                  <div className="text-emo-purple font-bold text-sm font-scene mb-2">
                    {feature.publication}
                  </div>
                  <p className="text-gray-300 text-sm font-emo italic leading-relaxed mb-3">
                    "{feature.quote}"
                  </p>
                  <div className="text-xs text-gray-500 font-emo">
                    {feature.author && `— ${feature.author}, `}
                    {feature.date.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center font-scene">
          Trusted Partners
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-emo-dark/30 rounded-lg p-6 text-center border border-emo-purple/20 hover:border-emo-pink/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emo-purple to-emo-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                {partner.name.charAt(0)}
              </div>
              <h4 className="text-white font-bold font-scene text-sm mb-2 group-hover:text-emo-pink transition-colors">
                {partner.name}
              </h4>
              <div className="text-xs text-emo-purple uppercase tracking-wider font-scene mb-2">
                {partner.type}
              </div>
              <p className="text-gray-400 text-xs font-emo leading-relaxed mb-3">
                {partner.description}
              </p>
              <div className="text-xs text-gray-500 font-emo">
                Since {partner.partnership_since.getFullYear()}
              </div>
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emo-pink hover:text-emo-purple transition-colors text-xs mt-2"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Visit
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Stats */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center font-scene">
          Join Our Community
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg p-6 text-center text-white">
            <div className="text-3xl mb-2">📸</div>
            <div className="text-2xl font-bold font-scene">
              {socialStats.instagram.followers.toLocaleString()}
            </div>
            <div className="text-sm opacity-90 font-emo">Instagram Followers</div>
            <div className="text-xs opacity-75 font-emo mt-1">
              {socialStats.instagram.engagement} engagement
            </div>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-800 rounded-lg p-6 text-center text-white">
            <div className="text-3xl mb-2">🎵</div>
            <div className="text-2xl font-bold font-scene">
              {socialStats.tiktok.followers.toLocaleString()}
            </div>
            <div className="text-sm opacity-90 font-emo">TikTok Followers</div>
            <div className="text-xs opacity-75 font-emo mt-1">
              {socialStats.tiktok.views} total views
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-center text-white">
            <div className="text-3xl mb-2">🐦</div>
            <div className="text-2xl font-bold font-scene">
              {socialStats.twitter.followers.toLocaleString()}
            </div>
            <div className="text-sm opacity-90 font-emo">Twitter Followers</div>
            <div className="text-xs opacity-75 font-emo mt-1">
              {socialStats.twitter.mentions} mentions
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-center text-white">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold font-scene">
              {socialStats.facebook.followers.toLocaleString()}
            </div>
            <div className="text-sm opacity-90 font-emo">Facebook Followers</div>
            <div className="text-xs opacity-75 font-emo mt-1">
              {socialStats.facebook.checkins} event check-ins
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-emo-dark/30 rounded-lg p-8 text-center">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Users className="h-8 w-8 text-emo-pink mx-auto mb-3" />
            <div className="text-2xl font-bold text-white font-scene">50,000+</div>
            <div className="text-sm text-gray-400 font-emo">Emo Kids Served</div>
          </div>
          <div>
            <Heart className="h-8 w-8 text-emo-purple mx-auto mb-3" fill="currentColor" />
            <div className="text-2xl font-bold text-white font-scene">98%</div>
            <div className="text-sm text-gray-400 font-emo">Would Recommend</div>
          </div>
          <div>
            <TrendingUp className="h-8 w-8 text-neon-green mx-auto mb-3" />
            <div className="text-2xl font-bold text-white font-scene">156</div>
            <div className="text-sm text-gray-400 font-emo">Events Hosted</div>
          </div>
        </div>
      </div>
    </div>
  )
}
