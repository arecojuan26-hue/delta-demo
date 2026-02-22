import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { IndustrySolutions } from "@/components/industry-solutions"
import { Services } from "@/components/services"
import { TechnicalCapabilities } from "@/components/technical-capabilities"
import { Process } from "@/components/process"
import { Clients } from "@/components/clients"
import { Projects } from "@/components/projects"
import { CommercialSolutions } from "@/components/commercial-solutions"
import { Stats } from "@/components/stats"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <IndustrySolutions />
        <Services />
        <TechnicalCapabilities />
        <Clients />
        <Projects />
        <Process />
        <CommercialSolutions />
        <Stats />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
