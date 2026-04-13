'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const STEPS = [
  {
    id: 1,
    title: 'Create your profile',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    image: 'https://picsum.photos/seed/profile/400/300',
    buttonText: 'Get Started',
  },
  {
    id: 2,
    title: 'Search Courses',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    image: 'https://picsum.photos/seed/search/400/300',
    buttonText: 'Get Started',
  },
  {
    id: 3,
    title: 'Make a Connection',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    image: 'https://picsum.photos/seed/connect/400/300',
    buttonText: 'Get Started',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33] inline-block relative">
            How KnowledgePulse <span className="relative">
              works
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#003D33]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F1F8F6] rounded-3xl p-8 flex flex-col items-center text-center group hover:shadow-xl transition-all border border-transparent hover:border-[#003D33]/10"
            >
              <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden bg-white shadow-sm">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Overlaying some UI elements to mimic the design */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {index === 0 && (
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-full max-w-[200px] space-y-2">
                      <div className="h-8 bg-slate-100 rounded-lg flex items-center px-2 gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full" />
                        <div className="h-2 w-20 bg-slate-200 rounded" />
                      </div>
                      <div className="h-8 bg-slate-100 rounded-lg flex items-center px-2 gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full" />
                        <div className="h-2 w-20 bg-slate-200 rounded" />
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-full max-w-[200px]">
                      <div className="h-8 bg-slate-100 rounded-lg flex items-center px-2 gap-2 mb-2">
                        <div className="w-3 h-3 border-2 border-slate-300 rounded-full" />
                        <div className="h-2 w-24 bg-slate-200 rounded" />
                      </div>
                      <div className="flex gap-1">
                        <div className="h-4 w-12 bg-slate-100 rounded-full" />
                        <div className="h-4 w-16 bg-slate-100 rounded-full" />
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="relative w-24 h-24">
                       <div className="absolute top-0 left-0 w-8 h-8 bg-slate-200 rounded-full border-2 border-white" />
                       <div className="absolute top-0 right-0 w-8 h-8 bg-slate-300 rounded-full border-2 border-white" />
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#003D33] rounded-full border-2 border-white" />
                       <svg className="absolute inset-0 w-full h-full text-slate-300" viewBox="0 0 100 100">
                         <line x1="20" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
                         <line x1="80" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
                       </svg>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#003D33] mb-4">{step.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {step.description}
              </p>
              
              <Button className="bg-[#003D33] hover:bg-[#002D26] text-white rounded-lg px-8 py-6 h-auto font-bold">
                {step.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
