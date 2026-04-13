'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-10 h-10">
        <motion.div 
          className="absolute inset-0 bg-[#003D33] rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        />
        <motion.div 
          className="absolute inset-0 bg-yellow-400 rounded-xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-6 h-6 text-[#003D33]" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </motion.div>
      </div>
      <span className="text-2xl font-bold text-[#003D33] tracking-tight">
        Knowledge<span className="text-yellow-600">Pulse</span>
      </span>
    </Link>
  )
}
