import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = [
  {
    title: "Servicios",
    links: [
      "Osmosis Inversa Industrial",
      "Ablandadores de Agua",
      "Sistemas de Filtracion",
      "Plantas de Efluentes",
      "Mantenimiento Preventivo",
      "Gestiones Tecnicas",
    ],
  },
  {
    title: "Sectores",
    links: [
      "Industria Automotriz",
      "Industria Alimenticia",
      "Universidades",
      "Hoteles",
      "Plantas Industriales",
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-[#050e20] text-white overflow-hidden" role="contentinfo">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e88e5]/30 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e88e5] to-[#1565c0] shadow-lg shadow-[#1e88e5]/30">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold leading-tight">Delta</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e88e5]">
                  Ingenieria
                </p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/40">
              Soluciones integrales de ingenieria en tratamiento de agua y efluentes para la industria argentina.
            </p>
            <div className="space-y-3">
              <a href="tel:+5493511234567" className="group flex items-center gap-2 text-sm text-white/40 transition-all duration-300 hover:text-[#1e88e5]">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                +54 351 123-4567
              </a>
              <a href="mailto:info@deltaingenieria.com.ar" className="group flex items-center gap-2 text-sm text-white/40 transition-all duration-300 hover:text-[#1e88e5]">
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                info@deltaingenieria.com.ar
              </a>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="h-4 w-4 shrink-0" />
                Cordoba, Argentina
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/35 transition-all duration-300 hover:text-[#1e88e5] hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
              Contacto Rapido
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/35">
              Solicite una evaluacion tecnica sin compromiso para su empresa o planta industrial.
            </p>
            <a
              href="#contacto"
              className="btn-ripple inline-flex items-center rounded-xl bg-gradient-to-r from-[#1e88e5] to-[#1565c0] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1e88e5]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#1e88e5]/30 hover:brightness-110"
            >
              Solicitar Cotizacion
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/25">
              {new Date().getFullYear()} Delta Ingenieria. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/25">
              Cordoba, Argentina | Tratamiento de Agua y Efluentes
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
