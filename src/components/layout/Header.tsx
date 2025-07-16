'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, Menu, X, ChevronDown, LogIn, 
  Flame, Snowflake, Droplets, Wind, Star,
  Settings, Sun, Moon
} from 'lucide-react'
import { SITE_CONFIG, SERVICES } from '@/lib/constants'
import { useTheme } from '@/lib/theme'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const servicesRef = useRef<HTMLDivElement>(null)
  const loginRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setIsLoginOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const serviceCategories = [
    {
      ...SERVICES.heating,
      icon: Flame,
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
      href: '/services#heating'
    },
    {
      ...SERVICES.cooling,
      icon: Snowflake,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      href: '/services#cooling'
    },
    {
      ...SERVICES.plumbing,
      icon: Droplets,
      color: 'text-primary-700',
      bgColor: 'bg-primary-50',
      href: '/services#plumbing'
    },
    {
      ...SERVICES.airQuality,
      icon: Wind,
      color: 'text-sage-600',
      bgColor: 'bg-sage-50',
      href: '/services#air-quality'
    }
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Mica Treatment - Clean and functional */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-white/40 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/40 via-white/50 to-secondary-50/40"></div>
        
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/ppa-logo-pine-trees-moon-and-stars.svg"
                  alt="Pine Plumbing & Air Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-display font-bold tracking-tight bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-600 bg-clip-text text-transparent uppercase leading-tight">
                  PINE PLUMBING & AIR
                </span>
                <span className="text-xs text-primary-600/80 font-medium font-mono tracking-wide uppercase">
                  BOISE METRO • {SITE_CONFIG.yearsExperience}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* Regular Nav Items with slick hover effects */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-display font-semibold tracking-wide transition-all duration-300 rounded-lg group uppercase overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Slick underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></div>
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  {/* Subtle shadow */}
                  <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                </Link>
              ))}

              {/* Services Mega Menu */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="relative text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-display font-semibold tracking-wide transition-all duration-300 rounded-lg flex items-center space-x-1 group uppercase overflow-hidden"
                >
                  <span className="relative z-10">Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  {/* Slick underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></div>
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  {/* Subtle shadow */}
                  <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 p-6 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => {
                        const IconComponent = category.icon
                        return (
                          <Link
                            key={category.title}
                            href={category.href}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className={`flex-shrink-0 w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform`}>
                              <IconComponent className={`w-5 h-5 ${category.color}`} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                              <p className="text-sm text-gray-600">{category.description}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="border-t border-gray-100 mt-4 pt-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/services"
                          className="flex items-center justify-center px-3 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          All Services
                        </Link>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="flex items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Emergency
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/60 transition-all duration-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700" />
              )}
            </button>
            
            {/* Pine Comfort Club Login */}
            <div className="relative" ref={loginRef}>
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center space-x-2 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/60"
              >
                <Star className="h-4 w-4 text-accent-500" />
                <span>Club Login</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLoginOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLoginOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 p-6 z-50">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pine Comfort Club</h3>
                    <p className="text-sm text-gray-600">Access your member benefits</p>
                  </div>

                  <form className="space-y-4">
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                      placeholder="Password"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:from-secondary-700 hover:to-primary-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </button>
                  </form>

                  <div className="border-t border-gray-100 mt-4 pt-4 text-center">
                    <p className="text-sm text-gray-600 mb-2">Not a member yet?</p>
                    <Link
                      href="/services#membership"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      Join Pine Comfort Club →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Emergency Call Button - Compact */}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-gradient-to-r from-emergency-600 to-emergency-700 text-white px-3 py-2 rounded-lg text-sm font-bold hover:from-emergency-700 hover:to-emergency-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-white/60 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/30">
            <div className="px-2 pt-4 pb-6 space-y-3 bg-white/80 backdrop-blur-xl">
              {/* Regular Nav Items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Section */}
              <div className="px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceCategories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <Link
                        key={category.title}
                        href={category.href}
                        className="flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center mb-2`}>
                          <IconComponent className={`w-4 h-4 ${category.color}`} />
                        </div>
                        <span className="text-xs font-medium text-gray-700 text-center">{category.title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="space-y-3 px-3 pt-4 border-t border-gray-100">
                <Link
                  href="/services#membership"
                  className="flex items-center justify-center w-full bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-3 px-4 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Join Comfort Club
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 rounded-lg font-medium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      </div>
    </header>
  )
}
