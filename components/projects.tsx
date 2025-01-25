"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fisker Next",
    description:
      "This interactive web application allows users to personalize cars by changing the color, tires, and interior features. Built with modern web technologies, it provides a seamless and engaging experience for users to customize their vehicle to their liking in real time.",
    technologies: ["Next.js", "Jsx", "React", "Figma"],
    image: "fisker.png", // Replace with your project image link
    github: "https://github.com/pankaj-maker/fisker-next",
    live: "https://fisker-next-five.vercel.app",
  },
  {
    title: "Password Generator",
    description:
      "A secure and user-friendly password generator website that creates strong, random passwords with just a click. It allows users to customize password length and complexity to ensure maximum security.",
    technologies: ["React", "Tailwind", "Vite"],
    image: "password.png", // Replace with your project image link
    github: "https://github.com/pankaj-maker/password_generator",
    live: "https://glistening-toffee-179c13.netlify.app",
  },
  {
    title: "Pokemon",
    description:
      "I built a Pokémon website that allows users to search for their favorite Pokémon and view them as interactive cards. The site features a smooth user experience, where each card showcases essential details about the Pokémon, making it easy to explore the Pokémon universe and submission with an intuitive UI.",
    technologies: ["javascript", "Tailwind CSS", "Vite"],
    image: "pokemon.png", // Replace with your project image link
    github: "https://github.com/pankaj-maker/pokedex",
    live: "https://pokemo-pokemon.netlify.app",
  },
  {
    title: "Naughts & Crosses",
    description:
      "A simple and intuitive game where players can play as either a naught or a cross. The game is designed to be challenging and engaging, with a focus on strategy and decision-making.",
    technologies: ["Html", "SCSS", "Javascript"],
    image: "naughts.png", // Replace with your project image link
    github: "https://github.com/pankaj-maker/naughts_and_crosses",
    live: "https://naughts-crossess.netlify.app",
  },
  {
    title: "Alpha-Tauri",
    description:
      "A visually captivating website showcasing the modern design and innovation of Alpha Tauri, built using HTML and CSS. The project focuses on elegant layouts, gradient backgrounds, and a seamless user experience, emphasizing creative aesthetics",
    technologies: ["Html", "CSS"],
    image: "alpha.png", // Replace with your project image link
    github: "https://github.com/pankaj-maker/alph-tauri",
    live: "https://alpha-tauri12.netlify.app",
  },
  {
    title: "inversify-string",
    description:
      "This project demonstrates a simple algorithm to reverse a string and then reverse it again to retrieve the original string. It showcases the basic understanding of string manipulation and logical thinking in coding, while also emphasizing problem-solving skills.",
    technologies: ["Html", "CSS", "JavaScript"],
    image: "inversify.png", // Replace with your project image link
    github: "https://github.com/pankaj-maker/inversify",
    live: "https://inversify-string.netlify.app",
  },
  {
    title: "Task-master",
    description:
      "This project is a Task Master app, designed to manage and organize tasks efficiently. Users can add, update, and delete tasks while tracking their progress. It helps enhance productivity and demonstrates the implementation of interactive UI components, data handling, and state management",
    technologies: ["Html", "CSS", "JavaScript"],
    image: "task.png", 
    github: "https://github.com/pankaj-maker/Taskmaster",
    live: "https://task-master01.netlify.app",
  },
  {
    title: "Rock-paper-scissors",
    description:
      "This is a Rock Paper Scissors game where users can choose their move and play against the computer. It features an interactive interface with real-time score tracking and smooth animations",
    technologies: ["Html", "CSS", "JavaScript"],
    image: "rock.png",
    github: "https://github.com/pankaj-maker/rock-paper-scissor",
    live: "https://rock-papar-scissor.netlify.app",
  },
  {
    title: "Untitled",
    description:
      "Untitled Content Form is designed to help you easily get in touch with our team. Whether you have a project idea, need assistance, or want to collaborate, simply fill out the form with your details and we'll get back to you promptly. We offer services in website design, UX, strategy, content, and more",
    technologies: ["Html", "Tailwind CSS", "JavaScript","React"],
    image: "untitled.png",
    github: "https://github.com/pankaj-maker/Untitled",
    live: "https://untitled-rho-cyan.vercel.app",
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
            {/* Image Preview */}
            <div className="w-full h-41">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-black/20 rounded-full text-xs text-gray-300 border-[1px] border-[#374151]"
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
