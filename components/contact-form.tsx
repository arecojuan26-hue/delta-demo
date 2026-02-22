"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

const serviceOptions = [
  "Osmosis Inversa Industrial",
  "Ablandadores de Agua",
  "Sistemas de Filtracion",
  "Planta de Tratamiento de Efluentes",
  "Mantenimiento Preventivo",
  "Gestion y Tramitaciones",
  "Otro",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="relative bg-gradient-to-b from-[#0a2463] to-[#071a42] py-20 lg:py-28 overflow-hidden" aria-labelledby="contacto-titulo">
      {/* Background animated wave */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 2880 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 h-32 w-[200%] animate-wave-drift-slow opacity-[0.03]"
          preserveAspectRatio="none"
        >
          <path d="M0 100C480 50 960 150 1440 100C1920 50 2400 150 2880 100V200H0Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 id="contacto-titulo" className="mb-4 text-3xl font-bold text-white text-balance md:text-4xl">
              Solicite una Evaluacion Tecnica para su Empresa
            </h2>
            <p className="text-lg text-white/50">
              Evaluacion profesional sin compromiso.
            </p>
          </div>

          {submitted ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e88e5] to-[#1565c0] shadow-xl shadow-[#1e88e5]/30">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Solicitud Enviada</h3>
              <p className="text-white/50">
                Nos pondremos en contacto con usted en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-sm font-medium text-white/70">
                    Nombre
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Su nombre completo"
                    required
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 transition-all duration-300 focus:border-[#1e88e5] focus:bg-white/[0.07] focus:ring-[#1e88e5]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-sm font-medium text-white/70">
                    Empresa
                  </Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    placeholder="Nombre de su empresa"
                    required
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 transition-all duration-300 focus:border-[#1e88e5] focus:bg-white/[0.07] focus:ring-[#1e88e5]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-sm font-medium text-white/70">
                    Telefono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+54 351 ..."
                    required
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 transition-all duration-300 focus:border-[#1e88e5] focus:bg-white/[0.07] focus:ring-[#1e88e5]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-white/70">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="correo@empresa.com"
                    required
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 transition-all duration-300 focus:border-[#1e88e5] focus:bg-white/[0.07] focus:ring-[#1e88e5]/20"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="servicio" className="text-sm font-medium text-white/70">
                    Tipo de Servicio
                  </Label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    className="flex h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background transition-all duration-300 focus:border-[#1e88e5] focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#1e88e5]/20"
                  >
                    <option value="" className="text-foreground">Seleccione un servicio</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-foreground">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="btn-ripple mt-6 w-full rounded-xl bg-gradient-to-r from-[#1e88e5] to-[#1565c0] text-lg font-semibold text-white shadow-xl shadow-[#1e88e5]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1e88e5]/40 hover:brightness-110"
              >
                Quiero Asesoramiento Tecnico
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
