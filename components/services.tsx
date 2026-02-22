"use client"

import { Droplets, Waves, Filter, Recycle, Settings, FileText, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Droplets,
    title: "Osmosis Inversa Industrial",
    problem: "Elimina sales disueltas, contaminantes y microorganismos del agua.",
    economicBenefit: "Reduce costos de tratamiento quimico y reposicion de equipos.",
    operativeBenefit: "Agua de alta pureza para procesos criticos de produccion.",
    applications: "Calderas, laboratorios, industria farmaceutica y alimenticia.",
  },
  {
    icon: Waves,
    title: "Ablandadores de Agua",
    problem: "Elimina dureza del agua que genera incrustaciones y dano en equipos.",
    economicBenefit: "Extiende la vida util de calderas, intercambiadores y tuberias.",
    operativeBenefit: "Reduce paradas no programadas y mantenimiento correctivo.",
    applications: "Torres de enfriamiento, calderas, lavanderias industriales.",
  },
  {
    icon: Filter,
    title: "Sistemas de Filtracion",
    problem: "Remueve sedimentos, turbidez y particulas suspendidas del agua.",
    economicBenefit: "Protege equipos aguas abajo y reduce frecuencia de limpieza.",
    operativeBenefit: "Mejora la eficiencia de procesos dependientes de agua limpia.",
    applications: "Pretratamiento, agua de proceso, riego industrial.",
  },
  {
    icon: Recycle,
    title: "Plantas de Tratamiento de Efluentes",
    problem: "Trata aguas residuales para cumplir normativas de vertido.",
    economicBenefit: "Evita multas y permite reutilizacion de agua tratada.",
    operativeBenefit: "Cumplimiento garantizado de normativas ambientales vigentes.",
    applications: "Industria alimenticia, automotriz, quimica, textil.",
  },
  {
    icon: Settings,
    title: "Mantenimiento Preventivo y Correctivo",
    problem: "Evita fallas imprevistas y garantiza operacion continua.",
    economicBenefit: "Reduce costos de reparaciones de emergencia hasta un 60%.",
    operativeBenefit: "Mayor disponibilidad de equipos y continuidad operativa.",
    applications: "Todos los sistemas de tratamiento de agua instalados.",
  },
  {
    icon: FileText,
    title: "Gestion y Tramitaciones Tecnicas",
    problem: "Simplifica el cumplimiento de regulaciones y habilitaciones.",
    economicBenefit: "Evita sanciones y agiliza aprobaciones oficiales.",
    operativeBenefit: "Documentacion tecnica profesional lista para auditorias.",
    applications: "Habilitaciones ambientales, permisos de vertido, informes.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="servicios" className="py-20 lg:py-28" aria-labelledby="servicios-titulo">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mx-auto mb-16 max-w-2xl text-center animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Nuestros Servicios
          </p>
          <h2 id="servicios-titulo" className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">
            Servicios Principales
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Cada servicio esta disenado para resolver problemas concretos con beneficios medibles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={idx}
              className={`group flex flex-col rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a2463] to-[#1e88e5] shadow-lg shadow-[#0a2463]/20 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[#1e88e5]/30">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.problem}</p>

              <div className="mb-4 space-y-2 border-t border-border/60 pt-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm text-foreground">{service.economicBenefit}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a2463]" />
                  <p className="text-sm text-foreground">{service.operativeBenefit}</p>
                </div>
              </div>

              <div className="mt-auto border-t border-border/60 pt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Aplicaciones
                </p>
                <p className="mt-1 text-sm text-foreground">{service.applications}</p>
              </div>

              <a
                href="#contacto"
                className="mt-4 inline-flex items-center text-sm font-semibold text-accent transition-all duration-300 hover:gap-2 hover:text-[#0a2463]"
              >
                Consultar
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
