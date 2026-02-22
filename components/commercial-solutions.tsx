"use client"

import { Droplets, ShieldCheck, Wrench, Headphones } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const commercialServices = [
  {
    icon: Droplets,
    title: "Sistemas Compactos",
    description: "Equipos de tratamiento de agua disenados para espacios reducidos con maxima eficiencia.",
  },
  {
    icon: ShieldCheck,
    title: "Ablandadores Comerciales",
    description: "Ablandamiento profesional para comercios, restaurantes, hoteles y establecimientos.",
  },
  {
    icon: Wrench,
    title: "Equipos de Purificacion",
    description: "Sistemas de osmosis inversa y filtracion para agua de consumo y uso comercial.",
  },
  {
    icon: Headphones,
    title: "Servicio Tecnico",
    description: "Atencion tecnica especializada, mantenimiento y repuestos para todos los equipos.",
  },
]

export function CommercialSolutions() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="bg-secondary/50 py-20 lg:py-28" aria-labelledby="comercial-titulo">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Tambien para Comercios
          </p>
          <h2 id="comercial-titulo" className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">
            Soluciones para Comercios y Residencial Premium
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Equipos profesionales adaptados a necesidades comerciales y residenciales de alta gama.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commercialServices.map((service, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl border border-border/60 bg-background p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e88e5]/10 to-[#0a2463]/10 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
