'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Logo from '@/components/shared/Logo'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F1F8F6] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[40px] shadow-2xl shadow-[#003D33]/10 p-10"
      >
        <div className="flex justify-center mb-10">
          <Logo />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#003D33] mb-2">Welcome Back</h1>
          <p className="text-slate-500">Please enter your details to sign in</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#003D33] ml-1">Email Address</label>
            <div className="relative">
              <Input 
                type="email" 
                placeholder="name@example.com" 
                className="h-14 pl-12 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-[#003D33]">Password</label>
              <Link href="#" className="text-xs font-bold text-[#003D33] hover:underline">Forgot Password?</Link>
            </div>
            <div className="relative">
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="h-14 pl-12 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>

          <Button className="w-full h-14 bg-[#003D33] hover:bg-[#002D26] text-white rounded-2xl font-bold text-lg shadow-lg shadow-[#003D33]/20 transition-all group">
            Sign In
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <Button variant="outline" className="h-14 rounded-2xl border-slate-100 hover:bg-slate-50 transition-all">
            <Chrome className="w-5 h-5 mr-2" />
            Google
          </Button>
          <Button variant="outline" className="h-14 rounded-2xl border-slate-100 hover:bg-slate-50 transition-all">
            <Github className="w-5 h-5 mr-2" />
            Github
          </Button>
        </div>

        <p className="text-center text-slate-500 text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-[#003D33] font-bold hover:underline">Create Account</Link>
        </p>
      </motion.div>
    </main>
  )
}
