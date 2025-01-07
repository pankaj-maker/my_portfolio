"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formEndpoint = "https://getform.io/f/bolljjwa" // Replace with your actual Getform endpoint URL

    const data = new FormData()
    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("message", formData.message)

    // Log form data
    console.log("Form data being submitted:", formData)

    fetch(formEndpoint, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true)
        } else {
          console.error("Form submission failed:", response)
          return response.text() // Get more info from the server
        }
      })
      .then((errorMessage) => {
        if (errorMessage) {
          console.error("Server error message:", errorMessage)
        }
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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

        {isSubmitted ? (
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold mb-4">Thank you for your submission!</h3>
            <p className="text-gray-300">We will get back to you soon.</p>
          </div>
        ) : (
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/20 text-white placeholder-gray-400 border-gray-700 p-3"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 p-3">
              {isSubmitted ? "Submitted" : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </motion.section>
  )
}
