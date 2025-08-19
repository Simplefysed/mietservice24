import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { XCircle, AlertTriangle, Phone } from 'lucide-react'

function ErrorContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorPage />
    </Suspense>
  )
}

function ErrorPage() {
  // In a real app, you'd get the error message from searchParams
  // const searchParams = useSearchParams()
  // const message = searchParams.get('message')
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Fehler beim Bearbeiten der Buchung
            </h1>
            
            <p className="text-gray-600 mb-8">
              Die Buchung konnte nicht bearbeitet werden. Möglicherweise wurde sie bereits bearbeitet oder ist nicht mehr verfügbar.
            </p>

            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">Was können Sie tun?</span>
              </div>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Überprüfen Sie, ob die Buchung bereits bearbeitet wurde</li>
                <li>• Kontaktieren Sie den Kunden direkt per Telefon</li>
                <li>• Versuchen Sie es später erneut</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontakt für Unterstützung</h3>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">+49 (0) 33206 21 935</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                E-Mail: 
                <a href="mailto:info@lueck-mietservice24.de" className="text-primary-600 hover:text-primary-700 ml-1">
                  info@lueck-mietservice24.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ErrorContent
