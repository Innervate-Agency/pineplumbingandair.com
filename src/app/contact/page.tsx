'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, Mail, MapPin, Clock, Send,
  CheckCircle, Zap
} from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: 'routine',
    message: '',
    preferredContact: 'phone'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const serviceOptions = [
    'Heating Repair',
    'Air Conditioning Repair', 
    'Plumbing Service',
    'Emergency Repair',
    'New Installation',
    'Maintenance/Tune-up',
    'Pine Comfort Club',
    'Other'
  ]

  const urgencyOptions = [
    { value: 'emergency', label: 'Emergency (ASAP)', color: 'text-red-600' },
    { value: 'urgent', label: 'Urgent (Same Day)', color: 'text-orange-600' },
    { value: 'soon', label: 'This Week', color: 'text-yellow-600' },
    { value: 'routine', label: 'Routine (Next Week+)', color: 'text-green-600' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In real implementation, this would send to your backend
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        urgency: 'routine',
        message: '',
        preferredContact: 'phone'
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Emergency Service',
      description: '24/7 Emergency Repairs',
      contact: SITE_CONFIG.phone,
      action: `tel:${SITE_CONFIG.phone}`,
      bgColor: 'from-emergency-500 to-emergency-600',
      urgent: true
    },
    {
      icon: Phone,
      title: 'Schedule Service',
      description: 'Non-Emergency Appointments',
      contact: SITE_CONFIG.phone,
      action: `tel:${SITE_CONFIG.phone}`,
      bgColor: 'from-primary-500 to-primary-600',
      urgent: false
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Questions & Quotes',
      contact: SITE_CONFIG.email,
      action: `mailto:${SITE_CONFIG.email}`,
      bgColor: 'from-sage-500 to-sage-600',
      urgent: false
    },
    {
      icon: MapPin,
      title: 'Service Area',
      description: 'We Come to You',
      contact: 'Greater Metro Area',
      action: '#service-area',
      bgColor: 'from-secondary-500 to-secondary-600',
      urgent: false
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
    { day: 'Holidays', hours: 'Emergency Available' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium mb-8 border border-white/20">
              <Clock className="w-5 h-5 mr-2" />
              Available 24/7 for Emergencies
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              Ready to experience the Pine difference? We're here when you need us most, 
              with fast response times and honest, upfront pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden rounded-2xl p-6 text-white bg-gradient-to-br ${method.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  {method.urgent && (
                    <div className="absolute top-2 right-2">
                      <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{method.title}</h3>
                      <p className="text-white/80 text-sm">{method.description}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium">{method.contact}</p>
                  
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mb-10 group-hover:scale-150 transition-transform duration-500"></div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Request Service
                </h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your needs and we'll get back to you with a personalized solution.
                </p>

                <div className="mb-8 p-4 bg-primary-50 border-l-4 border-primary-400 rounded-xl text-primary-900 text-center text-lg font-medium">
                  <span>Know someone in need? <b>Nominate a community member for free or discounted Plumbing or HVAC service</b>—just mention it in your message below. We're here to help where it matters most.</span>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800">Thank you! We'll contact you within 2 hours.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        {urgencyOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-gray-700">Phone</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-gray-700">Email</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us More
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Describe your issue or what you need help with..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Request
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-primary-600" />
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-red-600 mr-2" />
                    <span className="font-semibold text-red-800">Emergency Service</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">
                    Available 24/7 with no extra charges for nights, weekends, or holidays for Pine Comfort Club Members.
                  </p>
                </div>
              </div>

              {/* Service Area Map */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-primary-600" />
                  Service Area
                </h3>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Greater Metro Area
                  </h4>
                  <p className="text-gray-600 mb-4">
                    We proudly serve families and businesses throughout the greater metropolitan area.
                  </p>
                  <p className="text-sm text-gray-500">
                    Not sure if we serve your area? Give us a call - we often make exceptions for our neighbors!
                  </p>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Need Emergency Service?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Don't wait - comfort emergencies need immediate attention. Call now for fast, professional service.
            </p>
            <motion.a
              href={`tel:${SITE_CONFIG.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-8 h-8 mr-3" />
              {SITE_CONFIG.phone}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}