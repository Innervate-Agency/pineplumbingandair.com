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

  const handleLearnMore = (serviceName: string) => {
    // Navigate to services page with appropriate section
    const serviceMap: Record<string, string> = {
      'Heating': '/services#heating',
      'Cooling': '/services#cooling', 
      'Plumbing': '/services#plumbing',
      'Air Quality': '/services#air-quality'
    }
    window.location.href = serviceMap[serviceName] || '/services'
  }

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
                With 10+ Years of Experience in the industry, we're licensed, insured, and committed to serving the Boise Metro community with honest pricing, 
                quality workmanship, and guaranteed satisfaction.
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
                  Call Now: {SITE_CONFIG.phoneDisplay}
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

      {/* Enhanced Services Section */}
      <section className="py-16 bg-white">
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
            <p className="text-xl text-gray-600 mb-8">
              From emergency repairs to new installations, we've got Boise Metro covered
            </p>
            
            {/* Service Type Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['All Services', 'Heating', 'Cooling', 'Plumbing', 'Air Quality'].map((filter, index) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    index === 0 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:border-primary-300'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200"
                >
                  {/* Service Header with Icon and Badge */}
                  <div className={`relative p-6 bg-gradient-to-br ${service.color} text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {service.count}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <div className="absolute -bottom-6 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-5 h-5 text-gray-700 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 pt-8">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span>Same-day service available</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span>Licensed & insured technicians</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span>Upfront, honest pricing</span>
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Starting from</span>
                        <span className="text-lg font-bold text-primary-600">
                          {service.title === 'Heating' ? '$89' : 
                           service.title === 'Cooling' ? '$79' :
                           service.title === 'Plumbing' ? '$49' : '$99'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {service.title === 'Air Quality' ? 'system inspection' : 'service call + diagnosis'}
                      </p>
                    </div>

                    {/* Enhanced CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleLearnMore(service.title)}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                    >
                      <span className="relative z-10">View Services & Gallery</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.button>
                  </div>

                  {/* Hover Preview */}
                  <div className="absolute inset-0 bg-primary-600/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <service.icon className="w-12 h-12 text-white mx-auto mb-4" />
                      <h4 className="text-lg font-bold mb-2">Quick Preview</h4>
                      <p className="text-sm text-white/90 mb-4">
                        {service.title === 'Heating' ? 'Furnace repair, installation, tune-ups & heat pumps' :
                         service.title === 'Cooling' ? 'AC repair, installation, maintenance & mini-splits' :
                         service.title === 'Plumbing' ? 'Repairs, water heaters, pipe work & installations' :
                         'Air filtration, humidifiers & indoor air quality solutions'}
                      </p>
                      <div className="text-xs text-white/80">
                        Click to see full gallery & pricing
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Below Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Need help choosing the right service? Our experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${SITE_CONFIG.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emergency-600 hover:bg-emergency-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now: {SITE_CONFIG.phoneDisplay}
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pine Comfort Club Section - Enticing & Professional */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%234F46E5%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full text-white font-semibold mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-5 h-5 mr-2" />
              </motion.div>
              VIP Membership Program
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pine Comfort Club
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skip the line, save money, sleep peacefully. Your Boise Metro home deserves VIP treatment.
            </p>
          </motion.div>

          {/* Enhanced Membership Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-900 via-primary-900 to-earth-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Subtle geometric pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-400/10 to-transparent rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-accent-400 text-sm font-medium">ANNUAL MEMBERSHIP</div>
                      <div className="flex items-baseline">
                        <span className="text-5xl md:text-6xl font-bold">${PRICING.membership.price}</span>
                        <span className="text-2xl font-normal text-white/80 ml-3">/year</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Everything You Need. Nothing You Don't.</h3>
                    <p className="text-xl text-white/90 leading-relaxed">
                      One simple price for complete peace of mind. No surprises, no hassles, just expert care when you need it most.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                    >
                      Join Today
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </motion.div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-4">
                  {PRICING.membership.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 group hover:bg-white/15 transition-colors duration-300"
                    >
                      <div className="bg-accent-500 rounded-full p-1 mr-4 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                  
                  {/* Social Proof */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                  >
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-3">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{i}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">500+ Happy Members</div>
                        <div className="flex items-center">
                          {[1,2,3,4,5].map((i) => (
                            <Star key={i} className="w-3 h-3 text-accent-400 fill-current" />
                          ))}
                          <span className="text-white/80 text-xs ml-2">4.9/5 satisfaction</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
    </div>
  )
}