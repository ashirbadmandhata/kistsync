"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { AnimatedLogo } from "./logo"

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white mt-auto">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <AnimatedLogo />
            <p className="text-gray-400 text-sm max-w-xs">
              KISTSYNC is an open-source platform that serves as an all-in-one replacement for project management and
              team collaboration tools.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>


        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Mail className="w-5 h-5 mt-0.5 text-emerald-500" />
                  <span>support@kistsync.com</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 text-emerald-500" />
                  <span>Technopark, Jatani, BBSR 752050</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Phone className="w-5 h-5 mt-0.5 text-emerald-500" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
        >
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} KISTSYNC. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select className="text-sm text-gray-400 bg-gray-800 border-gray-700 rounded-md focus:ring-emerald-500 focus:border-emerald-500">
              <option>English (US)</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>Español</option>
            </select>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

