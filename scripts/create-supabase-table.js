const { createClient } = require('@supabase/supabase-js')

// Supabase Configuration
const supabaseUrl = 'https://jgsvfnimowawbyyfhgnx.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnc3Zmbmltb3dhd2J5eWZoZ254Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTYxMjE1MywiZXhwIjoyMDcxMTg4MTUzfQ.N48ZLvSC1-YLIwQAiyA7FZwd9U9asDqS8-WBuctSCWA'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createBookingsTable() {
  console.log('Creating bookings table...')
  
  const createTableSQL = `
    -- Buchungen Tabelle erstellen
    CREATE TABLE IF NOT EXISTS public.bookings (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      service_id TEXT NOT NULL,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      customer_phone TEXT NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      start_time TIME NOT NULL,
      end_time TIME NOT NULL,
      status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
      booking_token TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );

    -- Row Level Security aktivieren
    ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

    -- Drop existing policies if they exist
    DROP POLICY IF EXISTS "Enable read access for confirmed bookings" ON public.bookings;
    DROP POLICY IF EXISTS "Enable insert access for all users" ON public.bookings;
    DROP POLICY IF EXISTS "Enable update access for service role" ON public.bookings;

    -- Policies für öffentlichen Zugriff
    CREATE POLICY "Enable read access for confirmed bookings" ON public.bookings
        FOR SELECT USING (status = 'confirmed');

    CREATE POLICY "Enable insert access for all users" ON public.bookings
        FOR INSERT WITH CHECK (true);

    CREATE POLICY "Enable update access for service role" ON public.bookings
        FOR UPDATE USING (true);

    -- Indizes für Performance
    CREATE INDEX IF NOT EXISTS idx_bookings_service_date ON public.bookings(service_id, start_date, end_date);
    CREATE INDEX IF NOT EXISTS idx_bookings_token ON public.bookings(booking_token);
    CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);
  `

  try {
    const { data, error } = await supabase.rpc('exec_sql', { 
      sql: createTableSQL 
    })

    if (error) {
      console.error('Error creating table:', error)
      
      // Alternative: Try with individual queries
      console.log('Trying alternative approach...')
      
      // Just create the table first
      const { error: tableError } = await supabase
        .from('bookings')
        .select('*')
        .limit(1)
      
      if (tableError && tableError.code === 'PGRST116') {
        console.log('Table does not exist. Please create it manually in Supabase Dashboard.')
        console.log('Go to: https://supabase.com/dashboard/project/jgsvfnimowawbyyfhgnx/sql')
        console.log('Execute this SQL:')
        console.log(createTableSQL)
        return false
      }
    } else {
      console.log('Table created successfully!')
      return true
    }
  } catch (err) {
    console.error('Script error:', err)
    return false
  }
}

// Test the table after creation
async function testTable() {
  console.log('Testing table access...')
  
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('Table test failed:', error)
      return false
    } else {
      console.log('Table test successful! Found', data?.length || 0, 'records')
      return true
    }
  } catch (err) {
    console.error('Test error:', err)
    return false
  }
}

// Main execution
async function main() {
  console.log('🚀 Setting up Supabase bookings table...')
  console.log('Project:', supabaseUrl)
  
  // Test if table already exists
  const tableExists = await testTable()
  
  if (tableExists) {
    console.log('✅ Table already exists and is working!')
    return
  }
  
  // Try to create table
  const created = await createBookingsTable()
  
  if (created) {
    // Test again
    const working = await testTable()
    if (working) {
      console.log('✅ Setup complete! Bookings system should now work.')
    } else {
      console.log('❌ Table created but not accessible. Check RLS policies.')
    }
  } else {
    console.log('❌ Could not create table automatically.')
    console.log('📋 Please create it manually in Supabase Dashboard:')
    console.log('   1. Go to https://supabase.com/dashboard/project/jgsvfnimowawbyyfhgnx/sql')
    console.log('   2. Create new query')
    console.log('   3. Paste and execute the SQL from above')
  }
}

main().catch(console.error)
