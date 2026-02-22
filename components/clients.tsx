"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const clients = [
  { name: "Universidad Siglo 21", sector: "Educacion" },
  { name: "Denso", sector: "Automotriz" },
  { name: "Dayco", sector: "Automotriz" },
  { name: "Gestamp", sector: "Automotriz" },
]

export function Clients() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="clientes" className="bg-secondary/50 py-20 lg:py-28" aria-labelledby="clientes-titulo">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Confianza Comprobada
          </p>
          <h2 id="clientes-titulo" className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">
            Empresas que Confian en Nosotros
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Experiencia comprobada en empresas de gran escala que requieren los mas altos estandares de ingenieria.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center rounded-2xl border border-border/60 bg-background p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2463]/10 to-[#1e88e5]/10 transition-transform duration-300 group-hover:scale-110">
                <span className="text-2xl font-bold bg-gradient-to-br from-[#0a2463] to-[#1e88e5] bg-clip-text text-transparent">
                  {client.name.charAt(0)}
                </span>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
