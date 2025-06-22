'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { 
  Flame, Snowflake, Droplets, Wind,
  Clock, Star, Shield, Phone, Calendar,
  Thermometer, Settings, Award, Users, LucideIcon
} from 'lucide-react'
import { SERVICES, PRICING, SITE_CONFIG } from '@/lib/constants'

interface ServiceCategory {
  title: string
  description: string
  services: string[]
  icon: LucideIcon
  color: string
  bgColor: string
  iconColor: string
}

type ServiceCategoryKey = 'plumbing' | 'heating' | 'cooling' | 'airQuality'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryKey>('plumbing')
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const serviceCategories: Record<ServiceCategoryKey, ServiceCategory> = {
    plumbing: {
      ...SERVICES.plumbing,
      icon: Droplets,
      color: 'from-primary-600 to-primary-700',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
    },
    heating: {
      ...SERVICES.heating,
      icon: Flame,
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-600'
    },
    cooling: {
      ...SERVICES.cooling,
      icon: Snowflake,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
    },
    airQuality: {
      ...SERVICES.airQuality,
      icon: Wind,
      color: 'from-sage-500 to-sage-600',
      bgColor: 'bg-sage-50',
      iconColor: 'text-sage-600'
    }
  }

  const whyChooseUs = [
    { icon: Clock, title: '24/7 Emergency Service', description: 'No extra charges for nights, weekends, or holidays' },
    { icon: Shield, title: 'Licensed & Insured', description: 'Fully bonded with comprehensive liability coverage' },
    { icon: Award, title: 'Satisfaction Guaranteed', description: '100% satisfaction or we make it right, no questions asked' },
    { icon: Users, title: 'Family Owned & Operated', description: 'Three generations of trusted service in our community' }
  ]

  const currentCategory = serviceCategories[activeCategory]

  const handleCategoryClick = (key: string) => {
    if (key in serviceCategories) {
      setActiveCategory(key as ServiceCategoryKey)
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-primary-900 to-earth-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Complete Home
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Comfort Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
              From emergency repairs to complete system installations, we&apos;re your trusted partner for all things HVAC and plumbing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emergency-500 to-emergency-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-emergency-500/25 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call for Emergency Service
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2 inline" />
                Schedule Service
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-12 bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {(Object.entries(serviceCategories) as [ServiceCategoryKey, ServiceCategory][]).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={key}
                  onClick={() => handleCategoryClick(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.title}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Active Service Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${currentCategory.bgColor} rounded-3xl p-8 md:p-12`}
          >
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 ${currentCategory.bgColor} rounded-2xl mb-6 shadow-lg`}>
                <currentCategory.icon className={`w-10 h-10 ${currentCategory.iconColor}`} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentCategory.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.services.map((service, index) => (
                <motion.div
                  key={`${activeCategory}-${service}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredService(service)}
                  onHoverEnd={() => setHoveredService(null)}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${currentCategory.color} rounded-xl flex items-center justify-center mr-4`}>
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{service}</h3>
                      <p className="text-gray-600 text-sm">
                        Professional service with guaranteed satisfaction and transparent pricing.
                      </p>
                      <motion.div
                        className="mt-3"
                        animate={{ opacity: hoveredService === service ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm font-medium text-primary-600 cursor-pointer hover:text-primary-800">
                          Learn more →
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent, Fair Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No surprises, no hidden fees - just honest pricing for quality work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Diagnostic Pricing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Thermometer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {PRICING.diagnostic.title}
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  ${PRICING.diagnostic.price}
                </div>
                <p className="text-gray-600 mb-6">
                  {PRICING.diagnostic.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-6 py-3 rounded-xl font-semibold w-full"
                >
                  Schedule Diagnostic
                </motion.button>
              </div>
            </motion.div>

            {/* Pine Comfort Club */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-secondary-600 to-primary-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {PRICING.membership.title}
                </h3>
                <div className="text-4xl font-bold mb-4">
                  ${PRICING.membership.price}
                  <span className="text-lg font-normal">/year</span>
                </div>
                <p className="text-white/90 mb-6">
                  {PRICING.membership.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-secondary-600 px-6 py-3 rounded-xl font-semibold w-full hover:bg-gray-50 transition-colors"
                >
                  Join Comfort Club
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pine Plumbing & Air?
            </h2>
            <p className="text-xl text-gray-600">
              Three generations of expertise, modern technology, and old-fashioned values.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-emergency-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Need Service Right Now?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Emergency repairs available 24/7. No extra charges for nights, weekends, or holidays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${SITE_CONFIG.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-emergency-600 px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Now: {SITE_CONFIG.phone}
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Schedule Service
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}