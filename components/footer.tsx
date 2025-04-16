"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { AnimatedLogo } from "./logo"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] to-[#0f766e] text-white mt-auto overflow-hidden z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/30 to-transparent" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <AnimatedLogo />
            <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
              EntryIQ is a next-gen ticket booking platform that simplifies event management — from online bookings and real-time updates to analytics and check-ins.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800/50 rounded-full hover:bg-emerald-600 transition-colors shadow-lg backdrop-blur-md"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10"
          >
            <h3 className="font-bold text-white text-lg mb-4">📞 Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>support@kistsync.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Technopark, Jatani, BBSR - 752050</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-lg font-bold text-white">🚀 Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {["Home", "Features", "Pricing", "Docs", "Careers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-emerald-400 transition duration-200 relative group">
                    <span className="group-hover:underline">{item}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="glass-card p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-3">📬 Stay in the Loop</h3>
            <p className="text-sm text-gray-300 mb-4">Get updates on features, releases & community news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-l-md bg-gray-800/80 text-sm placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
              <button className="px-4 py-2 bg-emerald-500 text-sm font-semibold rounded-r-md hover:bg-emerald-600 transition">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} EntryIQ · All rights reserved</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-400 transition">Terms</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
