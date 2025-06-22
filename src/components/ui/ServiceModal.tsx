'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, Phone, Calendar, CheckCircle, AlertTriangle,
  Star, Shield, Clock, Award
} from 'lucide-react'
import { SERVICE_DETAILS, SITE_CONFIG } from '@/lib/constants'

interface ServiceModalProps {
  serviceKey: string | null
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ serviceKey, isOpen, onClose }: ServiceModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted || !serviceKey || !isOpen) return null

  console.log('ServiceModal - serviceKey:', serviceKey)
  console.log('ServiceModal - isOpen:', isOpen)
  console.log('ServiceModal - SERVICE_DETAILS keys:', Object.keys(SERVICE_DETAILS))

  const service = SERVICE_DETAILS[serviceKey as keyof typeof SERVICE_DETAILS]
  console.log('ServiceModal - found service:', service ? 'YES' : 'NO')
  
  if (!service) {
    console.log('ServiceModal - service not found for key:', serviceKey)
    return null
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'plumbing':
        return 'from-primary-600 to-primary-800'
      case 'heating':
        return 'from-accent-500 to-primary-600'
      case 'cooling':
        return 'from-primary-500 to-primary-600'
      case 'airQuality':
        return 'from-primary-500 to-primary-600'
      default:
        return 'from-gray-500 to-gray-700'
    }
  }

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'plumbing':
        return 'bg-primary-100 text-primary-800'
      case 'heating':
        return 'bg-accent-100 text-accent-800'
      case 'cooling':
        return 'bg-primary-100 text-primary-800'
      case 'airQuality':
        return 'bg-primary-100 text-primary-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white p-6 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="pr-12">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryBadgeColor(service.category)} text-opacity-80`}>
                {service.category === 'plumbing' && 'Plumbing Service'}
                {service.category === 'heating' && 'Heating Service'}
                {service.category === 'cooling' && 'Cooling Service'}
                {service.category === 'airQuality' && 'Air Quality Service'}
              </div>
              <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
              <p className="text-white/90 text-lg">{service.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="p-6 space-y-8">
              
              {/* Service Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Overview</h3>
                <p className="text-gray-600 leading-relaxed">{service.details}</p>
              </div>

              {/* Benefits & Common Issues Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2" />
                    Service Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common Issues */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-accent-600 mr-2" />
                    Common Issues We Handle
                  </h3>
                  <ul className="space-y-3">
                    {service.commonIssues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <AlertTriangle className="w-4 h-4 text-accent-600" />
                        </div>
                        <span className="text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Pine Plumbing & Air?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Licensed & Insured</h4>
                    <p className="text-xs text-gray-600">Fully bonded and covered</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">24/7 Emergency</h4>
                    <p className="text-xs text-gray-600">Available when you need us</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Family Owned</h4>
                    <p className="text-xs text-gray-600">Three generations of service</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="w-6 h-6 text-secondary-600" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Satisfaction Guaranteed</h4>
                    <p className="text-xs text-gray-600">We make it right</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Action Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={`flex-1 bg-gradient-to-r ${getCategoryColor(service.category)} text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Emergency Service
              </a>
              <button
                onClick={onClose}
                className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">$49 Diagnostic Fee</span> - 
                Applied toward repair costs
              </p>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 