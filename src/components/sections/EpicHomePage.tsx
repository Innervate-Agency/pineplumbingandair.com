'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { 
  Phone, Star, Check, 
  Snowflake, Flame, Droplets, Wind,
  ChevronRight, ArrowRight, Award, Heart
} from 'lucide-react'
import { SITE_CONFIG, PRICING } from '@/lib/constants'
import ServicesSection from '@/components/sections/ServiceSection'

export default function EpicHomePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

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
    <div ref={containerRef} className="min-h-screen overflow-hidden">
          {/* Animated Background Elements */}
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
          <motion.section
              style={{ y: heroY, opacity: heroOpacity }}
              className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-primary-900 to-earth-900"
          >
              {/* Floating Interactive Elements */}
              <motion.div
                  style={{ y: floatingY }}
                  className="absolute inset-0 pointer-events-none"
              >
                  {[...Array(6)].map((_, i) => (
                      <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
                          style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + i * 8}%`,
                          }}
                          animate={{
                              y: [0, -30, 0],
                              opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                              duration: 3 + i * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                          }} />
                  ))}
              </motion.div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-8"
                  >
                      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                          <Heart className="w-4 h-4 mr-2 text-secondary-400" />
                          Family-Owned • Community-Focused • 24/7 Service
                      </div>

                      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                          Your Home's
                          <span className="block bg-gradient-to-r from-primary-400 via-accent-500 to-secondary-400 bg-clip-text text-transparent">
                              Comfort Heroes
                          </span>
                      </h1>

                      <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                          When your family's comfort is on the line, you need more than just a contractor.
                          You need neighbors who care, experts who deliver, and service you can trust.
                      </p>
                  </motion.div>

                  {/* Interactive CTA Buttons */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                  >
                      <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group bg-gradient-to-r from-emergency-500 to-emergency-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emergency-500/25 transition-all duration-300 flex items-center justify-center"
                      >
                          <Phone className="w-5 h-5 mr-2" />
                          Emergency Service
                          <motion.div
                              className="ml-2"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                          >
                              <ArrowRight className="w-5 h-5" />
                          </motion.div>
                      </motion.button>

                      <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                      >
                          <Star className="w-5 h-5 mr-2 text-accent-400" />
                          Join Comfort Club
                          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                  </motion.div>

                  {/* Services Quick Preview */}
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                  >
                      {services.map((service, index) => (
                          <motion.div
                              key={service.title}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                              onHoverStart={() => setHoveredService(index)}
                              onHoverEnd={() => setHoveredService(null)}
                              className="group relative"
                          >
                              <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-sm border border-white/20 shadow-xl cursor-pointer overflow-hidden`}
                              >
                                  <motion.div
                                      className="absolute inset-0 bg-white/20"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: hoveredService === index ? 1 : 0 }}
                                      transition={{ duration: 0.3 }} />

                                  <service.icon className="w-8 h-8 text-white mb-3 relative z-10" />
                                  <h3 className="text-white font-semibold text-lg relative z-10">{service.title}</h3>
                                  <p className="text-white/80 text-sm relative z-10">{service.count}</p>

                                  <motion.div
                                      className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full"
                                      animate={{
                                          scale: hoveredService === index ? [1, 1.5, 1] : 1,
                                      }}
                                      transition={{ duration: 0.6, repeat: hoveredService === index ? Infinity : 0 }} />
                              </motion.div>
                          </motion.div>
                      ))}
                  </motion.div>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
              >
                  <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                      <motion.div
                          className="w-1 h-3 bg-white/70 rounded-full mt-2"
                          animate={{ y: [0, 12, 0] }}
                          transition={{ duration: 2, repeat: Infinity }} />
                  </div>
              </motion.div>
          </motion.section>

          {/* Pine Comfort Club Section */}
          <section className="py-24 bg-gradient-to-br from-slate-50 to-primary-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
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
                      {/* Animated background elements */}
                      <div className="absolute inset-0 overflow-hidden">
                          <motion.div
                              className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                          <motion.div
                              className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-400/20 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 4, repeat: Infinity }} />
                      </div>

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