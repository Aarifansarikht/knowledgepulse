'use client'

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHeader from '@/components/shared/PageHeader'
import Newsletter from '@/components/sections/Newsletter'
import CourseProgressCard from '@/components/dashboard/CourseProgressCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { MOCK_COURSES } from '@/lib/mock-data'
import React from 'react'

export default function DashboardPage() {
  const myLearningCourses = React.useMemo(() => MOCK_COURSES.map((course, idx) => ({
    id: course.id,
    title: course.title,
    instructor: course.instructor,
    instructorRole: 'Expert Mentor',
    instructorAvatar: `https://picsum.photos/seed/${course.instructor}/100/100`,
    image: course.image,
    lessonsCompleted: (idx + 2) % 5,
    totalLessons: course.lessonsCount,
    progress: (idx * 20 + 30) % 100,
  })), [])

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader title="Good Morning Salman!" subtitle="MY COURSES" />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33] inline-block relative">
              My <span className="relative">
                Learning
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#003D33]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-slate-200 hover:bg-[#003D33] hover:text-white transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-slate-200 hover:bg-[#003D33] hover:text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {myLearningCourses.map((course) => (
              <CourseProgressCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
