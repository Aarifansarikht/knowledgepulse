'use client'

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHeader from '@/components/shared/PageHeader'
import Newsletter from '@/components/sections/Newsletter'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'motion/react'

const FAQS = [
  {
    question: "Do you provide student support?",
    answer: "Participate in our live webinars and workshops conducted by experts in the field. These sessions cover advanced topics, provide hands-on experiences, and offer opportunities for direct interaction with instructors."
  },
  {
    question: "How do I update my profile information?",
    answer: "You can update your profile information in the settings section of your dashboard. Simply click on your avatar and select 'Settings'."
  },
  {
    question: "What is your benefit of courses?",
    answer: "Our courses are designed by industry experts and provide practical, hands-on experience that you can apply immediately in your career."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee if you are not satisfied with the course content, provided you haven't completed more than 20% of the course."
  },
  {
    question: "How do I enroll in a course?",
    answer: "Simply browse our catalog, select a course you're interested in, and click the 'Enroll Now' button. You'll be guided through the payment and registration process."
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader title="FAQ Page" subtitle="FAQ" />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33] inline-block relative">
              Frequently asked <span className="relative">
                questions
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#003D33]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 rounded-2xl px-6 overflow-hidden data-[state=open]:border-[#003D33] data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-bold text-[#003D33] text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
