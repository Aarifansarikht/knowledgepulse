'use client'

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHeader from '@/components/shared/PageHeader'
import Newsletter from '@/components/sections/Newsletter'
import { motion } from 'motion/react'
import Image from 'next/image'
import { CheckCircle2, Users, Award, Globe } from 'lucide-react'

const STATS = [
  { label: 'Active Students', value: '20k+', icon: Users },
  { label: 'Total Courses', value: '1,200+', icon: Award },
  { label: 'Expert Mentors', value: '150+', icon: CheckCircle2 },
  { label: 'Countries', value: '45+', icon: Globe },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader title="About KnowledgePulse" subtitle="OUR STORY" />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33] mb-8 leading-tight">
                Empowering the next generation of digital leaders
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                KnowledgePulse was founded with a simple mission: to make high-quality, industry-relevant education accessible to everyone, everywhere.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that learning should be an engaging, continuous journey. Our platform combines expert-led instruction with powerful interactive tools to help you master the skills that matter most in today&apos;s rapidly evolving digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="p-6 bg-[#F1F8F6] rounded-3xl">
                    <stat.icon className="w-8 h-8 text-[#003D33] mb-4" />
                    <h4 className="text-2xl font-bold text-[#003D33]">{stat.value}</h4>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://picsum.photos/seed/about-main/800/1000" 
                  alt="About Us" 
                  width={800} 
                  height={1000}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400 rounded-[40px] -z-10 rotate-12" />
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
