"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "Locked myself out at 2 AM and they were there in 20 minutes! Professional, fast, and reasonably priced.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mike Rodriguez",
    location: "Westside",
    rating: 5,
    text: "Lost my smart key and thought it would cost a fortune. They programmed a new one for half the dealer price!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Chen",
    location: "Eastside",
    rating: 5,
    text: "Broke my key in the ignition. They extracted it and made a new key on the spot. Excellent service!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4 font-section">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-[#B0B0B0]">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-4 italic">"{testimonials[currentIndex].text}"</p>
                  <div>
                    <p className="font-bold text-[#002B5B] font-heading">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
