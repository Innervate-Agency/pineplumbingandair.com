'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Clock, Percent, Star, ArrowRight } from 'lucide-react'
import { SERVICES, PRICING } from '@/lib/constants'
import ServiceModal from '@/components/ui/ServiceModal'

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMore = (serviceName: string) => {
    console.log('handleLearnMore called with:', serviceName)
    
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
    
    console.log('Converted serviceKey:', serviceKey)
    console.log('Setting modal open to true')
    
    setSelectedService(serviceKey)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pine Comfort Club Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-warm-100 rounded-full text-warm-800 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Introducing Pine Comfort Club
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Peace of Mind, All Year Long
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exclusive membership program and never worry about home comfort again. 
              Priority service, guaranteed savings, and the care your family deserves.
            </p>
          </motion.div>

          {/* Membership Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-8 lg:mb-0">
                  <h3 className="text-3xl font-bold mb-2">Pine Comfort Club</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">${PRICING.membership.price}</span>
                    <span className="text-xl ml-2 opacity-90">/year</span>
                  </div>
                  <p className="text-lg opacity-90">
                    Everything you need for worry-free home comfort
                  </p>
                </div>
                
                <div className="lg:ml-8">
                  <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors w-full lg:w-auto">
                    Join Today
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {PRICING.membership.benefits.map((benefit, index) => {
                  // Select appropriate icon for each benefit
                  const getIcon = (benefitText: string) => {
                    if (benefitText.includes('Priority')) return <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    if (benefitText.includes('10% OFF')) return <Percent className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    if (benefitText.includes('Inspection')) return <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    return <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  }
                  
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      {getIcon(benefit)}
                      <span>{benefit}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Service Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {Object.entries(SERVICES).map(([key, category], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center justify-between group">
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {service}
                      </div>
                      <button
                        onClick={() => handleLearnMore(service)}
                        className="text-primary-600 hover:text-primary-700 transition-all duration-200 text-sm font-medium flex items-center opacity-70 hover:opacity-100"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Diagnostic CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-warm-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need a Repair? We&apos;ve Got You Covered
            </h3>
            <p className="text-gray-600 mb-6">
              Professional diagnostic service to identify the issue and get you back to comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-600">${PRICING.diagnostic.price}</div>
                <div className="text-sm text-gray-600">Diagnostic Fee</div>
              </div>
              <div className="text-gray-400 hidden sm:block">•</div>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Schedule Diagnostic
              </button>
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