"use client"

import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" aria-label="Presentacion principal">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={75}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2463]/95 via-[#0a2463]/85 to-[#071a42]/80" />

      {/* Animated water particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-1/4 left-1/4 h-1 w-1 rounded-full bg-[#1e88e5]/40 water-particle" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-1/3 left-1/2 h-1.5 w-1.5 rounded-full bg-[#1e88e5]/30 water-particle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-3/4 h-1 w-1 rounded-full bg-[#1e88e5]/25 water-particle" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/6 h-1 w-1 rounded-full bg-[#90caf9]/30 water-particle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 left-2/3 h-1.5 w-1.5 rounded-full bg-[#90caf9]/20 water-particle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/2 left-1/3 h-1 w-1 rounded-full bg-[#1e88e5]/20 water-particle" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-1/3 right-1/4 h-1 w-1 rounded-full bg-[#1e88e5]/35 water-particle" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-1/2 right-1/3 h-1.5 w-1.5 rounded-full bg-[#90caf9]/25 water-particle" style={{ animationDelay: "3.5s" }} />
      </div>

      {/* Animated Waves Bottom - double layered */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 2880 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-[200%] animate-wave-drift-slow lg:h-28"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L120 75C240 70 480 60 720 55C960 50 1200 50 1440 55C1680 60 1920 70 2160 75C2400 80 2640 80 2760 80L2880 80V120H0V80Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
        <svg
          viewBox="0 0 2880 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 h-16 w-[200%] animate-wave-drift lg:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L120 55C240 50 480 40 720 45C960 50 1200 70 1440 75C1680 70 1920 50 2160 45C2400 40 2640 55 2760 60L2880 65V120H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1e88e5]/30 bg-[#1e88e5]/10 px-5 py-2 text-sm font-medium text-[#90caf9] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#1e88e5] animate-pulse" />
            Ingenieria en Tratamiento de Agua
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white text-balance md:text-5xl lg:text-6xl">
            Soluciones Industriales en{" "}
            <span className="bg-gradient-to-r from-[#1e88e5] to-[#90caf9] bg-clip-text text-transparent">
              Tratamiento de Agua
            </span>{" "}
            y Efluentes
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/60 text-pretty md:text-xl">
            Optimice procesos, reduzca costos operativos y cumpla normativas con
            respaldo tecnico especializado.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="btn-ripple bg-gradient-to-r from-[#1e88e5] to-[#1565c0] text-lg font-semibold text-white shadow-xl shadow-[#1e88e5]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1e88e5]/40 hover:brightness-110"
              asChild
            >
              <a href="#contacto">
                Solicitar Asesoramiento Tecnico
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white hover:shadow-lg"
              asChild
            >
              <a href="#contacto">Pedir Cotizacion</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-white/40">
            <Clock className="h-4 w-4" />
            <span>Respuesta en menos de 24 hs.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
