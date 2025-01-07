"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false) // State to track submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevent the default form submission behavior

    setIsSubmitted(true) // Update the state to show that the form is submitted
    // You can handle the form data here, e.g., send it to a server or API
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-xl p-8 max-w-2xl mx-auto border-[1px] border-[#374151]">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-black/20 text-white placeholder-gray-400 border-gray-700 p-3"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-black/20 text-white placeholder-gray-400 border-gray-700 p-3"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-black/20 text-white placeholder-gray-400 border-gray-700 p-3"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 p-3">
            {isSubmitted ? "Submitted" : "Send Message"} 
          </Button>
        </form>
      </div>
    </motion.section>
  )
}
