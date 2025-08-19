'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    startDate: '',
    endDate: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde normalerweise die Formular-Übermittlung stattfinden
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      startDate: '',
      endDate: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="bg-secondary-50 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Jetzt <span className="text-primary-600">anfragen</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Gerät mieten? 
            Unser Team freut sich darauf, Ihnen weiterzuhelfen und die passende Lösung für Ihr Projekt zu finden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Kontaktinformationen
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Telefon</h4>
                  <p className="text-secondary-600">+49 (0) 33206 21 935</p>
                  <p className="text-sm text-secondary-500">Mo-Fr: 07:00-18:00 | Sa: 08:00-16:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">E-Mail</h4>
                  <p className="text-secondary-600">info@lueckmietservice24.de</p>
                  <p className="text-sm text-secondary-500">Wir antworten innerhalb von 24h</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Adresse</h4>
                  <p className="text-secondary-600">
                    Berliner Allee 63<br />
                    14547 Fichtenwalde
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Ansprechpartner</h4>
                  <p className="text-secondary-600">Monty Lück</p>
                  <p className="text-sm text-secondary-500">Ihr direkter Kontakt für alle Anfragen</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-secondary-900 mb-4">Schnelle Antwort garantiert</h4>
              <p className="text-secondary-600 text-sm mb-4">
                Wir verstehen, dass Zeit wichtig ist. Deshalb garantieren wir Ihnen:
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Antwort auf Anfragen binnen 2 Stunden (Geschäftszeiten)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Verbindliches Angebot innerhalb von 24 Stunden
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Sofortige Verfügbarkeitsprüfung
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Anfrage senden
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                  Gewünschter Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="haecksler">Häcksler</option>
                  <option value="hebebuehne">Hebebühne</option>
                  <option value="fraese">Fräse</option>
                  <option value="lkw-kran">LKW mit Ladekran</option>
                  <option value="kleinbus">Kleinbus (9 Sitzer)</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-secondary-700 mb-2">
                    Startdatum
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-secondary-700 mb-2">
                    Enddatum
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt oder stellen Sie Fragen..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Anfrage senden
              </button>

              <p className="text-xs text-secondary-500 text-center">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
