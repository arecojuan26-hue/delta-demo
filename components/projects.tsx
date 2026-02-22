"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    image: "/images/project-1.jpg",
    client: "Denso Argentina",
    solution: "Sistema de Osmosis Inversa Industrial",
    result: "Reduccion del 45% en costos de tratamiento quimico y agua de alta pureza para procesos criticos.",
  },
  {
    image: "/images/project-2.jpg",
    client: "Universidad Siglo 21",
    solution: "Ablandadores de Agua para Campus",
    result: "Eliminacion total de incrustaciones en calderas y extension de vida util de equipos.",
  },
  {
    image: "/images/project-3.jpg",
    client: "Gestamp Cordoba",
    solution: "Planta de Tratamiento de Efluentes",
    result: "Cumplimiento normativo al 100% y habilitacion ambiental obtenida en tiempo record.",
  },
  {
    image: "/images/project-4.jpg",
    client: "Dayco Argentina",
    solution: "Mantenimiento Preventivo Integral",
    result: "Reduccion del 60% en paradas no programadas y optimizacion de costos operativos.",
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="proyectos" className="py-20 lg:py-28" aria-labelledby="proyectos-titulo">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h2 id="proyectos-titulo" className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">
            Proyectos Realizados
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Ingenieria real aplicada a desafios industriales concretos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className={`group overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.15 * (idx + 1)}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Proyecto: ${project.solution} para ${project.client}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2463]/70 via-[#0a2463]/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-gradient-to-r from-[#1e88e5] to-[#1565c0] px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-[#1e88e5]/30">
                    {project.client}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {project.solution}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
