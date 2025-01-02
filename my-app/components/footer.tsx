"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-transparent text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-200 transition-colors"
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-200 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

