'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#003D33] rounded-[40px] lg:rounded-[60px] p-8 lg:p-20 overflow-hidden shadow-2xl shadow-[#003D33]/20"
        >
          {/* Abstract Shapes */}
          <div className="absolute top-10 right-1/3 w-32 h-32 bg-[#F1F8F6]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
          
          {/* Light Green Quarter Circle (Top Right) */}
          <div className="absolute top-10 right-[35%] w-32 h-32 bg-[#D9E8E2] rounded-tl-full opacity-80 hidden lg:block" />
          
          {/* Dark Green Circle (Far Right) */}
          <div className="absolute top-1/3 -right-10 w-40 h-40 bg-[#002D26] rounded-full hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block text-white/80 text-sm font-bold tracking-[0.3em] mb-6 uppercase"
              >
                K N O W L E D G E P U L S E
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
              >
                Knowledge Meets <br />
                Innovation
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/70 mb-12 leading-relaxed max-w-lg"
              >
                This platform&apos;s simplicity belies its powerful capabilities, offering a seamless and enjoyable educational experience.
              </motion.p>

              {/* Search Bar with Dropdown */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 max-w-xl group focus-within:bg-white transition-all duration-300"
              >
                <div className="relative flex-1 flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-white/50 group-focus-within:text-[#003D33]" />
                  <Input 
                    placeholder="Search Courses" 
                    className="h-12 pl-12 bg-transparent border-none text-white focus-visible:ring-0 placeholder:text-white/50 group-focus-within:text-[#003D33] group-focus-within:placeholder:text-slate-400"
                  />
                </div>
                <div className="h-8 w-px bg-white/20 mx-2 group-focus-within:bg-slate-200" />
                <Button variant="ghost" className="h-12 px-6 text-white group-focus-within:text-[#003D33] font-bold hover:bg-transparent">
                  Courses
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Right Visuals */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Yellow Semi-circle Background */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-0 w-[80%] aspect-square bg-yellow-400 rounded-full translate-y-1/2"
              />
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="relative z-10"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60" 
                  alt="Student" 
                  width={500} 
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
