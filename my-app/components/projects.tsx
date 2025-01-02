"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-[1px] border-[#374151]"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-black/20 rounded-full text-sm text-gray-300 border-[1px] border-[#374151]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

