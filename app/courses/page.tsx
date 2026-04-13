'use client'

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHeader from '@/components/shared/PageHeader'
import Newsletter from '@/components/sections/Newsletter'
import { MOCK_COURSES } from '@/lib/mock-data'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Star, Clock, BookOpen, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader title="All Courses" subtitle="CATALOG" />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="text-3xl font-bold text-[#003D33]">Explore our courses</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-xl border-slate-200">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#003D33]/20">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {MOCK_COURSES.map((course, index) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-100"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image 
                      src={course.image} 
                      alt={course.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#003D33] hover:bg-white">
                      {course.category}
                    </Badge>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-100">
                        <Image src={`https://picsum.photos/seed/${course.instructor}/100/100`} alt={course.instructor} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-xs font-bold text-slate-600">{course.instructor}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#003D33] mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{course.lessonsCount} lessons</span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold text-[#003D33]">{course.rating}</span>
                      </div>
                      <div className="text-xl font-bold text-[#003D33]">
                        ${course.price}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
