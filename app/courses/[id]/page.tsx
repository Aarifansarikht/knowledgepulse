'use client'

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Newsletter from '@/components/sections/Newsletter'
import CoursesGrid from '@/components/sections/CoursesGrid'
import { motion } from 'motion/react'
import Image from 'next/image'
import { 
  Star, 
  Clock, 
  BookOpen, 
  Check, 
  Play, 
  Lock, 
  ChevronDown,
  Video,
  Infinity,
  Smartphone,
  Download,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge'
import { useParams, useRouter } from 'next/navigation'
import { MOCK_COURSES } from '@/lib/mock-data'
import Link from 'next/link'

export default function CourseDetailsPage() {
  const params = useParams()
  const courseId = params.id as string
  const course = MOCK_COURSES.find(c => c.id === courseId)

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#003D33] mb-4">Course not found</h1>
          <Link href="/courses">
            <Button className="bg-[#003D33] text-white">Back to Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Course Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#003D33] rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-[#F1F8F6] opacity-20 rounded-tl-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 opacity-80 rounded-bl-full" />
            
            <div className="max-w-3xl relative z-10">
              <Badge className="bg-yellow-400 text-[#003D33] hover:bg-yellow-500 mb-6 px-4 py-1 border-none font-bold">
                {course.category}
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                {course.title}
              </h1>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90 mb-10">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>{course.duration} to complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                  <span>{course.lessonsCount} Lessons in course</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{course.rating}</span>
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white/60">({course.reviewsCount.toLocaleString()})</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image src={`https://picsum.photos/seed/${course.instructor}/100/100`} alt="Instructor" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Instructor:</p>
                  <h4 className="text-white font-bold">{course.instructor}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-[40px] overflow-hidden mb-12 shadow-2xl group">
                <Image 
                  src={course.image} 
                  alt="Course Preview" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Link href={`/checkout/${courseId}`}>
                    <Button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/50 group/play">
                      <Play className="w-8 h-8 fill-white transition-transform group-hover/play:scale-110" />
                    </Button>
                  </Link>
                </div>
              </div>

              <Tabs defaultValue="info" className="w-full">
                <TabsList className="bg-transparent border-b border-slate-100 w-full justify-start h-auto p-0 mb-12 gap-8">
                  <TabsTrigger value="info" className="data-[state=active]:bg-transparent data-[state=active]:text-[#003D33] data-[state=active]:border-b-2 data-[state=active]:border-[#003D33] rounded-none px-0 py-4 text-xl font-bold text-slate-400 transition-all">
                    Course Info
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-transparent data-[state=active]:text-[#003D33] data-[state=active]:border-b-2 data-[state=active]:border-[#003D33] rounded-none px-0 py-4 text-xl font-bold text-slate-400 transition-all">
                    Reviews
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="info" className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-[#003D33] mb-6">Course Description</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {course.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#003D33] mb-6">Course Content</h3>
                    <Accordion multiple defaultValue={course.modules?.map((m:any) => m.id)} className="space-y-4">
                      {course.modules?.map((module:any, idx:any) => (
                        <AccordionItem key={module.id} value={module.id} className="border border-slate-100 rounded-2xl px-6 bg-[#F1F8F6]/50">
                          <AccordionTrigger className="font-bold text-[#003D33] hover:no-underline py-6">
                            <div className="flex items-center gap-4">
                              <span className="text-slate-400">0{idx + 1}</span>
                              <span>{module.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-4 pb-6">
                            {module.lessons.map((lesson:any) => (
                              <div key={lesson.id} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm group hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-3">
                                  <Video className="w-5 h-5 text-[#003D33]" />
                                  <span className="font-medium text-slate-700">{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <span className="text-sm text-slate-400">{lesson.duration}</span>
                                  {lesson.isLocked ? (
                                    <Lock className="w-4 h-4 text-slate-300" />
                                  ) : (
                                    <Play className="w-4 h-4 text-[#003D33] fill-[#003D33]" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-8 sticky top-32">
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-4">
                    <h2 className="text-4xl font-bold text-[#003D33]">${course.price}</h2>
                    {course.originalPrice && (
                      <span className="text-slate-400 line-through text-lg">${course.originalPrice}</span>
                    )}
                  </div>
                  <Link href={`/checkout/${courseId}`}>
                    <Button className="w-full bg-[#003D33] hover:bg-[#002D26] text-white rounded-xl py-8 h-auto font-bold text-lg mb-4 shadow-lg shadow-[#003D33]/20 group">
                      Enroll Now
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <p className="text-center text-slate-500 text-sm">Full lifetime access</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-[#003D33] mb-4">What You&apos;ll Learn</h4>
                    <ul className="space-y-3">
                      {course.learningObjectives?.map((obj:any, i:any) => (
                        <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                          <Check className="w-5 h-5 text-[#003D33] shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#003D33] mb-4">Material Includes</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <Check className="w-5 h-5 text-[#003D33]" />
                        <span>{course.duration} on-demand video</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <Check className="w-5 h-5 text-[#003D33]" />
                        <span>Full lifetime access</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <Check className="w-5 h-5 text-[#003D33]" />
                        <span>Access on mobile and TV</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <Check className="w-5 h-5 text-[#003D33]" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#003D33] mb-4">Requirements</h4>
                    <ul className="space-y-3">
                      {course.requirements?.map((req:any, i:any) => (
                        <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                          <Check className="w-5 h-5 text-[#003D33] shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Courses */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33]">Our Latest Courses</h2>
          </div>
          <CoursesGrid />
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
