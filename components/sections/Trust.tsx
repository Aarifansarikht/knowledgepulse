'use client'

import { motion } from 'motion/react'

import Image from 'next/image'

const PARTNERS = [
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
  { name: 'GettyImages', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Getty_Images_Logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Fiverr', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg' },
  { name: 'Wish', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wish.com_logo.svg' },
]

export default function Trust() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-500 mb-8 font-medium">Join the 2000+ companies we&apos;re already learn with</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="h-8 relative w-32 flex items-center justify-center">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
