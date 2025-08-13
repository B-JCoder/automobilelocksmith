"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Car, Lock } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Car className="h-8 w-8 text-[#002B5B]" />
              <Lock className="h-4 w-4 text-[#12B0FC] absolute -bottom-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-[#002B5B] font-heading">Automotive Locksmith Bobie Kankam </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-[#002B5B] transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#002B5B] transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#002B5B] transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#002B5B] transition-colors">
              Contact
            </a>
            <Button
              className="bg-[#002B5B] hover:bg-[#12B0FC] text-white px-6 py-2 transition-colors"
              size="lg"
              asChild
            >
              <a href="tel:+17707955500">Call (770) 795-5500</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-[#002B5B]" /> : <Menu className="h-6 w-6 text-[#002B5B]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#services" className="text-gray-700 hover:text-[#002B5B] transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#002B5B] transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#002B5B] transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#002B5B] transition-colors">
                Contact
              </a>
              <Button className="bg-[#002B5B] hover:bg-[#12B0FC] text-white transition-colors w-full" size="lg" asChild>
                <a href="tel:+17707955500">Call (770) 795-5500</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
