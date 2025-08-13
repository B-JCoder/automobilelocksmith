import { MapPin } from "lucide-react"

export function ServiceArea() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4 font-section">Service Area</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide automotive locksmith services throughout the metropolitan area
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Service Area Map"
              className="w-full h-96 object-cover rounded-lg border-2 border-[#B0B0B0]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/20 to-transparent rounded-lg" />

            {/* Service Area Pins */}
            <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-8 w-8 text-[#12B0FC] drop-shadow-lg" />
            </div>
            <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-8 w-8 text-[#12B0FC] drop-shadow-lg" />
            </div>
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-8 w-8 text-[#12B0FC] drop-shadow-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
            <div className="p-4">
              <h3 className="font-bold text-[#002B5B] font-heading">Downtown</h3>
              <p className="text-gray-600 text-sm">15 min response</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#002B5B] font-heading">Westside</h3>
              <p className="text-gray-600 text-sm">20 min response</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#002B5B] font-heading">Eastside</h3>
              <p className="text-gray-600 text-sm">25 min response</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#002B5B] font-heading">Suburbs</h3>
              <p className="text-gray-600 text-sm">30 min response</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
