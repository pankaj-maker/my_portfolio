"use client"

import { motion } from "framer-motion"
import { Blocks, Server, Cog, Smartphone, CodepenIcon as ReactIcon, Box, FileCode, Code, Database, Workflow, Cloud, Container, Settings, Cpu } from 'lucide-react'

const skillsData = {
  Frontend: [
    { name: "React.js", icon: <ReactIcon className="w-4 h-4" /> },
    { name: "Next.js", icon: <Box className="w-4 h-4" /> },
    { name: "TypeScript", icon: <FileCode className="w-4 h-4" /> },
    { name: "HTML5/CSS3", icon: <Code className="w-4 h-4" /> },
    { name: "Tailwind", icon: <Box className="w-4 h-4" /> },
    { name: "JavaScript", icon: <FileCode className="w-4 h-4" /> },
    { name: "ShadcnUi", icon: <Box className="w-4 h-4" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <Server className="w-4 h-4" /> },
    { name: "Express.js", icon: <Server className="w-4 h-4" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
    { name: "Bun", icon: <Server className="w-4 h-4" /> },
    { name: "Hono", icon: <Server className="w-4 h-4" /> },
    { name: "Prisma", icon: <Database className="w-4 h-4" /> },
    { name: "Supabase", icon: <Server className="w-4 h-4" /> },
    
  ],
  Tools: [
    { name: "Notion", icon: <Container className="w-4 h-4" /> },
    { name: "Erasor.io", icon: <Cloud className="w-4 h-4" /> },
    { name: "Postman", icon: <Settings className="w-4 h-4" /> },
    { name: "Figma", icon: <Workflow className="w-4 h-4" /> },

  ],
  Platforms: [
    { name: "Cloudflare", icon: <Cloud className="w-4 h-4" /> },
    { name: "Vercel", icon: <Cpu className="w-4 h-4" /> },
  ]
}

const SkillCategory = ({ title, skills, icon }: { title: string, skills: typeof skillsData.Frontend, icon: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-black/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border-[1px] border-[#374151]"
  >
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-black/20 text-white px-4 py-2 rounded-full text-sm border-[1px] border-[#374151]"
        >
          {skill.icon}
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <SkillCategory title="Frontend" skills={skillsData.Frontend} icon={<Blocks className="w-6 h-6 text-blue-400" />} />
        <SkillCategory title="Backend" skills={skillsData.Backend} icon={<Server className="w-6 h-6 text-green-400" />} />
        <SkillCategory title="Tools" skills={skillsData.Tools} icon={<Cog className="w-6 h-6 text-orange-400" />} />
        <SkillCategory title="Platforms" skills={skillsData.Platforms} icon={<Smartphone className="w-6 h-6 text-purple-400" />} />
      </div>
    </section>
  )
}

