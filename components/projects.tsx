"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fisker Next",
    description:
      "This interactive web application allows users to personalize cars by changing the color, tires, and interior features. Built with modern web technologies, it provides a seamless and engaging experience for users to customize their vehicle to their liking in real time",
    technologies: ["Next.js", "Jsx", "React", "Figma"],
    github: "https://github.com/pankaj-maker/fisker-next", // Replace with your project GitHub link
    live: "https://fisker-next-five.vercel.app", // Replace with your live demo link
  },
  {
    title: "Password Generator",
    description:
      "A secure and user-friendly password generator website that creates strong, random passwords with just a click. It allows users to customize password length and complexity to ensure maximum security.",
    technologies: ["React", "Tailwind", "Vite"],
    github: "https://github.com/pankaj-maker/password_generator",
    live: "https://glistening-toffee-179c13.netlify.app",
  },
  {
    title: "Pokemon",
    description:
      "I built a Pokémon website that allows users to search for their favorite Pokémon and view them as interactive cards. The site features a smooth user experience, where each card showcases essential details about the Pokémon, making it easy to explore the Pokémon universe and submission with an intuitive UI.",
    technologies: ["javascript", "Tailwind CSS", "Vite"],
    github: "https://github.com/pankaj-maker/pokedex", // Replace with your project GitHub link
    live: "https://pokemo-pokemon.netlify.app", // Replace with your live demo link
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Projects
      </h2>
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
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h3>
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
  );
}
