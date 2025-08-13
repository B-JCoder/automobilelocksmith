"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 bg-[#002B5B]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Need Help Now?</h2>
        <p className="text-xl text-gray-200 mb-8">Don't wait - our emergency locksmith team is standing by</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-2xl md:text-3xl font-bold text-white font-heading">Call (770) 795-5500</div>
          <Button
            size="lg"
            className="bg-[#12B0FC] hover:bg-[#0EA5E9] text-white px-8 py-4 text-lg font-semibold transition-colors"
            onClick={() => (window.location.href = "tel:770-795-5500")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>

        <p className="text-gray-300 mt-6">Available 24/7 • Licensed & Insured • Fast Response</p>
      </div>
    </section>
  )
}
