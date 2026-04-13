'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MOCK_COURSES } from '@/lib/mock-data';
import useEmblaCarousel from 'embla-carousel-react';

export default function CoursesGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const categories = ['Project Manager', 'UX/UI Design', 'Digital Market', 'Data Scientist', 'Data Analyst', 'Front-End Developer'];
  
  return (
    <section className="py-24 bg-[#F1F8F6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33] mb-8 leading-tight">
              Launch a new career in as little as 6 months
            </h2>
            
            <div className="flex flex-wrap gap-6 border-b border-slate-200 pb-4">
              {categories.map((cat, i) => (
                <button 
                  key={cat} 
                  className={cn(
                    "text-sm font-bold pb-4 transition-all relative",
                    i === 1 
                      ? "text-[#003D33] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#003D33]" 
                      : "text-slate-500 hover:text-[#003D33]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollPrev}
              className="rounded-full w-12 h-12 border-slate-200 hover:bg-[#003D33] hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollNext}
              className="rounded-full w-12 h-12 border-slate-200 hover:bg-[#003D33] hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {MOCK_COURSES.map((course, index) => (
              <div key={course.id} className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                <Link href={`/courses/${course.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-100"
                  >
                    {/* Course Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image 
                        src={course.image} 
                        alt={course.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#003D33] uppercase tracking-wider">
                        {course.category}
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-white shadow-sm">
                          <Image src={`https://picsum.photos/seed/${course.instructor}/100/100`} alt={course.instructor} fill className="object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900">{course.instructor}</span>
                          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">UX/UI designer</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#003D33] transition-colors leading-tight">
                        {course.title}
                      </h3>

                      <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#003D33]">{course.rating}</span>
                          <div className="flex items-center">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          </div>
                          <span className="text-xs text-slate-400">({course.reviewsCount / 1000}k)</span>
                        </div>
                        <div className="text-lg font-bold text-[#003D33]">
                          ${course.price}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/courses">
            <Button variant="ghost" className="text-[#003D33] font-bold hover:bg-[#003D33]/5 px-8 h-12 rounded-full group">
              See all courses
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
