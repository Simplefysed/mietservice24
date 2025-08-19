import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Calendar, User } from 'lucide-react'

function SuccessContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  )
}

function SuccessPage() {
  // In a real app, you'd get these from searchParams
  // const searchParams = useSearchParams()
  // const action = searchParams.get('action')
  // const customer = searchParams.get('customer')
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Aktion erfolgreich ausgeführt
            </h1>
            
            <p className="text-gray-600 mb-8">
              Die Buchung wurde erfolgreich bearbeitet. Der Kunde wurde per E-Mail informiert.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">Buchung aktualisiert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">Kunde benachrichtigt</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              <p>Diese Seite kann geschlossen werden.</p>
              <p className="mt-2">
                Bei Fragen wenden Sie sich an: 
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

export default SuccessContent
