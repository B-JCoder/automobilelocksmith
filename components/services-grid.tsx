import { Card, CardContent } from "@/components/ui/card"
import { Car, Key, Smartphone, Settings, AlertTriangle, Clock } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Car Lockout",
    description: "Locked out of your vehicle? We can safely unlock any car, truck, or SUV without damage.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car%20lockout.jpg-d9UXBllNTmrYNxXnPFmXgsJtFAmp8f.jpeg",
  },
  {
    icon: Key,
    title: "Key Duplication",
    description: "Need spare keys? We cut and program keys for all vehicle makes and models.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dublicate%20keys-GHBNZHYeVtXTxgBVOzdWxEDllzhw4m.png",
  },
  {
    icon: Smartphone,
    title: "Smart Key Programming",
    description: "Lost your key fob? We program and replace smart keys, transponder keys, and remotes.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smart%20Key%20Programming-lkwbKCUcMc9uiGwLj3DjWWZLcGNdiB.png",
  },
  {
    icon: Settings,
    title: "Ignition Repair",
    description: "Ignition problems? We repair and replace faulty ignition cylinders and switches.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ignition%20Repair-J5GMW03JANfC7gGtiP4g3MLLGUD6hw.png",
  },
  {
    icon: AlertTriangle,
    title: "Broken Key Extraction",
    description: "Key broke in the lock? We safely extract broken keys without damaging your vehicle.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broken%20Key%20Extraction.jpg-UZveQuksu7Yc9xbnZWABrDynhgw3Cp.jpeg",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for emergency lockout situations and urgent repairs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/247%20Emergency%20Service-O2crEiyMCBw61gjmZBBEsZSvkFEKez.png",
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4 font-section">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional automotive locksmith services for all your vehicle security needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-[#B0B0B0]">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[#12B0FC] p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#002B5B] mb-3 font-heading">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
