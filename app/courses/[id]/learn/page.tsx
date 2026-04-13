'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { MOCK_COURSES } from '@/lib/mock-data'
import { Lesson, Module, Course } from '@/types'
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  PlayCircle, 
  Lock, 
  Menu,
  X,
  ArrowLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function CourseLearnPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string
  
  const course = React.useMemo(() => MOCK_COURSES.find(c => c.id === courseId), [courseId])
  
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(() => {
    if (course && course.modules && course.modules.length > 0) {
      return course.modules[0].lessons[0]
    }
    return null
  })
  
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    if (!course) {
      router.push('/courses')
      return
    }
  }, [course, router])

  if (!course || !currentLesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003D33]"></div>
      </div>
    )
  }

  const totalLessons = course.modules?.reduce((acc:any, m:any) => acc + m.lessons.length, 0) || 0
  const progress = (completedLessons.length / totalLessons) * 100

  const handleLessonSelect = (lesson: Lesson) => {
    if (!lesson.isLocked) {
      setCurrentLesson(lesson)
    }
  }

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId) 
        : [...prev, lessonId]
    )
  }

  const getAllLessons = () => {
    if (!course.modules) return []
    return course.modules.flatMap((m:any) => m.lessons)
  }

  const getNextLesson = () => {
    const allLessons = getAllLessons()
    const currentIndex = allLessons.findIndex((l:any) => l.id === currentLesson.id)
    if (currentIndex < allLessons.length - 1) {
      return allLessons[currentIndex + 1]
    }
    return null
  }

  const getPreviousLesson = () => {
    const allLessons = getAllLessons()
    const currentIndex = allLessons.findIndex((l:any) => l.id === currentLesson.id)
    if (currentIndex > 0) {
      return allLessons[currentIndex - 1]
    }
    return null
  }

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-slate-100 flex items-center justify-between px-4 bg-white z-50">
        <div className="flex items-center gap-4">
          <Link href={`/courses/${courseId}`}>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="hidden md:block">
            <h1 className="text-sm font-bold text-[#003D33] line-clamp-1">{course.title}</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
              {currentLesson.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-3 w-48">
            <div className="flex-1">
              <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                <span>Your Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Main Content (Player) */}
        <main className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          isSidebarOpen ? "lg:mr-[350px]" : "mr-0"
        )}>
          <div className="flex-1 bg-black flex items-center justify-center relative group">
            <video 
              key={currentLesson.id}
              src={currentLesson.videoUrl} 
              controls 
              className="max-h-full w-full aspect-video"
              poster={course.image}
            />
          </div>

          <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#003D33]">{currentLesson.title}</h2>
              <div className="flex items-center gap-4">
                <Button 
                  onClick={() => toggleLessonCompletion(currentLesson.id)}
                  className={cn(
                    "rounded-xl font-bold transition-all",
                    completedLessons.includes(currentLesson.id)
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-[#003D33] hover:bg-[#002D26] text-white"
                  )}
                >
                  {completedLessons.includes(currentLesson.id) ? (
                    <><CheckCircle2 className="w-4 h-4 mr-2" /> Completed</>
                  ) : (
                    "Mark as Complete"
                  )}
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-6 border-t border-b border-slate-100 mb-8">
              <Button 
                variant="outline" 
                className="rounded-xl border-slate-200 font-bold"
                disabled={!getPreviousLesson()}
                onClick={() => {
                  const prev = getPreviousLesson()
                  if (prev) setCurrentLesson(prev)
                }}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous Lesson
              </Button>
              <Button 
                variant="outline" 
                className="rounded-xl border-slate-200 font-bold"
                disabled={!getNextLesson()}
                onClick={() => {
                  const next = getNextLesson()
                  if (next) setCurrentLesson(next)
                }}
              >
                Next Lesson <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed">
                In this lesson, we will cover the fundamental concepts of {currentLesson.title}. 
                Make sure to follow along with the examples and practice on your own.
              </p>
            </div>
          </div>
        </main>

        {/* Sidebar (Course Content) */}
        <aside className={cn(
          "fixed inset-y-0 right-0 w-full lg:w-[350px] bg-white border-l border-slate-100 transform transition-transform duration-300 z-40 pt-16 lg:pt-0",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-bold text-[#003D33]">Course Content</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <Accordion multiple defaultValue={course.modules?.map((m:any) => m.id)} className="w-full">
                {course.modules?.map((module:any, mIdx:any) => (
                  <AccordionItem key={module.id} value={module.id} className="border-b border-slate-50">
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 transition-all hover:no-underline group">
                      <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Module {mIdx + 1}
                        </span>
                        <span className="text-sm font-bold text-[#003D33] group-hover:text-yellow-600 transition-colors">
                          {module.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                      <div className="flex flex-col">
                        {module.lessons.map((lesson: Lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => handleLessonSelect(lesson)}
                            className={cn(
                              "flex items-center gap-4 px-6 py-4 transition-all text-left group",
                              currentLesson.id === lesson.id ? "bg-[#F1F8F6]" : "hover:bg-slate-50"
                            )}
                          >
                            <div className="shrink-0">
                              {completedLessons.includes(lesson.id) ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                              ) : lesson.isLocked ? (
                                <Lock className="w-5 h-5 text-slate-300" />
                              ) : (
                                <PlayCircle className={cn(
                                  "w-5 h-5 transition-colors",
                                  currentLesson.id === lesson.id ? "text-[#003D33]" : "text-slate-400 group-hover:text-[#003D33]"
                                )} />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className={cn(
                                "text-sm font-medium transition-colors",
                                currentLesson.id === lesson.id ? "text-[#003D33] font-bold" : "text-slate-600 group-hover:text-[#003D33]"
                              )}>
                                {lesson.title}
                              </p>
                              <span className="text-[10px] text-slate-400 font-medium">
                                {lesson.duration}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
