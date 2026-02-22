"use client"

import { Factory, UtensilsCrossed, GraduationCap, Building2, Landmark } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const industries = [
  {
    icon: Factory,
    title: "Industria Automotriz",
    description:
      "Tratamiento de agua de proceso, torres de enfriamiento y efluentes industriales para plantas automotrices con altos estandares de calidad.",
  },
  {
    icon: UtensilsCrossed,
    title: "Industria Alimenticia",
    description:
      "Agua purificada para produccion, vapor sanitario y tratamiento de efluentes cumpliendo regulaciones del sector alimenticio.",
  },
  {
    icon: GraduationCap,
    title: "Universidades e Instituciones",
    description:
      "Sistemas de agua potable, calderas y laboratorios para campus universitarios y centros de investigacion.",
  },
  {
    icon: Building2,
    title: "Hoteles y Establecimientos",
    description:
      "Ablandamiento y purificacion para calderas, lavanderias, piscinas y suministro general de agua de calidad.",
  },
  {
    icon: Landmark,
    title: "Plantas Industriales",
    description:
      "Soluciones integrales para cualquier tipo de planta industrial que requiera tratamiento de agua o efluentes a medida.",
  },
]

export function IndustrySolutions() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="industrias" className="relative bg-gradient-to-b from-[#0a2463] to-[#071a42] py-20 lg:py-28 overflow-hidden" aria-labelledby="industrias-titulo">
      {/* Animated background wave */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 2880 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/3 h-40 w-[200%] animate-wave-drift-slow opacity-[0.04]"
          preserveAspectRatio="none"
        >
          <path d="M0 100C480 50 960 150 1440 100C1920 50 2400 150 2880 100V200H0Z" fill="white" />
        </svg>
      </div>

      {/* Wave Top Transition */}
      <div className="pointer-events-none absolute -top-px left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="h-16 w-full lg:h-20">
          <path d="M0 80V40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0Z" fill="#0a2463" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1e88e5]">
            Sectores que Atendemos
          </p>
          <h2 id="industrias-titulo" className="mb-4 text-3xl font-bold text-white text-balance md:text-4xl">
            Soluciones para la Industria
          </h2>
          <p className="text-lg leading-relaxed text-white/50">
            Diseno a medida, instalacion profesional y soporte continuo para cada sector.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#1e88e5]/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-[#1e88e5]/10 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e88e5] to-[#1565c0] shadow-lg shadow-[#1e88e5]/30 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
