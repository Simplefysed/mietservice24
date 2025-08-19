import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  const { token } = params

  if (!token) {
    return NextResponse.json({ error: 'Token is required' }, { status: 400 })
  }

  try {
    // Update booking status to cancelled
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .update({ 
        status: 'cancelled',
        updated_at: new Date().toISOString()
      })
      .eq('booking_token', token)
      .in('status', ['pending', 'confirmed']) // Allow cancelling pending or confirmed bookings
      .select()
      .single()

    if (error || !data) {
      console.error('Supabase update error:', error)
      return NextResponse.redirect(new URL('/admin/error?message=Buchung nicht gefunden oder bereits storniert', request.url))
    }

    // Send cancellation email via Make.com webhook
    const webhookUrl = 'https://hook.eu2.make.com/6s1hua9hf319q2wim3bforg9mystuyw2'
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'booking_cancelled',
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
            cancelled_at: data.updated_at
          }
        })
      })
    } catch (webhookError) {
      console.error('Webhook error:', webhookError)
      // Continue even if webhook fails
    }

    // Redirect to success page
    return NextResponse.redirect(new URL('/admin/success?action=cancelled&customer=' + encodeURIComponent(data.customer_name), request.url))

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.redirect(new URL('/admin/error?message=Fehler beim Stornieren der Buchung', request.url))
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
