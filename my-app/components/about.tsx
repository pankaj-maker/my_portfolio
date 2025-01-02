"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl my-8 text-black"
    >
      <h2 className="text-2xl font-bold mb-4 text-black">About Me</h2>
      <p className="mb-4 text-black">
        I am a passionate web developer with expertise in modern web technologies.
        I love creating responsive and user-friendly applications that solve real-world problems.
        My focus is on writing clean, efficient code and implementing best practices in web development.
      </p>
      <p className="text-black">
        When I'm not coding, I enjoy learning new technologies and contributing to open-source projects.
        I believe in continuous learning and staying updated with the latest trends in web development.
      </p>
    </motion.section>
  )
}

