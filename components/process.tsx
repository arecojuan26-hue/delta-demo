"use client"

import { Search, PenTool, Wrench, Zap, BarChart3 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: Search,
    title: "Diagnostico",
    description: "Relevamiento in situ de las condiciones del agua, equipos existentes y necesidades especificas.",
  },
  {
    icon: PenTool,
    title: "Diseno",
    description: "Ingenieria personalizada con planos tecnicos, memorias de calculo y seleccion de equipos.",
  },
  {
    icon: Wrench,
    title: "Instalacion",
    description: "Montaje profesional con personal calificado, cumpliendo estandares de seguridad industrial.",
  },
  {
    icon: Zap,
    title: "Puesta en Marcha",
    description: "Arranque controlado, calibracion de parametros y capacitacion del personal operativo.",
  },
  {
    icon: BarChart3,
    title: "Seguimiento",
    description: "Mantenimiento programado, monitoreo de rendimiento y soporte tecnico continuo.",
  },
]

export function Process() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="proceso" className="relative bg-gradient-to-b from-[#0a2463] to-[#071a42] py-20 lg:py-28 overflow-hidden" aria-labelledby="proceso-titulo">
      {/* Subtle animated background wave */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 2880 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 h-32 w-[200%] animate-wave-drift opacity-[0.03]"
          preserveAspectRatio="none"
        >
          <path d="M0 100C480 60 960 140 1440 100C1920 60 2400 140 2880 100V200H0Z" fill="white" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1e88e5]">
            Metodologia
          </p>
          <h2 id="proceso-titulo" className="mb-4 text-3xl font-bold text-white text-balance md:text-4xl">
            Proceso de Trabajo
          </h2>
          <p className="text-lg leading-relaxed text-white/50">
            Una metodologia estructurada que garantiza resultados predecibles y medibles.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting Line with gradient */}
            <div className="absolute left-[10%] right-[10%] top-8 h-0.5 bg-gradient-to-r from-[#1e88e5]/20 via-[#1e88e5]/40 to-[#1e88e5]/20" />

            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative z-10 flex w-1/5 flex-col items-center text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${0.15 * (idx + 1)}s` }}
              >
                <div className="group mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#1e88e5]/40 bg-[#0a2463] shadow-lg shadow-[#1e88e5]/20 transition-all duration-300 hover:border-[#1e88e5] hover:shadow-xl hover:shadow-[#1e88e5]/30">
                  <step.icon className="h-7 w-7 text-[#1e88e5] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="mb-1 text-xs font-bold uppercase tracking-widest text-[#1e88e5]">
                  Paso {idx + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex gap-4 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#1e88e5]/40 bg-[#0a2463] shadow-lg shadow-[#1e88e5]/20">
                  <step.icon className="h-5 w-5 text-[#1e88e5]" />
                </div>
                {idx < steps.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-[#1e88e5]/30 to-transparent" />
                )}
              </div>
              <div className="pb-8">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-[#1e88e5]">
                  Paso {idx + 1}
                </span>
                <h3 className="mb-1 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
