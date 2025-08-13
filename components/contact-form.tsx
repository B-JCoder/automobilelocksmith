"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent!",
      description: "We'll contact you within 15 minutes for emergency services.",
    })

    setIsSubmitting(false)
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section className="py-16 bg-[#F5F5F5]" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4 font-section">
            Get Emergency Locksmith Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below for immediate assistance or call us directly for faster service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-[#12B0FC]/20">
              <CardHeader>
                <CardTitle className="text-[#002B5B] font-section">Contact Information</CardTitle>
                <CardDescription>Reach us anytime for emergency locksmith services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#12B0FC]" />
                  <div>
                    <p className="font-semibold text-[#002B5B]">Emergency Hotline</p>
                    <a href="tel:770-795-5500" className="text-[#12B0FC] hover:underline font-medium">
                      (770) 795-5500
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#12B0FC]" />
                  <div>
                    <p className="font-semibold text-[#002B5B]">Email</p>
                    <a href="mailto:info@bobiekankum.com" className="text-[#12B0FC] hover:underline">
                      info@bobiekankum.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-[#12B0FC]" />
                  <div>
                    <p className="font-semibold text-[#002B5B]">Availability</p>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#12B0FC]" />
                  <div>
                    <p className="font-semibold text-[#002B5B]">Service Area</p>
                    <p className="text-gray-600">Atlanta Metro & Surrounding Areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="border-2 border-[#25D366]/20 bg-gradient-to-r from-[#25D366]/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#002B5B] mb-1">Quick WhatsApp Contact</h3>
                    <p className="text-sm text-gray-600">Get instant response via WhatsApp</p>
                  </div>
                  <a
                    href="https://wa.me/15123259923"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-[#002B5B]/20">
            <CardHeader>
              <CardTitle className="text-[#002B5B] font-section">Request Emergency Service</CardTitle>
              <CardDescription>Fill out this form and we'll contact you within 15 minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="border-gray-300 focus:border-[#12B0FC]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required className="border-gray-300 focus:border-[#12B0FC]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="border-gray-300 focus:border-[#12B0FC]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-gray-300 focus:border-[#12B0FC]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location/Address *</Label>
                  <Input
                    id="location"
                    name="location"
                    required
                    placeholder="Where do you need service?"
                    className="border-gray-300 focus:border-[#12B0FC]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B0FC] focus:border-[#12B0FC]"
                  >
                    <option value="">Select a service</option>
                    <option value="car-lockout">Car Lockout</option>
                    <option value="key-duplication">Key Duplication</option>
                    <option value="smart-key-programming">Smart Key Programming</option>
                    <option value="ignition-repair">Ignition Repair</option>
                    <option value="broken-key-extraction">Broken Key Extraction</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your situation (car make/model, type of key, etc.)"
                    className="border-gray-300 focus:border-[#12B0FC] min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#12B0FC] hover:bg-[#0EA5E9] text-white py-3 text-lg font-semibold transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Request Emergency Service
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. For immediate assistance, call{" "}
                  <a href="tel:770-795-5500" className="text-[#12B0FC] hover:underline font-medium">
                    (770) 795-5500
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
