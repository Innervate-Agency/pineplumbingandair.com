'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  ChevronLeft, ChevronRight, X, Star, Clock, 
  MapPin, Calendar, Play, Image as ImageIcon
} from 'lucide-react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'heating', name: 'Heating Systems', count: 8 },
    { id: 'cooling', name: 'Air Conditioning', count: 7 },
    { id: 'plumbing', name: 'Plumbing', count: 6 },
    { id: 'emergency', name: 'Emergency Repairs', count: 3 }
  ]

  // Using placeholder images for now - Tom will replace these with real project photos
  const projects = [
    {
      id: 1,
      title: 'Complete HVAC System Replacement',
      category: 'heating',
      location: 'Downtown Family Home',
      date: '2024-01-15',
      duration: '2 days',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1581092795442-8347c058e84b?w=800&h=600&fit=crop',
      description: 'Upgraded aging furnace and ductwork for improved efficiency and comfort. Customer saw 40% reduction in energy bills.',
      testimonial: "Pine transformed our home comfort completely. The new system is whisper quiet and keeps every room perfect!"
    },
    {
      id: 2,
      title: 'Central Air Installation',
      category: 'cooling',
      location: 'Suburban Ranch',
      date: '2024-02-03',
      duration: '1 day',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
      description: 'First-time AC installation for a home that never had central cooling. Perfectly sized system for optimal efficiency.',
      testimonial: "Best investment we ever made! Summer was actually enjoyable for the first time in 20 years."
    },
    {
      id: 3,
      title: 'Emergency Water Heater Replacement',
      category: 'emergency',
      location: 'City Townhouse',
      date: '2024-02-20',
      duration: '4 hours',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
      description: 'Late-night emergency call for failed water heater. Had family back to hot showers by morning.',
      testimonial: "Called at 11PM and Tom was here within an hour. Saved our weekend!"
    },
    {
      id: 4,
      title: 'Whole-House Plumbing Renovation',
      category: 'plumbing',
      location: 'Historic Victorian',
      date: '2024-03-10',
      duration: '3 days',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      description: 'Complete repiping of 1920s home with modern PEX system. Improved water pressure throughout.',
      testimonial: "Pine preserved the character of our historic home while bringing the plumbing into the 21st century."
    },
    {
      id: 5,
      title: 'High-Efficiency Furnace Upgrade',
      category: 'heating',
      location: 'Two-Story Colonial',
      date: '2024-03-25',
      duration: '1 day',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1581092786450-24cb59d13507?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
      description: 'Replaced 15-year-old furnace with 96% efficiency unit. Includes smart thermostat integration.',
      testimonial: "The new furnace is incredibly efficient and the smart controls are amazing. Pine thought of everything!"
    },
    {
      id: 6,
      title: 'Ductless Mini-Split Installation',
      category: 'cooling',
      location: 'Home Office Addition',
      date: '2024-04-08',
      duration: '1 day',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
      description: 'Perfect solution for new addition without existing ductwork. Quiet operation for home office.',
      testimonial: "Works perfectly for our home office. So quiet you forget it's running!"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      rating: 5,
      text: "Pine Plumbing & Air transformed our 1950s home into a modern comfort paradise. Professional, clean, and incredibly knowledgeable.",
      project: "Complete HVAC Modernization"
    },
    {
      name: "David Chen",
      rating: 5,
      text: "Emergency service at its finest. Water heater failed at 2AM and they had us back to normal by breakfast. Truly 24/7 service!",
      project: "Emergency Water Heater Replacement"
    },
    {
      name: "Jennifer Martinez",
      rating: 5,
      text: "Three generations of expertise shows in every detail. They didn't just install our AC - they optimized our entire home's airflow.",
      project: "Central Air Installation & Ductwork"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-lg font-medium mb-8 border border-white/20">
              <ImageIcon className="w-5 h-5 mr-2" />
              Real Projects, Real Results
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Project
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              See the Pine difference in action. Every project tells a story of craftsmanship, 
              innovation, and families finding their perfect comfort zone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(project.id)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                >
                  {/* Before/After Image Comparison */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 relative overflow-hidden">
                        <img 
                          src={project.beforeImage} 
                          alt="Before"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Before
                        </div>
                      </div>
                      <div className="w-1/2 relative overflow-hidden">
                        <img 
                          src={project.afterImage} 
                          alt="After"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                      <div className="flex items-center">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/80">
              Real feedback from real families who trusted us with their home comfort.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-lg mb-1">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-white/70">
                      {testimonials[currentSlide].project}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
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
              The Pine Process
            </h2>
            <p className="text-xl text-gray-600">
              Every project follows our proven methodology for guaranteed satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Thorough evaluation of your needs and existing systems' },
              { step: '02', title: 'Planning', description: 'Custom solution design with transparent pricing' },
              { step: '03', title: 'Installation', description: 'Expert installation with minimal disruption' },
              { step: '04', title: 'Follow-up', description: 'Quality check and ongoing support guarantee' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedImage)
                if (!project) return null
                
                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-red-600">Before</h3>
                        <img src={project.beforeImage} alt="Before" className="w-full rounded-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-green-600">After</h3>
                        <img src={project.afterImage} alt="After" className="w-full rounded-2xl" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-gray-600">{project.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-gray-600">{project.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-gray-600">{project.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-4">{project.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Customer Feedback</h3>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                          <div className="flex items-center mb-3">
                            {[...Array(project.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-gray-700 italic">
                            "{project.testimonial}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}