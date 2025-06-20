'use client'

import Link from 'next/link'
import { 
  Phone, Mail, MapPin, Clock, Star, Heart,
  Facebook, Instagram, Youtube,
  Flame, Snowflake, Droplets, Wind,
  Shield, Award, Users, CheckCircle
} from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Project Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Pine Comfort Club', href: '/services#membership' },
  ]

  const serviceLinks = [
    { name: 'Heating Services', href: '/services#heating', icon: Flame },
    { name: 'Cooling Services', href: '/services#cooling', icon: Snowflake },
    { name: 'Plumbing Services', href: '/services#plumbing', icon: Droplets },
    { name: 'Air Quality', href: '/services#air-quality', icon: Wind },
  ]

  const trustFactors = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Award, text: '24/7 Emergency Service' },
    { icon: Users, text: 'Family Owned Since 1985' },
    { icon: CheckCircle, text: '100% Satisfaction Guaranteed' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Emergency CTA Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Emergency? We're Here 24/7</h3>
              <p className="text-white/90 text-lg">
                No extra charges for nights, weekends, or holidays. Your family's comfort can't wait.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now: {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-3" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Pine Plumbing & Air</h3>
                <p className="text-gray-300 mb-4">
                  Three generations of trusted HVAC and plumbing services. 
                  Your family's comfort is our family's mission.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-500 mr-3" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-300 hover:text-white transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-500 mr-3" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <div className="text-gray-300">
                    <div>{SITE_CONFIG.address.street}</div>
                    <div>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-500 mr-3" />
                  <div className="text-gray-300">
                    <div>{SITE_CONFIG.hours.regular}</div>
                    <div className="text-sm text-orange-400">{SITE_CONFIG.hours.emergency}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <li key={service.name}>
                      <Link 
                        href={service.href} 
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                      >
                        <IconComponent className="w-4 h-4 text-orange-500 mr-3 group-hover:scale-110 transition-transform" />
                        {service.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              {/* Pine Comfort Club CTA */}
              <div className="mt-8 p-4 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl border border-purple-500/20">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <h5 className="font-semibold text-white">Pine Comfort Club</h5>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Join our exclusive membership for priority service and exclusive savings.
                </p>
                <Link 
                  href="/services#membership"
                  className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Trust & Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Why Choose Pine?</h4>
              <div className="space-y-4">
                {trustFactors.map((factor, index) => {
                  const IconComponent = factor.icon
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{factor.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* Awards/Certifications */}
              <div className="mt-8">
                <h5 className="font-semibold text-white mb-4">Certifications</h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <div className="bg-gray-800 p-2 rounded text-center">EPA Certified</div>
                  <div className="bg-gray-800 p-2 rounded text-center">NATE Certified</div>
                  <div className="bg-gray-800 p-2 rounded text-center">BBB A+ Rating</div>
                  <div className="bg-gray-800 p-2 rounded text-center">Licensed & Bonded</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="w-4 h-4 text-red-500 mr-2" />
              <p className="text-gray-400 text-sm">
                © {currentYear} Pine Plumbing & Air. Made with care for our community.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>Family Owned Since 1985</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 