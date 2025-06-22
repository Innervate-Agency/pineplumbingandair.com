'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  Phone, Menu, X, ChevronDown, LogIn, 
  Flame, Snowflake, Droplets, Wind, Star,
  Settings
} from 'lucide-react'
import { SITE_CONFIG, SERVICES } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
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
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              Pine Plumbing & Air
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Regular Nav Items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Mega Menu */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => {
                        const IconComponent = category.icon
                        return (
                          <Link
                            key={category.title}
                            href={category.href}
                            className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className={`flex-shrink-0 w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                              <IconComponent className={`w-6 h-6 ${category.color}`} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                              <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {category.services.slice(0, 3).map((service, index) => (
                                  <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {service}
                                  </span>
                                ))}
                                {category.services.length > 3 && (
                                  <span className="text-xs text-primary-600 font-medium">
                                    +{category.services.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="border-t border-gray-100 mt-6 pt-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/services"
                          className="flex items-center justify-center px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          All Services
                        </Link>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
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
          <div className="hidden lg:flex items-center space-x-4">
            {/* Pine Comfort Club Login */}
            <div className="relative" ref={loginRef}>
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Star className="h-4 w-4 text-accent-500" />
                <span>Club Login</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLoginOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLoginOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pine Comfort Club</h3>
                    <p className="text-sm text-gray-600">Access your member benefits and service history</p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                        placeholder="member@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                        placeholder="••••••••"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:from-secondary-700 hover:to-primary-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </button>
                  </form>

                  <div className="border-t border-gray-100 mt-6 pt-4 text-center">
                    <p className="text-sm text-gray-600 mb-3">Not a member yet?</p>
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

            {/* Emergency Call Button */}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">Emergency Service</span>
              <span className="xl:hidden">Emergency</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-4 pb-6 space-y-3 bg-white">
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
                        <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center mb-2`}>
                          <IconComponent className={`w-5 h-5 ${category.color}`} />
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
                  Emergency Service
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
