'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import {
  Heart, Award, Users, Shield,
  Phone, Calendar, Home, Star
} from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const values = [
    {
      icon: Heart,
      title: "Family First",
      description: "Every customer becomes part of our extended family. We treat your home like our own.",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Transparent pricing, honest assessments, and work that stands the test of time.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Local craftsmanship refined into every service call and installation.",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting local families, businesses, and charities that make our neighborhood strong. Giving back is part of our mission.",
      color: "from-sage-500 to-sage-600"
    }
  ]

  // Timeline data archived for future reimplementation
  // const timeline = [
  //   {
  //     year: "1985",
  //     title: "The Beginning",
  //     description: "Started Pine Plumbing with just a pickup truck and a promise to always do right by our neighbors."
  //   },
  //   {
  //     year: "2003",
  //     title: "Expanding Services",
  //     description: "Expanding into HVAC services and building lasting relationships throughout the community."
  //   },
  //   {
  //     year: "2018",
  //     title: "Innovation Meets Tradition", 
  //     description: "Tom brought modern technology and the Pine Comfort Club while maintaining our family values."
  //   },
  //   {
  //     year: "2024",
  //     title: "Growing Strong",
  //     description: "Serving thousands of families with the same commitment to quality and care."
  //   }
  // ]

  const certifications = [
    "HVAC: Lic. #9671762",
    "Plumbing: Lic. #4371148",
    "Bonded Contractor",
    "Certified Professionals",
    "Fully Insured & Covered",
    "5 Star Reviews"
  ]

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-earth-900 text-white overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium mb-8 border border-white/20">
              <Home className="w-5 h-5 mr-2" />
              Serving the Community is our Priority
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Meet the
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Bullock Family
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              Boise born and raised, the Bullocks have been more than just your HVAC and plumbing contractors.
              We&apos;re your neighbors, your friends, and the family you call when comfort matters most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story Starts with Family
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hi, I'm Tom Bullock, founder of Pine Plumbing and Air. My wife Jessica and I were both born and raised in Boise, Idaho. I'm a 3rd-generation Idahoan, and Jessica is a 4th-generation Idahoan—we're deeply rooted in this community and proud to serve the Treasure Valley.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started Pine Plumbing and Air with one goal: to provide clean installs, quality work, and honest service our neighbors can rely on. Whether it's a plumbing issue or a heating and cooling upgrade, we treat every job like it's in our own home.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Being locally owned and family operated, we know how important trust, craftsmanship, and community are. When you choose Pine, you're not just hiring a contractor—you're supporting a local family who truly cares.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2 inline" />
                  Schedule Service
                </motion.button>
                <motion.a
                  href={`tel:${SITE_CONFIG.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 text-center"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call Today
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-sage-50 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Family Values Drive Everything
                    </h3>
                    <p className="text-gray-600 mb-6">
                      "We don't just fix heating and cooling systems. We take care of the families
                      who trust us with their most important possession - their home."
                    </p>
                    <p className="font-semibold text-gray-900 mb-8">
                      — Tom Bullock, Owner
                    </p>
                  </div>
                  
                  {/* Family Photos */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="grid grid-cols-2 h-full">
                      {/* Tom in suit */}
                      <div className="relative overflow-hidden">
                        <Image
                          src="/images/wholesome-photos/1000032468.jpg"
                          alt="Tom Bullock, Owner of Pine Plumbing & Air"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      
                      {/* Jessica in wedding dress */}
                      <div className="relative overflow-hidden">
                        <Image
                          src="/images/wholesome-photos/1000032462.jpg"
                          alt="Jessica Bullock, Pine Plumbing & Air Family"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                    
                    {/* White gradient overlay from bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-800 dark:via-slate-800/80 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - ARCHIVED FOR FUTURE REIMPLEMENTATION */}
      {/* 
      <section className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Decades of Service
            </h2>
            <p className="text-xl text-gray-600">
              Our journey from a one-man operation to your trusted home comfort experts.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-700 rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Community Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Giving Back to Our Community</h2>
          <p className="text-xl text-gray-700 mb-6">We're proud to support the Idaho Food Bank and Metro Meals on Wheels—because taking care of our neighbors goes beyond pipes and vents.</p>
          <p className="text-lg text-gray-700 mb-4">💧 When you choose Pine for your Plumbing or HVAC needs, a portion of every service goes directly to supporting local families in need. Your home comfort helps provide food, care, and dignity to others in our community.</p>
          <p className="text-lg text-gray-700 mb-4">👉 Know someone going through a tough time? <b>Nominate a community member in need of Plumbing or HVAC services through our <a href='/contact' className='text-primary-600 underline'>contact form</a></b>. We're here to help where it matters most.</p>
          <p className="text-lg text-gray-700">❤️ Thank you for being part of the Pine family. Together, we're building a stronger Idaho.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Values That Guide Us
            </h2>
            <p className="text-xl text-gray-600">
              These aren't just words on a wall - they're the principles we live by every single day.
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* First row - Photo left, Values right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/wholesome-photos/1000032468.jpg"
                  alt="Tom Bullock working on HVAC system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Values Grid - Top 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.slice(0, 2).map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="text-center group"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Second row - Values left, Photo right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Values Grid - Bottom 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:order-1">
                {values.slice(2, 4).map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="text-center group"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl lg:order-2"
              >
                <Image
                  src="/images/wholesome-photos/1000032462.jpg"
                  alt="Jessica Bullock, Pine Plumbing & Air Family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-24 bg-gradient-to-br from-primary-900 to-earth-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Licensed, Certified & Trusted
            </h2>
            <p className="text-xl text-white/80">
              Our credentials speak to our commitment to excellence and continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center"
              >
                <Award className="w-8 h-8 text-accent-400 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{cert}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl max-w-2xl mx-auto">
              <Star className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Award-Winning Service
              </h3>
              <p className="text-white/90 text-lg">
                Recognized by our community for outstanding service, customer satisfaction,
                and commitment to excellence in home comfort solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emergency-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Join the Pine Family?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the difference local expertise and genuine care can make for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${SITE_CONFIG.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-secondary-600 px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call {SITE_CONFIG.phone}
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