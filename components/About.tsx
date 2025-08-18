import { Award, Users, Clock, Shield } from 'lucide-react'

const stats = [
  {
    icon: Award,
    number: '4+',
    label: 'Jahre Erfahrung',
    description: 'Etabliert als zuverlässiger Partner'
  },
  {
    icon: Users,
    number: 'Gewerblich &',
    label: 'Privat',
    description: 'Für alle Kunden da'
  },
  {
    icon: Clock,
    number: 'Flexibel',
    label: 'Mietzeiten',
    description: 'Von Tagesmiete bis Langzeitprojekte'
  },
  {
    icon: Shield,
    number: '100%',
    label: 'Gewartet',
    description: 'Regelmäßig geprüfte Geräte'
  }
]

export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Warum <span className="text-primary-600">Lück Mietservice 24</span>?
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Seit mehreren Jahren haben wir uns als zuverlässiger Partner für Privatkunden sowie gewerbliche Auftraggeber etabliert. 
              Unser regionaler Mietservice in Fichtenwalde steht für erstklassigen Service, Beratung und Qualität der angebotenen Mietgeräte.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Regelmäßige Wartung
                  </h4>
                  <p className="text-secondary-600">
                    Sämtliche Geräte werden regelmäßig gewartet, geprüft und sind für einen sicheren 
                    und zuverlässigen Betrieb ausgelegt. Das steigert die Arbeitssicherheit.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Flexible Mietzeiten
                  </h4>
                  <p className="text-secondary-600">
                    Die Mietzeiten können flexibel gestaltet werden – von Tagesmiete bis zu längeren 
                    Zeiträumen, optimal angepasst an das jeweilige Projekt.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Individuelle Beratung
                  </h4>
                  <p className="text-secondary-600">
                    Das erfahrene Team unterstützt die Kunden dabei, das passende Gerät für ihren jeweiligen 
                    Bedarf zu finden. Einsatzbereich, Projektdauer und Leistungsmerkmale werden berücksichtigt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-secondary-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-secondary-900 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-secondary-600">
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 relative overflow-hidden">
          {/* Background with new color scheme */}
          <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white relative z-10">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-300 rounded-full opacity-30 translate-y-12 -translate-x-12"></div>
            
            <div className="text-center mb-12 relative z-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ihre Vorteile bei <span className="text-primary-100">Mietservice24</span>
              </h3>
              <p className="text-primary-100 max-w-2xl mx-auto text-lg">
                Profitieren Sie von unserem umfassenden Service und unserer Expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl">🚚</div>
                </div>
                <h4 className="font-semibold mb-3 text-lg">Lieferung & Abholung</h4>
                <p className="text-primary-100 text-sm leading-relaxed">
                  Kostenlose Lieferung und Abholung in unserem Servicegebiet. 
                  Wir bringen die Geräte direkt zu Ihnen und holen sie wieder ab.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl">⚡</div>
                </div>
                <h4 className="font-semibold mb-3 text-lg">Schnelle Verfügbarkeit</h4>
                <p className="text-primary-100 text-sm leading-relaxed">
                  Kurzfristige Buchungen und sofortige Einsatzbereitschaft. 
                  Auch bei spontanen Projekten sind wir für Sie da.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl">💡</div>
                </div>
                <h4 className="font-semibold mb-3 text-lg">Einweisung inklusive</h4>
                <p className="text-primary-100 text-sm leading-relaxed">
                  Kostenlose Einweisung in die Bedienung aller Geräte. 
                  Sicherheit und optimale Nutzung stehen an erster Stelle.
                </p>
              </div>
            </div>

            {/* Additional feature row */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🛠️</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Professionelle Beratung</h5>
                    <p className="text-primary-100 text-sm">Individuelle Beratung für Ihr Projekt</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🔒</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Versicherung inklusive</h5>
                    <p className="text-primary-100 text-sm">Vollständige Haftpflichtversicherung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
