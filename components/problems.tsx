"use client"

import { AlertTriangle, DollarSign, ShieldAlert, Wrench, FileWarning, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const problems = [
  {
    icon: Wrench,
    problem: "Agua dura que dana maquinaria",
    solution: "Sistemas de ablandamiento que prolongan la vida util de sus equipos.",
  },
  {
    icon: AlertTriangle,
    problem: "Incrustaciones y fallas en equipos",
    solution: "Tratamiento preventivo que elimina depositos y reduce paradas no programadas.",
  },
  {
    icon: ShieldAlert,
    problem: "Riesgo de multas por efluentes",
    solution: "Plantas de tratamiento que aseguran el cumplimiento normativo.",
  },
  {
    icon: DollarSign,
    problem: "Altos costos de mantenimiento",
    solution: "Optimizacion de procesos que reduce hasta un 40% los costos operativos.",
  },
  {
    icon: FileWarning,
    problem: "Incumplimiento normativo",
    solution: "Gestion integral de tramitaciones y adecuacion tecnica a regulaciones vigentes.",
  },
]

export function Problems() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-20 lg:py-28" aria-labelledby="problemas-titulo">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Diagnostico
          </p>
          <h2 id="problemas-titulo" className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">
            Problemas que Resolvemos
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Conectamos con los desafios reales de la industria y los resolvemos con ingenieria aplicada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a2463] to-[#1e88e5] shadow-lg shadow-[#0a2463]/20 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.problem}
              </h3>
              <div className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
