import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Allgemeine Hinweise</h3>
              <p className="text-gray-600 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. 
                um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach 
                Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem 
                technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung 
                dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter 
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Hosting</h2>
              <p className="text-gray-600 leading-relaxed">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              
              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Externes Hosting</h3>
              <p className="text-gray-600 leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
                sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              
              <p className="text-gray-600 leading-relaxed mt-3">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 
                lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-gray-600 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="text-gray-600 mt-2 space-y-1">
                <p>Lück Mietservice 24</p>
                <p>Monty Lück</p>
                <p>Berliner Allee 63</p>
                <p>14547 Fichtenwalde</p>
                <p>Telefon: +49 (0) 33206 21 935</p>
                <p>E-Mail: info@lueck-mietservice24.de</p>
              </div>
              
              <p className="text-gray-600 mt-3">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) 
                entscheidet.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Speicherdauer</h3>
              <p className="text-gray-600 leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
                Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im 
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-gray-600 leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine 
                bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="text-gray-600 leading-relaxed">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes 
                oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger 
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Recht auf Datenübertragbarkeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
                aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen 
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Auskunft, Löschung und Berichtigung</h3>
              <p className="text-gray-600 leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
                der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu 
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
              <p className="text-gray-600 leading-relaxed">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht 
                in folgenden Fällen:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen 
                    wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die 
                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie 
                    statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, 
                    Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der 
                    Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen 
                    Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen 
                    überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                    zu verlangen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf 
                Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies 
                werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät 
                gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
              
              <p className="text-gray-600 leading-relaxed mt-3">
                Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). 
                Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb 
                von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
              </p>
              
              <p className="text-gray-600 leading-relaxed mt-3">
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte 
                Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige 
                von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Kontaktformular</h3>
              <p className="text-gray-600 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              
              <p className="text-gray-600 leading-relaxed mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
                an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="text-gray-600 leading-relaxed">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei 
                uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              
              <p className="text-gray-600 leading-relaxed mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
                an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </section>


          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
