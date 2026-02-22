"use client"

import { ClipboardCheck, Microscope, PenTool, Wrench, Zap, CalendarCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const capabilities = [
  {
    icon: Microscope,
    title: "Diagnostico In Situ",
    description: "Analisis completo de las condiciones del agua y evaluacion de la infraestructura existente en su planta.",
  },
  {
    icon: ClipboardCheck,
    title: "Ingenieria Personalizada",
    description: "Desarrollo de soluciones a medida basadas en datos reales y requerimientos especificos de su operacion.",
  },
  {
    icon: PenTool,
    title: "Diseno Tecnico",
    description: "Planos, diagramas P&ID, memorias de calculo y especificaciones tecnicas profesionales.",
  },
  {
    icon: Wrench,
    title: "Instalacion Profesional",
    description: "Montaje con personal propio calificado, cumpliendo estandares de seguridad e higiene industrial.",
  },
  {
    icon: Zap,
    title: "Puesta en Marcha",
    description: "Arranque controlado, ajuste de parametros, pruebas de rendimiento y validacion del sistema.",
  },
  {
    icon: CalendarCheck,
    title: "Seguimiento Programado",
    description: "Mantenimiento preventivo planificado, monitoreo de indicadores y soporte tecnico permanente.",
  },
]

export function TechnicalCapabilities() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-20 lg:py-28" aria-labelledby="capacidad-titulo">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Capacidad Tecnica
          </p>
          <h2 id="capacidad-titulo" className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">
            Respaldo Tecnico Integral
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Desde el diagnostico inicial hasta el mantenimiento continuo, cada etapa cuenta con respaldo de ingenieria.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`group flex gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a2463] to-[#1e88e5] shadow-md shadow-[#0a2463]/20 transition-transform duration-300 group-hover:scale-110">
                <cap.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
