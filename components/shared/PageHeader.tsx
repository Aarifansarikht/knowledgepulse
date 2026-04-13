'use client'

import { motion } from 'motion/react'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#003D33] rounded-[40px] p-12 lg:p-20 relative overflow-hidden text-center">
          {/* Decorative shapes */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-[#F1F8F6] opacity-20 rounded-tl-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 opacity-80 rounded-bl-full" />
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/60 uppercase tracking-[0.2em] text-sm font-bold mb-4"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
