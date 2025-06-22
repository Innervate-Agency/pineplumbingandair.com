'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, Calendar, ArrowRight, Star, Shield, 
  Flame, Snowflake, Droplets, Wind, Clock, Award
} from 'lucide-react'
import { SERVICES, PRICING, SITE_CONFIG } from '@/lib/constants'
import ServiceModal from '@/components/ui/ServiceModal'

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMore = (serviceName: string) => {
    // Convert service name to service key format to match SERVICE_DETAILS keys
    let serviceKey = serviceName.toLowerCase().replace(/\s+/g, '-')
    
    // Handle special cases to match the SERVICE_DETAILS keys exactly
    if (serviceName === 'Kitchen and Bathroom') {
      serviceKey = 'kitchen-bathroom'
    } else if (serviceName === 'AC Tune up') {
      serviceKey = 'ac-tune-up'
    } else if (serviceName === 'AC Repair') {
      serviceKey = 'ac-repair'
    } else if (serviceName === 'AC Installation') {
      serviceKey = 'ac-installation'
    } else if (serviceName === 'Mini-Splits') {
      serviceKey = 'mini-splits'
    }
    
    setSelectedService(serviceKey)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  const serviceIcons = {
    'Plumbing Services': Droplets,
    'Heating Services': Flame,
    'Cooling Services': Snowflake,
    'Indoor Air Quality': Wind
  }

  const serviceColors = {
    'Plumbing Services': 'from-primary-600 to-primary-700',
    'Heating Services': 'from-secondary-500 to-secondary-600',
    'Cooling Services': 'from-primary-500 to-primary-600',
    'Indoor Air Quality': 'from-sage-500 to-sage-600'
  }

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Home Comfort Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to emergency repairs, we're your trusted partner 
              for all HVAC and plumbing needs.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {Object.entries(SERVICES).map(([key, category], index) => {
              const IconComponent = serviceIcons[category.title as keyof typeof serviceIcons]
              const colorClass = serviceColors[category.title as keyof typeof serviceColors]
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          <span className="font-medium">{service}</span>
                        </div>
                        <button
                          onClick={() => handleLearnMore(service)}
                          className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                        >
                          Learn More
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTAs */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* View All Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                Explore All Services
              </h3>
              <p className="text-white/90 mb-6">
                From installations to emergency repairs, discover our complete range of solutions.
              </p>
              <Link 
                href="/services"
                className="inline-flex items-center bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Diagnostic Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Repair?
              </h3>
              <p className="text-gray-600 mb-6">
                Professional diagnostic service to identify and fix the issue.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-600">${PRICING.diagnostic.price}</div>
                <div className="text-sm text-gray-500">Diagnostic Fee</div>
              </div>
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
                Schedule Diagnostic
              </button>
            </motion.div>

            {/* Comfort Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl p-8 text-white text-center hover:from-secondary-700 hover:to-secondary-800 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-400 mr-2" />
                <h3 className="text-2xl font-bold">Comfort Club</h3>
              </div>
              <p className="text-white/90 mb-6">
                Priority service, guaranteed savings, and peace of mind.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-bold">${PRICING.membership.price}</div>
                <div className="text-sm text-white/80">per year</div>
              </div>
              <button className="w-full bg-white text-secondary-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Join Today
              </button>
            </motion.div>

          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Why Choose Pine Plumbing & Air?
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Emergency</h4>
                <p className="text-gray-600 text-sm">Available when you need us most</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                <p className="text-gray-600 text-sm">Fully bonded and covered</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Family Owned</h4>
                <p className="text-gray-600 text-sm">Three generations of service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h4>
                <p className="text-gray-600 text-sm">We make it right</p>
              </div>
            </div>
          </motion.div>

          {/* Emergency CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-emergency-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Emergency? We're Here 24/7
            </h3>
            <p className="text-xl text-white/90 mb-8">
              No extra charges for nights, weekends, or holidays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${SITE_CONFIG.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-emergency-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now: {SITE_CONFIG.phone}
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Service
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal 
        serviceKey={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}