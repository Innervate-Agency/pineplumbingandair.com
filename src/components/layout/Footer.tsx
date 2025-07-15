'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, Mail, MapPin, Clock, Star, Heart, Send, ChevronRight,
  Facebook, Instagram, Youtube, ArrowRight,
  Flame, Snowflake, Droplets, Wind,
  Shield, CheckCircle, Zap, Trophy
} from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setEmail('')
    setIsSubmitting(false)
  }

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Pine Comfort Club', href: '/services#membership' },
  ]

  const serviceLinks = [
    { name: 'Heating Services', href: '/services#heating', icon: Flame, color: 'text-secondary-400' },
    { name: 'Cooling Services', href: '/services#cooling', icon: Snowflake, color: 'text-primary-400' },
    { name: 'Plumbing Services', href: '/services#plumbing', icon: Droplets, color: 'text-primary-400' },
    { name: 'Air Quality', href: '/services#air-quality', icon: Wind, color: 'text-sage-400' },
  ]

  const trustFactors = [
    { icon: Shield, text: 'Licensed & Insured', color: 'text-primary-400' },
    { icon: Zap, text: '24/7 Emergency Service', color: 'text-emergency-400' },
    { icon: Trophy, text: `${SITE_CONFIG.yearsExperience}`, color: 'text-secondary-400' },
    { icon: CheckCircle, text: '100% Satisfaction Guaranteed', color: 'text-sage-400' },
  ]

  const certifications = [
    'EPA Certified',
    'HVAC: Lic. #9671762',
    'Plumbing: Lic. #4371148',
    'Licensed & Bonded'
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Emergency CTA Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-earth-900 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-emergency-600/20 backdrop-blur-sm border border-emergency-400/30 rounded-full text-emergency-300 font-semibold mb-6">
              <Zap className="w-5 h-5 mr-2" />
              Emergency Service Available Now
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Need Help Right Now?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              24/7 emergency repairs available. No extra charges for nights, weekends, or holidays for Pine Comfort Club Members. 
              Your Boise Metro family's comfort can't wait.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.a
              href={`tel:${SITE_CONFIG.phone}`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white text-slate-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emergency-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <Phone className="w-12 h-12 text-emergency-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Call Now</h3>
                <p className="text-gray-600 mb-4">Speak directly with our emergency dispatch</p>
                <div className="text-3xl font-bold text-emergency-600 flex items-center">
                  {SITE_CONFIG.phoneDisplay}
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-primary-600/10 backdrop-blur-sm border border-primary-400/30 p-8 rounded-2xl hover:bg-primary-600/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <Mail className="w-12 h-12 text-primary-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">Get Quote</h3>
                <p className="text-gray-300 mb-4">Quick response for non-emergency service</p>
                <Link 
                  href="/contact"
                  className="text-xl font-bold text-primary-400 flex items-center group-hover:text-primary-300 transition-colors"
                >
                  Schedule Service
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Pine Comfort Club CTA - Full Width at Top */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-xl border border-primary-400/30 backdrop-blur-sm p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-5 h-5 text-accent-400 mr-2" />
                <h4 className="text-xl font-bold text-white">Pine Comfort Club</h4>
              </div>
              <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
                Join our exclusive membership for priority service, guaranteed savings, and peace of mind protection.
              </p>
              <Link 
                href="/services#membership"
                className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl"
              >
                Join for $99/year
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Pine Plumbing & Air</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With {SITE_CONFIG.yearsExperience} serving Boise Metro families, 
                  we're committed to delivering honest, reliable HVAC and plumbing services 
                  that keep your home comfortable year-round.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Stay in the Loop</h4>
                <p className="text-gray-400 mb-4">Get seasonal maintenance tips and exclusive member offers.</p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emergency-400 mr-3" />
                  <a 
                    href={`tel:${SITE_CONFIG.phone}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-400 mr-3" />
                  <a 
                    href={`mailto:${SITE_CONFIG.email}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-secondary-400 mr-3" />
                  <div className="text-gray-300">
                    <div>{SITE_CONFIG.address.street}</div>
                    <div>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-sage-400 mr-3" />
                  <div className="text-gray-300">
                    <div>{SITE_CONFIG.hours.regular}</div>
                    <div className="text-sm text-emergency-400 font-medium">{SITE_CONFIG.hours.emergency}</div>
                  </div>
                </div>
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
                      className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
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
                        className="text-gray-300 hover:text-white transition-colors flex items-center group"
                      >
                        <IconComponent className={`w-4 h-4 ${service.color} mr-3 group-hover:scale-110 transition-transform`} />
                        <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>

          {/* Trust Factors & Certifications */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="md:col-span-1 lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Why Choose Pine?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustFactors.map((factor, index) => {
                  const IconComponent = factor.icon
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className={`w-4 h-4 ${factor.color}`} />
                      </div>
                      <span className="text-gray-300 text-sm">{factor.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-2">
              <h5 className="text-lg font-semibold text-white mb-6">Certifications</h5>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg text-center transition-colors cursor-pointer"
                  >
                    <span className="text-xs text-gray-300 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Social & Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                  { icon: Youtube, href: '#', color: 'hover:text-red-400' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="flex flex-col items-center text-gray-400 text-sm">
                <Heart className="w-4 h-4 text-secondary-500 mr-2" />
                <span>© {currentYear} Pine Plumbing & Air. Made with care for Boise Metro.</span>
                <span className="mt-2 text-xs text-accent-400">Proudly supporting Idaho Food Bank & Metro Meals on Wheels. Giving back to our community with every service.</span>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 