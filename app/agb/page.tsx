import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AGB() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 1 Geltungsbereich</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der Lück Mietservice 24 (nachfolgend 
                "Vermieter"), gelten für alle Verträge über die Vermietung von Bau- und Gartengeräten, die zwischen 
                dem Vermieter und dem Kunden (nachfolgend "Mieter") geschlossen werden.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken 
                abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit 
                zugerechnet werden können. Unternehmer ist eine natürliche oder juristische Person oder eine 
                rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer 
                gewerblichen oder selbständigen beruflichen Tätigkeit handelt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 2 Vertragsschluss</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Die Darstellung der Mietgegenstände auf unserer Website stellt kein rechtlich bindendes 
                Vertragsangebot unsererseits dar, sondern ist nur eine unverbindliche Aufforderung an den Mieter, 
                Mietgegenstände zu bestellen.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Durch Anfrage über unser Kontaktformular, per E-Mail oder Telefon gibt der Mieter ein verbindliches 
                Angebot auf Abschluss eines Mietvertrages ab.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Der Vermieter kann das Angebot des Mieters innerhalb von fünf Werktagen annehmen, indem er dem 
                Mieter eine schriftliche Auftragsbestätigung oder eine Bestätigung per E-Mail übermittelt oder indem 
                dem Mieter die Mietgegenstände überlassen werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 3 Mietdauer und Mietzeiten</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Die Mindestmietdauer beträgt einen Tag. Ein Miettag entspricht 24 Stunden ab Übergabe des 
                Mietgegenstandes.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Die vereinbarte Mietzeit ist verbindlich. Eine Verlängerung der Mietzeit bedarf der vorherigen 
                Zustimmung des Vermieters.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Bei verspäteter Rückgabe ohne vorherige Vereinbarung ist der Vermieter berechtigt, für jeden 
                angefangenen Tag den vollen Tagesmietpreis zu berechnen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 4 Mietpreise und Zahlungsbedingungen</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Es gelten die zum Zeitpunkt der Anmietung gültigen Preise gemäß unserer aktuellen Preisliste. 
                Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Die Miete ist im Voraus bei Abholung des Mietgegenstandes zu zahlen, sofern nichts anderes 
                vereinbart wurde.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Bei Mietzeiten über 7 Tage kann der Vermieter eine angemessene Vorauszahlung verlangen.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (4) Der Vermieter ist berechtigt, eine angemessene Kaution zu verlangen. Die Kaution wird nach 
                ordnungsgemäßer Rückgabe des Mietgegenstandes zurückerstattet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 5 Übergabe und Rückgabe</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Der Mieter ist verpflichtet, den Mietgegenstand bei Übergabe auf Vollständigkeit und 
                Funktionsfähigkeit zu überprüfen. Erkennbare Mängel sind unverzüglich zu rügen.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Der Mietgegenstand ist in dem Zustand zurückzugeben, in dem er übernommen wurde. Normale 
                Gebrauchsspuren sind hiervon ausgenommen.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Die Rückgabe hat zum vereinbarten Zeitpunkt während der Geschäftszeiten zu erfolgen. Bei 
                Rückgabe außerhalb der Geschäftszeiten trägt der Mieter das Risiko bis zur Übernahme durch den 
                Vermieter.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (4) Der Mietgegenstand ist gereinigt zurückzugeben. Bei nicht gereinigter Rückgabe können 
                Reinigungskosten in Rechnung gestellt werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 6 Pflichten des Mieters</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Der Mieter verpflichtet sich:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>den Mietgegenstand pfleglich und sachgemäß zu behandeln</li>
                <li>die Bedienungsanleitung zu beachten</li>
                <li>den Mietgegenstand nur für den vorgesehenen Zweck zu verwenden</li>
                <li>den Mietgegenstand vor Überbeanspruchung zu schützen</li>
                <li>erforderliche Wartungsarbeiten durchzuführen (z.B. Ölstand prüfen)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Der Mieter darf den Mietgegenstand nicht an Dritte weitergeben oder untervermieten.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Reparaturen dürfen nur mit Zustimmung des Vermieters durchgeführt werden.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (4) Der Mieter hat den Verlust oder die Beschädigung des Mietgegenstandes unverzüglich anzuzeigen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 7 Haftung des Mieters</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Der Mieter haftet für alle Schäden am Mietgegenstand, die während der Mietzeit entstehen, es sei 
                denn, er weist nach, dass er die Schäden nicht zu vertreten hat.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Bei Verlust oder Totalschaden des Mietgegenstandes hat der Mieter den Wiederbeschaffungswert zu 
                ersetzen.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Der Mieter stellt den Vermieter von allen Ansprüchen Dritter frei, die aus der Nutzung des 
                Mietgegenstandes entstehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 8 Haftung des Vermieters</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Der Vermieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von 
                Leben, Körper oder Gesundheit.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den 
                vorhersehbaren, vertragstypischen Schaden begrenzt.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Eine weitergehende Haftung ist ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 9 Stornierung</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Der Mieter kann bis 24 Stunden vor Mietbeginn kostenlos stornieren.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Bei späterer Stornierung werden 50% des vereinbarten Mietpreises fällig.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Bei Nichtabholung ohne Stornierung ist der volle Mietpreis zu zahlen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 10 Datenschutz</h2>
              <p className="text-gray-600 leading-relaxed">
                Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, die unter 
                www.lueck-mietservice24.de/datenschutz einsehbar ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 11 Streitbeilegung</h2>
              <p className="text-gray-600 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind 
                nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle 
                teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">§ 12 Schlussbestimmungen</h2>
              <p className="text-gray-600 leading-relaxed">
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (2) Ist der Mieter Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches 
                Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag unser 
                Geschäftssitz.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit 
                der übrigen Bestimmungen nicht.
              </p>
            </section>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-700">
                Stand: Januar 2025<br />
                Lück Mietservice 24
              </p>
            </div>


          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
