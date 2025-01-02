"use client"

import { useEffect, useRef } from 'react'

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  fadeSpeed: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.size = Math.random() * 2
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
    this.opacity = Math.random() * 0.5 // Reduced initial opacity for subtler effect
    this.fadeSpeed = 0.01
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.opacity += (Math.random() - 0.5) * 0.1
    if (this.opacity < 0) this.opacity = 0
    if (this.opacity > 0.5) this.opacity = 0.5 // Cap maximum opacity
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    ctx.fill()
  }
}

export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 8000) // Increased particle density
      particles.current = []
      for (let i = 0; i < numberOfParticles; i++) {
        particles.current.push(
          new Particle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          )
        )
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.current.forEach(particle => {
        particle.update()
        particle.draw(ctx)

        // Wrap particles around the screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createParticles()
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

