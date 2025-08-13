"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 43, 91, 0.7), rgba(0, 43, 91, 0.7)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backgroundautomotive.jpg-2QfPtFmC8YHADoyyEvFrHyGsA6kT0Q.jpeg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-section dropdown-fade">
          Locked Out? Lost Your Car Keys?
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-heading animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300">
          We're Here 24/7
        </p>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto animate-in fade-in duration-1000 delay-500">
          Professional automotive locksmith services with fast response times. Licensed, insured, and ready to help you
          get back on the road.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-700">
          <Button
            size="lg"
            className="bg-[#12B0FC] hover:bg-[#0EA5E9] text-white px-8 py-4 text-lg font-semibold transition-colors"
            asChild
          >
            <a href="tel:+17707955500">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-4 text-lg font-semibold transition-colors bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Request Service
          </Button>
        </div>
      </div>
    </section>
  )
}
