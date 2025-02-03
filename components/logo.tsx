"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function AnimatedLogo() {
  return (
    <Link href="/" className="relative group">
      <motion.div
        className="relative flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo Icon */}
        <div className="relative w-8 h-8">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-blue-500/30 rounded-lg blur-lg group-hover:bg-blue-400/40 transition-colors duration-300" />

          {/* Main Logo Shape */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              aria-hidden="true"
            >
              {/* Outer Circle */}
              <motion.circle
                cx="16"
                cy="16"
                r="15"
                stroke="url(#emeraldBlueGradient)"
                strokeWidth="2"
                className="origin-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Stylized "K" */}
              <motion.path
                d="M10 8V24M10 16L22 8M10 16L22 24"
                stroke="url(#emeraldBlueGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Connecting Dots */}
              {[
                { cx: 10, cy: 8 },
                { cx: 10, cy: 24 },
                { cx: 10, cy: 16 },
                { cx: 22, cy: 8 },
                { cx: 22, cy: 24 },
              ].map((dot, index) => (
                <motion.circle
                  key={index}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="1.5"
                  fill="#10B981"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
              ))}

              {/* Gradient Definition */}
              <defs>
                <linearGradient id="emeraldBlueGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Logo Text */}
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          I S T S Y N C
        </motion.span>
      </motion.div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl rounded-full" />
      </motion.div>
    </Link>
  )
}

