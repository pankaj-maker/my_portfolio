"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold text-xl">PP</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-white hover:text-cyan-300 transition-colors ${
                  activeSection === item.toLowerCase() ? "text-cyan-300" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

