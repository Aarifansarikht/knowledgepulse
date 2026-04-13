'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { MOCK_COURSES } from '@/lib/mock-data'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, CreditCard, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function CheckoutPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string
  const course = MOCK_COURSES.find(c => c.id === courseId)

  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!course) return null

  const handlePayment = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      // Redirect after success
      setTimeout(() => {
        router.push(`/courses/${courseId}/learn`)
      }, 2000)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-[#003D33] mb-12">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Payment Details */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-10">
                  <h3 className="text-2xl font-bold text-[#003D33] mb-8 flex items-center gap-3">
                    <CreditCard className="w-6 h-6" />
                    Payment Method
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#003D33] ml-1">Card Number</label>
                        <Input placeholder="0000 0000 0000 0000" className="h-14 rounded-2xl border-slate-100 bg-slate-50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#003D33] ml-1">Card Holder</label>
                        <Input placeholder="John Doe" className="h-14 rounded-2xl border-slate-100 bg-slate-50" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#003D33] ml-1">Expiry Date</label>
                        <Input placeholder="MM/YY" className="h-14 rounded-2xl border-slate-100 bg-slate-50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#003D33] ml-1">CVV</label>
                        <Input placeholder="123" className="h-14 rounded-2xl border-slate-100 bg-slate-50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#003D33] ml-1">ZIP Code</label>
                        <Input placeholder="123456" className="h-14 rounded-2xl border-slate-100 bg-slate-50" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-[#F1F8F6] rounded-3xl border border-[#003D33]/10">
                  <ShieldCheck className="w-8 h-8 text-[#003D33]" />
                  <div>
                    <p className="font-bold text-[#003D33]">Secure Payment</p>
                    <p className="text-sm text-slate-500">Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#003D33] rounded-[40px] p-8 text-white sticky top-32">
                  <h3 className="text-xl font-bold mb-8">Order Summary</h3>
                  
                  <div className="flex gap-4 mb-8">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                      <Image src={course.image} alt={course.title} fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm line-clamp-2 mb-1">{course.title}</h4>
                      <p className="text-xs text-white/60">{course.instructor}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-white/10 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Course Price</span>
                      <span className="font-bold">${course.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Discount</span>
                      <span className="text-yellow-400 font-bold">-$0.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-4 border-t border-white/10">
                      <span>Total</span>
                      <span>${course.price}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePayment}
                    disabled={isProcessing || isSuccess}
                    className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-[#003D33] rounded-2xl font-bold text-lg transition-all"
                  >
                    {isProcessing ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
                    ) : isSuccess ? (
                      <><CheckCircle2 className="w-5 h-5 mr-2" /> Success!</>
                    ) : (
                      "Complete Purchase"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#003D33]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-[60px] p-12 max-w-md w-full text-center"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-[#003D33] mb-4">Payment Successful!</h2>
              <p className="text-slate-500 mb-10">
                You have successfully enrolled in <span className="font-bold text-[#003D33]">{course.title}</span>. 
                Redirecting you to the course player...
              </p>
              <div className="flex justify-center">
                <Loader2 className="w-8 h-8 text-[#003D33] animate-spin" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
