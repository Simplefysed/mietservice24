import { createClient } from '@supabase/supabase-js'

// Supabase Configuration
const supabaseUrl = 'https://jgsvfnimowawbyyfhgnx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnc3Zmbmltb3dhd2J5eWZoZ254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTIxNTMsImV4cCI6MjA3MTE4ODE1M30.U0mqtZ_0OpIGpn74Vl-WPBPu73AfavewDFwIAOtzUqQ'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnc3Zmbmltb3dhd2J5eWZoZ254Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTYxMjE1MywiZXhwIjoyMDcxMTg4MTUzfQ.N48ZLvSC1-YLIwQAiyA7FZwd9U9asDqS8-WBuctSCWA'

// Public client for client-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Booking types
export interface Booking {
  id: string
  service_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  start_date: string
  end_date: string
  start_time: string
  end_time: string
  status: 'pending' | 'confirmed' | 'cancelled'
  booking_token: string
  created_at: string
  updated_at: string
}

export interface CreateBookingData {
  service_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  start_date: string
  end_date: string
  start_time: string
  end_time: string
}
