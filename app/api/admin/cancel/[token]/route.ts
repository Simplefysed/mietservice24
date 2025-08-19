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
    
    // Build base URL for links (works on Vercel and locally)
    const protocol = request.headers.get('x-forwarded-proto') || 'http'
    const host = request.headers.get('host') || 'localhost:3001'
    const baseUrl = `${protocol}://${host}`
    
    // Include all booking variables and admin links in the payload
    const bookingPayload = {
      ...data,
      service_name: getServiceName(data.service_id),
      admin_token: data.booking_token,
      confirm_url: `${baseUrl}/api/admin/confirm/${data.booking_token}`,
      cancel_url: `${baseUrl}/api/admin/cancel/${data.booking_token}`
    }
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'booking_cancelled',
          booking: bookingPayload
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
