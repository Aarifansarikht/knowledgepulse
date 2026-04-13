'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Share2, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Community() {
  const features = [
    "The simple and intuitive design makes it easy for anyone to use.",
    "The platform is highly customizable, allowing you to tailor it to your specific needs.",
    "The platform is highly scalable, allowing you to grow your business without any limitations."
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33]">
              Why KnowledgePulse?
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              This platform&apos;s simplicity belies its powerful capabilities, offering a seamless and enjoyable educational experience.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F1F8F6] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#003D33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <Button className="bg-[#003D33] hover:bg-[#002D26] text-white font-bold px-10 py-7 rounded-md shadow-lg shadow-[#003D33]/20">
              Learn More
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Shapes */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F1F8F6] rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-100 rounded-full -z-10" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-10">
                <Image 
                  src="https://picsum.photos/seed/why-kp/800/800" 
                  alt="Why KnowledgePulse" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
