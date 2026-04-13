import React from 'react';
import Link from 'next/link';
import { Instagram, Globe, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003D33] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              KnowledgePulse
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Join now to receive personalized recommendations from the full Coursera catalog.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-4">
              {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-4">
              {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            Designed by@Rubel, 2023, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
