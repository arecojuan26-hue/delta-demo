"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 150, suffix: "+", label: "Proyectos Ejecutados" },
  { value: 80, suffix: "+", label: "Empresas Atendidas" },
  { value: 200, suffix: "+", label: "Sistemas Instalados" },
  { value: 15, suffix: "+", label: "Anos de Experiencia" },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  const ref = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        ref.current = requestAnimationFrame(animate)
      }
    }
    ref.current = requestAnimationFrame(animate)
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current)
    }
  }, [target, duration, start])

  return count
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [inView, setInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 2000, inView)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.3 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group text-center animate-fade-up ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <p className="mb-2 text-4xl font-bold md:text-5xl">
        <span className="bg-gradient-to-r from-[#1e88e5] to-[#90caf9] bg-clip-text text-transparent">
          {count}{suffix}
        </span>
      </p>
      <p className="text-sm font-medium uppercase tracking-wider text-white/50">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-[#071a42] to-[#0a2463] py-16 lg:py-24 overflow-hidden" aria-label="Indicadores de experiencia">
      {/* Subtle animated wave */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 2880 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 h-24 w-[200%] animate-wave-drift-slow opacity-[0.03]"
          preserveAspectRatio="none"
        >
          <path d="M0 100C480 60 960 140 1440 100C1920 60 2400 140 2880 100V200H0Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} delay={0.1 * (idx + 1)} />
          ))}
        </div>
      </div>
    </section>
  )
}
