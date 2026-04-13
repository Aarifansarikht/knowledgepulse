'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { MOCK_CATEGORIES } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003D33] mb-4">
              Our most popular categories
            </h2>
            <p className="text-slate-600">
              Explore our most popular categories and find the perfect course for you.
            </p>
          </div>
          <button className="text-[#003D33] font-bold text-sm hover:underline transition-all">
            See All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {MOCK_CATEGORIES.map((category, index) => {
            const IconComponent = (Icons as any)[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-8 rounded-2xl bg-[#F1F8F6] hover:bg-[#003D33] transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10 transition-colors">
                  {IconComponent && <IconComponent className="w-8 h-8 text-[#003D33] group-hover:text-white" />}
                </div>
                <h3 className="text-lg font-bold text-[#003D33] group-hover:text-white mb-2 transition-colors">{category.name}</h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">{(category as any).coursesCount || 0} Courses</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
