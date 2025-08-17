import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">
              Lück Mietservice 24
            </h3>
            <p className="text-secondary-300 mb-4">
              Ihr regionaler Partner für Bau- und Gartengeräte in Fichtenwalde. 
              Seit mehreren Jahren stehen wir für Qualität, Service und Zuverlässigkeit.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Unsere Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><a href="/services/lkw-mit-kran-und-kipper" className="hover:text-white transition-colors">LKW mit Kran und Kipper</a></li>
              <li><a href="/services/hebebuehnen" className="hover:text-white transition-colors">Hebebühnen</a></li>
              <li><a href="/services/grabenfraesen" className="hover:text-white transition-colors">Grabenfräsen</a></li>
              <li><a href="/services/haecksler" className="hover:text-white transition-colors">Häcksler</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Weitere Geräte</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hauptzentrale</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300">+49 (0) 33206 21 935</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300">info@lueck-mietservice24.de</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300">
                  Berliner Allee 63<br />
                  14547 Fichtenwalde
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <div className="space-y-2 text-secondary-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary-400" />
                <div>
                  <div>Mo-Fr: 07:00-18:00</div>
                  <div>Sa: 08:00-16:00</div>
                  <div>So: nach absprache</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © 2025 Lück Mietservice 24. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/impressum" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Datenschutz
              </a>
              <a href="/agb" className="text-secondary-400 hover:text-white text-sm transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
