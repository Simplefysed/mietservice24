'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Check, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Calendar from '@/components/Calendar'
import BookingForm from '@/components/BookingForm'
import { getServiceBySlug } from '@/lib/services'
import { CreateBookingData } from '@/lib/supabase'

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

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
    setShowSuccessMessage(false) // Reset success message when dates change
  }

  const handleBookingSubmit = async (bookingData: CreateBookingData) => {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })

    if (!response.ok) {
      throw new Error('Failed to create booking')
    }

    const result = await response.json()
    return result
  }

  const handleBookingSuccess = () => {
    setShowSuccessMessage(true)
    setSelectedStartDate(null)
    setSelectedEndDate(null)
    // Scroll to success message
    setTimeout(() => {
      document.getElementById('success-message')?.scrollIntoView({ 
        behavior: 'smooth' 
      })
    }, 100)
  }

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

          {/* Success Message */}
          {showSuccessMessage && (
            <div id="success-message" className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Buchungsanfrage erfolgreich gesendet!
                  </h3>
                  <p className="text-green-700">
                    Vielen Dank für Ihre Anfrage. Monty Lück wird sich schnellstmöglich bei Ihnen melden 
                    und Ihre Buchung bestätigen oder weitere Details mit Ihnen besprechen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Booking System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <Calendar
                serviceId={params.slug as string}
                onDateRangeSelect={handleDateRangeSelect}
                minDate={new Date()}
              />
            </div>

            {/* Booking Form */}
            <div>
              <BookingForm
                serviceId={params.slug as string}
                serviceName={service.title}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                onSubmit={handleBookingSubmit}
                onSuccess={handleBookingSuccess}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
