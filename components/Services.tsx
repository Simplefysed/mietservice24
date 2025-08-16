import { getAllServices } from '@/lib/services'
import Link from 'next/link'

const services = getAllServices()

export default function Services() {
  return (
    <section id="services" className="bg-secondary-50 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Unsere <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Unser Geräteportfolio umfasst moderne Maschinen für Bau- und Gartengeräte. 
            Alle Geräte werden regelmäßig gewartet und sind technisch auf dem neuesten Stand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group flex flex-col h-full"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>

                {/* Content - flex-grow sorgt dafür, dass dieser Bereich den verfügbaren Platz ausfüllt */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA - bleibt immer am unteren Rand */}
                <div className="border-t pt-6 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary-600">
                      {service.priceRange}
                    </span>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm hover:underline transition-colors duration-200"
                    >
                      Jetzt buchen →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Nicht das Richtige dabei?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Wir haben noch viele weitere Geräte und Fahrzeuge im Sortiment. 
            Kontaktieren Sie uns für individuelle Anfragen oder Sonderkonditionen bei Langzeitmieten.
          </p>
          <a href="#contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
            Individuelle Anfrage stellen
          </a>
        </div>
      </div>
    </section>
  )
}
