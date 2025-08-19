# Supabase Setup Anleitung

## 🗄️ Datenbank-Tabelle erstellen

Das Buchungssystem benötigt eine Datenbank-Tabelle in Supabase. Bitte führen Sie die folgenden Schritte aus:

### 1. Supabase Dashboard öffnen
- Gehen Sie zu: https://supabase.com/dashboard
- Öffnen Sie Ihr Projekt: `jgsvfnimowawbyyfhgnx`

### 2. SQL Editor öffnen
- Klicken Sie im linken Menü auf "SQL Editor"
- Erstellen Sie eine neue Query

### 3. SQL-Script ausführen
Kopieren Sie das folgende SQL-Script und führen Sie es aus:

```sql
-- Buchungen Tabelle erstellen
CREATE TABLE bookings (
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

-- Indizes für bessere Performance
CREATE INDEX idx_bookings_service_date ON bookings(service_id, start_date, end_date);
CREATE INDEX idx_bookings_token ON bookings(booking_token);
CREATE INDEX idx_bookings_status ON bookings(status);

-- Trigger für updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON bookings
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) aktivieren
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy für öffentlichen Lesezugriff (nur bestätigte Buchungen)
CREATE POLICY "Public read access for confirmed bookings" ON bookings
    FOR SELECT USING (status = 'confirmed');

-- Policy für Einfügen neuer Buchungen
CREATE POLICY "Public insert access" ON bookings
    FOR INSERT WITH CHECK (true);

-- Policy für Admin-Updates (über Service Role)
CREATE POLICY "Admin update access" ON bookings
    FOR UPDATE USING (true);
```

### 4. Script ausführen
- Klicken Sie auf "RUN" um das Script auszuführen
- Sie sollten eine Erfolgsmeldung sehen

### 5. Tabelle überprüfen
- Gehen Sie zu "Table Editor" im linken Menü
- Sie sollten die neue "bookings" Tabelle sehen

## ✅ Nach dem Setup

Nach dem Erstellen der Tabelle sollte das Buchungssystem funktionieren:

1. **Kalender lädt Buchungen** aus der Datenbank
2. **Neue Buchungen** werden in der Datenbank gespeichert
3. **E-Mail-Benachrichtigungen** werden über Make.com versendet
4. **Admin-Links** funktionieren für Bestätigung/Stornierung

## 🔧 Fehlerbehebung

Falls Probleme auftreten:

1. **Überprüfen Sie die Supabase-Zugangsdaten** in `lib/supabase.ts`
2. **Kontrollieren Sie die Tabelle** im Supabase Dashboard
3. **Schauen Sie in die Browser-Konsole** für Fehlermeldungen
4. **Prüfen Sie die Server-Logs** für API-Fehler

## 📧 Make.com Webhook

Der Webhook ist bereits konfiguriert:
- URL: `https://hook.eu2.make.com/6s1hua9hf319q2wim3bforg9mystuyw2`
- Wird automatisch bei neuen Buchungen aufgerufen
- Sendet Admin-E-Mails an Monty Lück
