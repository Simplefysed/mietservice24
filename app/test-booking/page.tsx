'use client'

import { useState } from 'react'

export default function TestBooking() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const testGetBookings = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/bookings?service_id=lkw-mit-kran-und-kipper')
      const data = await response.json()
      setResult(`GET Test - Status: ${response.status}\nData: ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`GET Test Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const testCreateBooking = async () => {
    setLoading(true)
    try {
      const bookingData = {
        service_id: 'lkw-mit-kran-und-kipper',
        customer_name: 'Test User',
        customer_email: 'test@example.com',
        customer_phone: '+49 123 456789',
        start_date: '2025-02-01',
        end_date: '2025-02-02',
        start_time: '08:00',
        end_time: '17:00'
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const data = await response.json()
      setResult(`POST Test - Status: ${response.status}\nData: ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`POST Test Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Booking API Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test API Endpoints</h2>
          
          <div className="space-x-4 mb-6">
            <button
              onClick={testGetBookings}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Test GET Bookings
            </button>
            
            <button
              onClick={testCreateBooking}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              Test CREATE Booking
            </button>
          </div>

          {loading && (
            <div className="text-blue-600 mb-4">Loading...</div>
          )}

          {result && (
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Result:</h3>
              <pre className="text-sm whitespace-pre-wrap">{result}</pre>
            </div>
          )}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Setup Required</h3>
          <p className="text-yellow-700 mb-4">
            If you see errors, you need to create the Supabase database table first.
          </p>
          <div className="bg-white p-4 rounded border text-sm">
            <p className="font-medium mb-2">Go to Supabase SQL Editor and run:</p>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status TEXT DEFAULT 'pending',
  booking_token TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
