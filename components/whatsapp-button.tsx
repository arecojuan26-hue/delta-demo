"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493513476779"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
    >
      <MessageCircle size={20} />
      WhatsApp
    </a>
  )
}
