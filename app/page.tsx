import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Sparkles from "@/components/sparkles"



export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <Sparkles />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <div className="container mx-auto px-6">
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  )
}

