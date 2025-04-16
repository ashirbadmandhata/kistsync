"use client"

import { motion } from "framer-motion"
import { AnimatedLogo } from "./logo"
// import { AnimatedLogo } from "./AnimatedLogo"

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white">
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center gap-6 text-center px-4">
        
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedLogo />
        </motion.div>

        {/* App Name */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Welcome to EntryIQ Developed By Swapna and Group
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base text-white/80 max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          College event ticketing made simple. Get ready to explore, book, and enjoy — all in one place. Developed by Swapna and Group.
        </motion.p>
      </div>
    </div>
  )
}
