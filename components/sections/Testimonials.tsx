'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#F1F8F6] rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#003D33] opacity-5 rounded-bl-full" />
              
              <div className="mb-8">
                <Quote className="w-16 h-16 text-[#003D33]/20 fill-[#003D33]/10" />
              </div>
              
              <h2 className="text-2xl lg:text-4xl font-bold text-[#003D33] mb-8">Testimonial</h2>
              
              <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-12 font-medium">
                &quot;Since implementing KnowledgePluse, our organization has witnessed a remarkable transformation in how we approach learning. The platform&apos;s simplicity belies its powerful capabilities, offering a seamless and enjoyable educational experience. The efficiency with which we can now manage courses, track progress, and foster collaboration among learners is truly impressive.&quot;
              </p>
              
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-[#003D33]">Theresa Webb,</h4>
                <p className="text-slate-500">Theresa Webb</p>
              </div>
              
              <div className="flex items-center gap-2 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src={`https://picsum.photos/seed/avatar${i}/100/100`}
                      alt="Avatar"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/testimonial-main/800/800"
                alt="Testimonial"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#003D33] rounded-[40px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
