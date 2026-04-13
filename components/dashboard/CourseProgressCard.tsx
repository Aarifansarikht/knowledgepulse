'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

interface CourseProgressCardProps {
  id: string
  title: string
  instructor: string
  instructorRole: string
  instructorAvatar: string
  image: string
  lessonsCompleted: number
  totalLessons: number
  progress: number
}

export default function CourseProgressCard({
  id,
  title,
  instructor,
  instructorRole,
  instructorAvatar,
  image,
  lessonsCompleted,
  totalLessons,
  progress
}: CourseProgressCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image src={instructorAvatar} alt={instructor} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#003D33]">{instructor}</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">{instructorRole}</p>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-[#003D33] mb-4 line-clamp-2 min-h-[3.5rem]">{title}</h3>
        
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Lesson {lessonsCompleted} of {totalLessons}</span>
          </div>
          <span className="font-bold text-[#003D33]">{progress}%</span>
        </div>
        
        <div className="w-full h-2 bg-slate-100 rounded-full mb-6 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-[#003D33]"
          />
        </div>
        
        <Link href={`/courses/${id}/learn`}>
          <Button className="w-full bg-[#003D33] hover:bg-[#002D26] text-white rounded-xl py-6 h-auto font-bold">
            Continue Course
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
