'use client'

import { motion } from 'framer-motion'
import { 
  Phone, Star, Check, ArrowRight, Award,
  Snowflake, Flame, Droplets, Wind
} from 'lucide-react'
import { SITE_CONFIG, PRICING } from '@/lib/constants'
import ServicesSection from '@/components/sections/ServiceSection'

export default function EpicHomePage() {

  const services = [
    { icon: Flame, title: "Heating", color: "from-secondary-500 to-secondary-600", count: "24/7" },
    { icon: Snowflake, title: "Cooling", color: "from-primary-500 to-primary-600", count: "365 Days" },
    { icon: Droplets, title: "Plumbing", color: "from-primary-600 to-primary-700", count: "Emergency" },
    { icon: Wind, title: "Air Quality", color: "from-sage-500 to-sage-600", count: "Pure Air" }
  ]

  const testimonials = [
    { name: "Sarah M.", text: "Pine saved our Christmas when our furnace died. Tom was here in 30 minutes!", rating: 5 },
    { name: "Mike R.", text: "The Comfort Club is worth every penny. Priority service and 10% off everything!", rating: 5 },
    { name: "Jenny L.", text: "Professional, honest, and they actually care about our family's comfort.", rating: 5 }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Clean Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-primary-900 to-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center px-4 py-2 bg-emergency-600 rounded-full text-white text-sm font-semibold mb-6">
                ⚡ 24/7 Emergency Service Available
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert HVAC &<br />
                <span className="text-primary-400">Plumbing Services</span><br />
                You Can Trust
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Licensed, insured, and family-owned. Serving our community with honest pricing, 
                quality workmanship, and guaranteed satisfaction for over 20 years.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-accent-400 mr-2" />
                  <span className="text-white font-medium">4.9★ Google Reviews</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-secondary-400 mr-2" />
                  <span className="text-white font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" />
                  <span className="text-white font-medium">Same Day Service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`tel:${SITE_CONFIG.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emergency-600 hover:bg-emergency-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now: {SITE_CONFIG.phone}
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Scheduling Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-white text-2xl font-bold mb-6 text-center">
                Schedule Your Service
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    🔥 Heating
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    ❄️ Cooling
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    🚿 Plumbing
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    ⚡ Emergency
                  </button>
                </div>
                
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-primary-400 focus:outline-none"
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-primary-400 focus:outline-none"
                />
                
                <textarea 
                  placeholder="Brief description of your issue..." 
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-primary-400 focus:outline-none resize-none"
                />
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300"
                >
                  Get Free Estimate
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Quick Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Home Comfort Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From emergency repairs to new installations, we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.color} shadow-xl cursor-pointer transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.count}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pine Comfort Club Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-primary-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full text-white font-semibold mb-6 shadow-lg">
              <Award className="w-5 h-5 mr-2" />
              Exclusive Membership Program
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pine Comfort Club
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the family. Skip the line. Save money. Sleep peacefully knowing your home comfort is in expert hands.
            </p>
          </motion.div>

          {/* Membership Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-900 via-earth-900 to-primary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-4">
                    ${PRICING.membership.price}
                    <span className="text-2xl font-normal text-white/80">/year</span>
                  </h3>
                  <p className="text-xl text-white/90 mb-8">
                    Everything your family needs for year-round comfort and peace of mind.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  >
                    Join Today
                    <Star className="w-5 h-5 ml-2 text-accent-500" />
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {PRICING.membership.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                    >
                      <div className="bg-primary-500 rounded-full p-1 mr-4 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Modal */}
      <ServicesSection />

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose Pine
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real neighbors who trust us with their home comfort
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </motion.div>
            ))}
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
              Emergency? We're Here 24/7
            </h2>
            <p className="text-xl mb-8 text-white/90">
              No extra charges for nights, weekends, or holidays. 
              Your family's comfort can't wait.
            </p>
            <motion.a
              href={`tel:${SITE_CONFIG.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-secondary-600 px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now: {SITE_CONFIG.phone}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}