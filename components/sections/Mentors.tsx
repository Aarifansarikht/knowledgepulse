'use client'

import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const MENTORS = [
  {
    id: 1,
    name: 'Darrell Steward',
    role: 'UX/UI designer',
    rating: 4.8,
    reviews: '144k reviews',
    image: 'https://picsum.photos/seed/mentor1/400/500',
  },
  {
    id: 2,
    name: 'Kathryn Murphy',
    role: 'Data Scientist',
    rating: 4.8,
    reviews: '144k reviews',
    image: 'https://picsum.photos/seed/mentor2/400/500',
  },
  {
    id: 3,
    name: 'Brooklyn Simmons',
    role: 'Data Analysis',
    rating: 4.8,
    reviews: '144k reviews',
    image: 'https://picsum.photos/seed/mentor3/400/500',
  },
  {
    id: 4,
    name: 'Esther Howard',
    role: 'UX/UI designer',
    rating: 4.8,
    reviews: '144k reviews',
    image: 'https://picsum.photos/seed/mentor4/400/500',
  },
]

export default function Mentors() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33] max-w-xl leading-tight">
            Meet our professional <span className="relative">
              mentors.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#003D33]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h2>
          
          <div className="absolute top-0 right-0 hidden lg:block">
            <div className="w-24 h-24 bg-[#003D33] rounded-tl-[40px] rounded-br-[40px] opacity-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {MENTORS.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h3 className="text-xl font-bold text-[#003D33] mb-1">{mentor.name}</h3>
              <p className="text-slate-500 text-sm mb-4">{mentor.role}</p>
              
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#003D33]">{mentor.rating}</span>
                <div className="flex">
                  {[...Array(1)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-400 text-sm">({mentor.reviews})</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-slate-200 hover:bg-[#003D33] hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-slate-200 hover:bg-[#003D33] hover:text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
