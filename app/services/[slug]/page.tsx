'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Clock, ArrowLeft, Check } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Calendar from '@/components/Calendar'
import { getServiceBySlug } from '@/lib/services'

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Mock data für belegte Zeiträume - in einer echten App käme das von einer API
  const bookedDates = [
    {
      start: new Date(2024, 11, 15), // 15. Dezember 2024
      end: new Date(2024, 11, 18)    // 18. Dezember 2024
    },
    {
      start: new Date(2024, 11, 22), // 22. Dezember 2024
      end: new Date(2024, 11, 24)    // 24. Dezember 2024
    },
    {
      start: new Date(2025, 0, 5),   // 5. Januar 2025
      end: new Date(2025, 0, 7)      // 7. Januar 2025
    }
  ]

  const service = getServiceBySlug(params.slug as string)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">Service nicht gefunden</h1>
          <button 
            onClick={() => router.back()}
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </button>
        </div>
      </div>
    )
  }

  const handleDateRangeSelect = (startDate: Date | null, endDate: Date | null) => {
    setSelectedStartDate(startDate)
    setSelectedEndDate(endDate)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde die Buchungslogik implementiert werden
    console.log('Buchungsanfrage:', {
      service: service.title,
      startDate: selectedStartDate?.toLocaleDateString('de-DE'),
      endDate: selectedEndDate?.toLocaleDateString('de-DE'),
      time: selectedTime,
      customer: customerData
    })
    alert('Vielen Dank! Ihre Buchungsanfrage wurde gesendet.')
  }

  const isFormValid = selectedStartDate && selectedEndDate && selectedTime && 
                     customerData.name && customerData.email && customerData.phone;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zu allen Services
          </button>

          {/* Service Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                <service.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-secondary-900 mb-4">{service.title}</h1>
                <p className="text-lg text-secondary-600 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <Calendar
                onDateRangeSelect={handleDateRangeSelect}
                bookedDates={bookedDates}
                minDate={new Date()}
              />
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Mietanfrage stellen
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Selected Dates Summary */}
                {selectedStartDate && selectedEndDate && (
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h3 className="font-semibold text-primary-900 mb-2">Ausgewählter Zeitraum</h3>
                    <div className="text-primary-700">
                      <div className="flex items-center justify-between">
                        <span>Von: {selectedStartDate.toLocaleDateString('de-DE')}</span>
                        <span>Bis: {selectedEndDate.toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="text-sm text-primary-600 mt-1">
                        Dauer: {Math.ceil((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24))} Tag(e)
                      </div>
                    </div>
                  </div>
                )}

                {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <Clock className="inline-block mr-1 h-4 w-4" />
                  Gewünschte Abholzeit
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Zeit auswählen</option>
                  <option value="07:00">07:00 - 08:00</option>
                  <option value="08:00">08:00 - 09:00</option>
                  <option value="09:00">09:00 - 10:00</option>
                  <option value="10:00">10:00 - 11:00</option>
                  <option value="11:00">11:00 - 12:00</option>
                  <option value="13:00">13:00 - 14:00</option>
                  <option value="14:00">14:00 - 15:00</option>
                  <option value="15:00">15:00 - 16:00</option>
                  <option value="16:00">16:00 - 17:00</option>
                </select>
              </div>

              {/* Customer Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Ihre Kontaktdaten</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={customerData.name}
                      onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    value={customerData.email}
                    onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Zusätzliche Informationen
                  </label>
                  <textarea
                    value={customerData.message}
                    onChange={(e) => setCustomerData({...customerData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Besondere Anforderungen, Lieferadresse, etc."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Mietanfrage senden
                </button>
                <p className="text-sm text-secondary-500 mt-2 text-center">
                  Sie erhalten eine Bestätigung per E-Mail
                </p>
              </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
