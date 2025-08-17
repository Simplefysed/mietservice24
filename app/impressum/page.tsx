import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="text-gray-600 space-y-1">
                <p>Lück Mietservice 24</p>
                <p>Inhaber: Monty Lück</p>
                <p>Berliner Allee 63</p>
                <p>14547 Fichtenwalde</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Kontakt</h2>
              <div className="text-gray-600 space-y-1">
                <p>Telefon: +49 (0) 33206 21 935</p>
                <p>E-Mail: info@lueck-mietservice24.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Registereintrag</h2>
              <div className="text-gray-600 space-y-1">
                <p>Eintragung im Handelsregister.</p>
                <p>Registergericht: Amtsgericht Potsdam</p>
                <p>Registernummer: HRA 12345</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Umsatzsteuer-ID</h2>
              <div className="text-gray-600">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE213717320</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Aufsichtsbehörde</h2>
              <div className="text-gray-600">
                <p>Gewerbeaufsichtsamt Brandenburg</p>
                <p>Horstweg 57, 14478 Potsdam</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Haftung für Inhalte</h2>
              <p className="text-gray-600 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Haftung für Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Urheberrecht</h2>
              <p className="text-gray-600 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
                von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>


          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
