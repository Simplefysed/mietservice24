'use client'

import { useState } from 'react'
import { User, Mail, Phone, Calendar, Clock, Send } from 'lucide-react'
import { CreateBookingData } from '@/lib/supabase'

interface BookingFormProps {
  serviceId: string
  serviceName: string
  selectedStartDate: Date | null
  selectedEndDate: Date | null
  onSubmit: (bookingData: CreateBookingData) => Promise<void>
  onSuccess: () => void
}

export default function BookingForm({
  serviceId,
  serviceName,
  selectedStartDate,
  selectedEndDate,
  onSubmit,
  onSuccess
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    start_time: '08:00',
    end_time: '17:00'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedStartDate || !selectedEndDate) {
      setError('Bitte wählen Sie einen Zeitraum aus.')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const bookingData: CreateBookingData = {
        service_id: serviceId,
        customer_name: formData.customer_name,
        customer_email: formData.customer_email,
        customer_phone: formData.customer_phone,
        start_date: selectedStartDate.toISOString().split('T')[0],
        end_date: selectedEndDate.toISOString().split('T')[0],
        start_time: formData.start_time,
        end_time: formData.end_time
      }

      console.log('Submitting booking data:', bookingData)
      await onSubmit(bookingData)
      onSuccess()
      
      // Reset form
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        start_time: '08:00',
        end_time: '17:00'
      })
    } catch (err) {
      console.error('Booking error details:', err)
      
      // Try to get more specific error message
      let errorMessage = 'Fehler beim Erstellen der Buchung. Bitte versuchen Sie es erneut.'
      
      if (err instanceof Error) {
        if (err.message.includes('table not set up') || err.message.includes('does not exist')) {
          errorMessage = 'Die Datenbank ist noch nicht eingerichtet. Bitte kontaktieren Sie den Administrator.'
        } else if (err.message.includes('network') || err.message.includes('fetch')) {
          errorMessage = 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.'
        } else if (err.message.includes('validation') || err.message.includes('required')) {
          errorMessage = 'Bitte überprüfen Sie Ihre Eingaben.'
        }
      }
      
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (date: Date | null) => {
    if (!date) return ''
    return date.toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const isFormValid = () => {
    return (
      formData.customer_name.trim() &&
      formData.customer_email.trim() &&
      formData.customer_phone.trim() &&
      selectedStartDate &&
      selectedEndDate
    )
  }

  return (
    <div className="bg-white border border-secondary-200 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-secondary-900 mb-6">
        Buchungsanfrage für {serviceName}
      </h3>

      {/* Selected Date Range */}
      {selectedStartDate && selectedEndDate && (
        <div className="bg-primary-50 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-primary-600 mr-2" />
            <span className="font-medium text-primary-900">Ausgewählter Zeitraum:</span>
          </div>
          <div className="text-primary-700">
            <div>{formatDate(selectedStartDate)}</div>
            {selectedStartDate.toDateString() !== selectedEndDate.toDateString() && (
              <div>bis {formatDate(selectedEndDate)}</div>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Customer Name */}
        <div>
          <label htmlFor="customer_name" className="block text-sm font-medium text-secondary-700 mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Ihr Name *
          </label>
          <input
            type="text"
            id="customer_name"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="Max Mustermann"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="customer_email" className="block text-sm font-medium text-secondary-700 mb-2">
            <Mail className="inline h-4 w-4 mr-1" />
            E-Mail-Adresse *
          </label>
          <input
            type="email"
            id="customer_email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="max@beispiel.de"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="customer_phone" className="block text-sm font-medium text-secondary-700 mb-2">
            <Phone className="inline h-4 w-4 mr-1" />
            Telefonnummer *
          </label>
          <input
            type="tel"
            id="customer_phone"
            name="customer_phone"
            value={formData.customer_phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="+49 123 456789"
          />
        </div>

        {/* Time Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="start_time" className="block text-sm font-medium text-secondary-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Startzeit
            </label>
            <input
              type="time"
              id="start_time"
              name="start_time"
              value={formData.start_time}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="end_time" className="block text-sm font-medium text-secondary-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Endzeit
            </label>
            <input
              type="time"
              id="end_time"
              name="end_time"
              value={formData.end_time}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid() || isSubmitting}
          className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-secondary-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Buchungsanfrage senden
            </>
          )}
        </button>

        <p className="text-xs text-secondary-500 text-center">
          * Pflichtfelder. Ihre Anfrage wird an Monty Lück gesendet und schnellstmöglich bearbeitet.
        </p>
      </form>
    </div>
  )
}
