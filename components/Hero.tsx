import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const benefits = [
    'Regelmäßig gewartete Geräte',
    'Individuelle Beratung',
    'Flexible Mietzeiten',
    '4 Jahre Erfahrung'
  ]

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 leading-tight mb-6">
              <span className="text-primary-600">Einfach. Effizient. Zuverlässig.</span>
              <br />Ihr regionaler Mietservice-Partner
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Willkommen bei Lück Mietservice 24 in Fichtenwalde. Seit 4 Jahren Ihr zuverlässiger Partner 
              für Bau- und Gartengeräte. Wir stehen für erstklassigen Service, fachkundige Beratung und hochwertige Mietgeräte.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-secondary-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary inline-flex items-center justify-center">
                Unsere Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                Jetzt anfragen
              </a>
            </div>
          </div>

          {/* Right Content - Service Cards Preview */}
          <div className="relative z-20">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/services/lkw-mit-kran-und-kipper" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl">🚛</span>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">LKW & Kran</h3>
                <p className="text-sm text-secondary-600">Transport schwerer Materialien</p>
              </Link>

              <Link href="/services/haecksler" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-8 cursor-pointer group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">Häcksler</h3>
                <p className="text-sm text-secondary-600">Zerkleinern von Holz & Grünabfall</p>
              </Link>

              <Link href="/services/hebebuehnen" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl">⬆️</span>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">Hebebühnen</h3>
                <p className="text-sm text-secondary-600">Sicheres Arbeiten in der Höhe</p>
              </Link>

              <Link href="/services/grabenfraesen" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-8 cursor-pointer group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">Grabenfräsen</h3>
                <p className="text-sm text-secondary-600">Für Garten- & Landschaftsbau</p>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 -z-10 pointer-events-none">
        <svg className="w-full h-full" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#e5e7eb" fillOpacity="0.1">
            <circle cx="3" cy="3" r="3"/>
          </g>
        </svg>
      </div>
    </section>
  )
}
