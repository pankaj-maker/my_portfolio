"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto text-center flex flex-col items-center justify-center h-screen"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Hello, I&apos;m a Web Developer
        </h1>
        <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-2xl">
          Building the future of web development with modern technologies and clean, efficient code.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-4"
          >
            Hire me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-4"
          >
            Resume
          </Button>
        </div>
      </motion.div>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-xl my-8 text-white max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
        <p className="mb-4 text-lg text-gray-300">
          I am a passionate web developer with expertise in modern web technologies.
          I love creating responsive and user-friendly applications that solve real-world problems.
          My focus is on writing clean, efficient code and implementing best practices in web development.
        </p>
        <p className="text-lg text-gray-300">
          When I'm not coding, I enjoy learning new technologies and contributing to open-source projects.
          I believe in continuous learning and staying updated with the latest trends in web development.
        </p>
      </motion.div>
    </section>
  )
}

