'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Building2, Users, TrendingUp, Calendar, Award, Handshake, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HomepageRendererProps { homepageContent: DrupalHomepage | null | undefined }

const commitmentItems = [
  { icon: Building2, title: 'Business Advocacy', description: 'We champion pro-business policies at local, state, and federal levels to create a thriving economic environment.' },
  { icon: Users, title: 'Networking Events', description: 'Connect with fellow business leaders through our 75+ annual events including mixers, luncheons, and galas.' },
  { icon: TrendingUp, title: 'Economic Development', description: 'Driving initiatives that attract investment, create jobs, and strengthen our local economy.' },
  { icon: Calendar, title: 'Professional Development', description: 'Workshops, seminars, and mentoring programs to help you and your team grow professionally.' },
  { icon: Award, title: 'Member Recognition', description: 'Celebrating excellence through our annual awards program highlighting outstanding member achievements.' },
  { icon: Handshake, title: 'Community Partnerships', description: 'Building bridges between businesses, government, and nonprofits for a stronger community.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80&fit=crop', alt: 'Networking event' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&fit=crop', alt: 'Business conference' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&fit=crop', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&fit=crop', alt: 'Community gathering' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">How We Serve Our Members</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The Lakewood Chamber provides comprehensive support to help your business thrive in our community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentItems.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-primary-700" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Chamber in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See the impact of our programs and events on the Lakewood business community.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"><Building2 className="w-5 h-5 text-accent-400" /></div>
                <span className="text-lg font-bold text-white font-display">Lakewood Chamber</span>
              </div>
              <p className="text-primary-300 text-sm mb-4 leading-relaxed">Connecting and empowering local businesses since 1928.</p>
              <div className="space-y-2 text-sm text-primary-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /><span>100 Commerce Street, Suite 300<br />Lakewood, CA 90712</span></div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /><span>(555) 901-2345</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Directory</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/directory" className="hover:text-white transition-colors">All Members</Link></li>
                <li><a href="/directory" className="hover:text-white transition-colors">Retail</a></li>
                <li><a href="/directory" className="hover:text-white transition-colors">Professional Services</a></li>
                <li><a href="/directory" className="hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="/directory" className="hover:text-white transition-colors">Healthcare</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Events</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
                <li><a href="/events" className="hover:text-white transition-colors">Networking Mixers</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Business Luncheons</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Annual Gala</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Workshops</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/resources" className="hover:text-white transition-colors">All Resources</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">Board of Directors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Membership</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Join the Chamber</Link></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Member Benefits</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Sponsorships</a></li>
              </ul>
              <div className="mt-4 p-3 bg-accent-500/20 border border-accent-500/30 rounded-lg">
                <p className="text-accent-300 text-xs font-bold">Join Today</p>
                <p className="text-accent-200 text-xs">(555) 901-2345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div><h4 className="text-white font-bold mb-1">Stay Connected</h4><p className="text-primary-300 text-sm">Get business news, event invitations, and member spotlights delivered to your inbox.</p></div>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Lakewood Chamber of Commerce. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/about" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64" />
      <button type="submit" className="px-6 py-2.5 bg-primary-600 text-white rounded-r-lg hover:bg-primary-500 transition-colors font-bold text-sm whitespace-nowrap">Subscribe</button>
    </form>
  )
}
