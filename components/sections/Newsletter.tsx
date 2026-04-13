'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <section className="py-20 bg-[#F1F8F6] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-40 h-40 bg-[#003D33]/10 rounded-full" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-40 h-40 bg-[#003D33]/10 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#003D33] relative inline-block">
            <span className="relative z-10">Subscribe Our Newsletter</span>
            <svg className="absolute -left-4 -top-2 -right-4 -bottom-2 w-[calc(100%+2rem)] h-[calc(100%+1rem)] text-yellow-300 -z-10" viewBox="0 0 300 100" preserveAspectRatio="none">
              <ellipse cx="150" cy="50" rx="145" ry="45" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </h2>
          
          <p className="text-slate-600 max-w-lg mx-auto">
            Join now to receive personalized recommendations from the full Coursera catalog.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto bg-white rounded-md overflow-hidden shadow-sm border border-slate-100">
            <Input 
              type="email" 
              placeholder="Enter your mail" 
              className="flex-1 border-none focus-visible:ring-0 h-14 px-6 text-slate-900 placeholder:text-slate-400"
            />
            <Button className="bg-[#003D33] hover:bg-[#002D26] text-white h-14 px-10 rounded-none font-bold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
