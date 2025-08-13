import { Shield, Clock, Car, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "15-30 minute response time",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified professionals",
  },
  {
    icon: Car,
    title: "All Vehicles Covered",
    description: "Cars, trucks, SUVs, motorcycles",
  },
  {
    icon: CheckCircle,
    title: "24/7 Availability",
    description: "Emergency service anytime",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 43, 91, 0.9), rgba(0, 43, 91, 0.9)), url('/placeholder.svg?height=600&width=1200')`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-section">Why Choose Us?</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Trusted by thousands of customers for reliable, professional automotive locksmith services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#12B0FC] p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-[#0EA5E9] transition-colors">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
