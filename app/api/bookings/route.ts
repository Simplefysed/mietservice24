import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin, CreateBookingData } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'

// GET: Fetch bookings for a service and date range
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const serviceId = searchParams.get('service_id')
    
    if (!serviceId) {
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 })
    }

    // Try to fetch bookings from Supabase
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('service_id', serviceId)
      .eq('status', 'confirmed')
      .limit(50)

    if (error) {
      console.error('Supabase GET error:', error)
      
      // If table doesn't exist, return empty array
      if (error.code === 'PGRST205' || error.message.includes('does not exist')) {
        return NextResponse.json({ 
          bookings: [], 
          message: 'Database table not set up yet. Please create the bookings table in Supabase.',
          tableExists: false
        })
      }
      
      return NextResponse.json({ 
        error: 'Failed to fetch bookings', 
        details: error.message 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      bookings: data || [],
      tableExists: true
    })

  } catch (error) {
    console.error('API GET error:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// POST: Create a new booking
export async function POST(request: NextRequest) {
  try {
    const bookingData: CreateBookingData = await request.json()
    
    // Validate required fields
    if (!bookingData.service_id || !bookingData.customer_name || !bookingData.customer_email) {
      return NextResponse.json({ 
        error: 'Missing required fields', 
        details: 'service_id, customer_name, and customer_email are required' 
      }, { status: 400 })
    }
    
    // Generate unique booking token for admin actions
    const bookingToken = uuidv4()

    console.log('Creating booking with data:', { ...bookingData, booking_token: bookingToken })

    // Insert booking into Supabase
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .insert([{
        ...bookingData,
        booking_token: bookingToken,
        status: 'pending'
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase POST error:', error)
      
      // Check if table doesn't exist
      if (error.code === 'PGRST205' || error.message.includes('does not exist')) {
        return NextResponse.json({ 
          error: 'Database table not set up', 
          details: 'Please create the bookings table in Supabase first.',
          needsSetup: true,
          sql: `CREATE TABLE public.bookings (
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
);`
        }, { status: 500 })
      }
      
      return NextResponse.json({ 
        error: 'Failed to create booking', 
        details: error.message 
      }, { status: 500 })
    }

    // Send notification to Make.com webhook
    const webhookUrl = 'https://hook.eu2.make.com/6s1hua9hf319q2wim3bforg9mystuyw2'
    
    // Get the base URL - works for both local development and Vercel deployment
    const protocol = request.headers.get('x-forwarded-proto') || 'http'
    const host = request.headers.get('host') || 'localhost:3001'
    const baseUrl = `${protocol}://${host}`

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'new_booking',
          booking: {
            id: data.id,
            service_id: data.service_id,
            service_name: getServiceName(data.service_id),
            customer_name: data.customer_name,
            customer_email: data.customer_email,
            customer_phone: data.customer_phone,
            start_date: data.start_date,
            end_date: data.end_date,
            start_time: data.start_time,
            end_time: data.end_time,
            booking_token: data.booking_token,
            confirm_url: `${baseUrl}/api/admin/confirm/${data.booking_token}`,
            cancel_url: `${baseUrl}/api/admin/cancel/${data.booking_token}`,
            created_at: data.created_at
          }
        })
      })
      console.log('Webhook sent successfully')
    } catch (webhookError) {
      console.error('Webhook error:', webhookError)
      // Don't fail the booking if webhook fails
    }

    return NextResponse.json({ 
      success: true, 
      booking: data,
      message: 'Buchung erfolgreich erstellt. Sie erhalten eine Bestätigung per E-Mail.'
    })

  } catch (error) {
    console.error('API POST error:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Helper function to get service display name
function getServiceName(serviceId: string): string {
  const serviceNames: { [key: string]: string } = {
    'lkw-mit-kran-und-kipper': 'LKW mit Kran und Kipper',
    'hebebuehnen': 'Hebebühnen',
    'grabenfraesen': 'Grabenfräsen',
    'haecksler': 'Häcksler'
  }
  return serviceNames[serviceId] || serviceId
}