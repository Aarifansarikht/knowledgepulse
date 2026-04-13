'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F1F8F6]/80 backdrop-blur-md h-20 flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Logo />

        {/* Search Bar - Centered */}
        <div className="hidden md:flex flex-1 max-w-md relative mx-auto">
          <Input 
            placeholder="Search courses..." 
            className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl focus-visible:ring-[#003D33]/20 transition-all focus:bg-white"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        </div>

        {/* Desktop Navigation - Right */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-bold transition-colors",
                pathname === link.href 
                  ? "text-[#003D33]" 
                  : "text-slate-500 hover:text-[#003D33]"
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="h-6 w-px bg-slate-200 mx-2" />

          <Link href="/login">
            <Button className="bg-[#003D33] hover:bg-[#002D26] text-white px-8 font-bold rounded-xl h-11 shadow-lg shadow-[#003D33]/20 transition-all hover:scale-105 active:scale-95">
              Sign in
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-5 h-5 text-slate-600" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="hover:bg-slate-100 rounded-xl">
                <Menu className="w-6 h-6 text-slate-600" />
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] rounded-l-[40px] border-none">
              <div className="flex flex-col gap-8 mt-12">
                <Logo />
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-bold p-4 rounded-2xl transition-all",
                        pathname === link.href 
                          ? "bg-[#F1F8F6] text-[#003D33]" 
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 pt-8 border-t border-slate-100">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[#003D33] hover:bg-[#002D26] text-white py-6 h-auto rounded-2xl font-bold text-lg">
                      Sign in
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
