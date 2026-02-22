"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Industrias", href: "#industrias" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-[#0a2463]/80 shadow-xl shadow-[#0a2463]/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e88e5] to-[#1565c0] shadow-lg shadow-[#1e88e5]/30 transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight text-white">
              Delta
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e88e5]">
              Ingenieria
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:rounded-full after:bg-[#1e88e5] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-3/4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/5"
            asChild
          >
            <a href="tel:+5493511234567">
              <Phone className="mr-2 h-4 w-4" />
              Llamar Ahora
            </a>
          </Button>
          <Button
            size="sm"
            className="btn-ripple bg-gradient-to-r from-[#1e88e5] to-[#1565c0] text-white shadow-lg shadow-[#1e88e5]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#1e88e5]/40 hover:brightness-110"
            asChild
          >
            <a href="#contacto">Solicitar Cotizacion</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#0a2463]/95 backdrop-blur-xl transition-all duration-500 ease-out lg:hidden ${
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4" aria-label="Navegacion movil">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <Button
              variant="outline"
              className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="tel:+5493511234567">
                <Phone className="mr-2 h-4 w-4" />
                Llamar Ahora
              </a>
            </Button>
            <Button
              className="btn-ripple w-full bg-gradient-to-r from-[#1e88e5] to-[#1565c0] text-white"
              asChild
            >
              <a href="#contacto">Solicitar Cotizacion</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
