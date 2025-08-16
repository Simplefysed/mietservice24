import { Truck, Scissors, ArrowUp, Settings } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  icon: any
  title: string
  description: string
  features: string[]
  priceRange: string
  category: string
  availability: {
    minDays: number
    maxDays: number
  }
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'lkw-mit-kran-und-kipper',
    icon: Truck,
    title: 'LKW mit Kran und Kipper',
    description: 'Speziell für den Transport schwerer Materialien auf Baustellen, bei Gartenprojekten sowie bei Renovierungen.',
    features: [
      'Transport schwerer Materialien',
      'Sicherer Umschlag von Baustoffen',
      'Für Baustellen & Gartenprojekte',
      'Kran- und Kipperfunktion'
    ],
    priceRange: 'Preis auf Anfrage',
    category: 'Transport',
    availability: {
      minDays: 1,
      maxDays: 30
    }
  },
  {
    id: '2',
    slug: 'hebebuehnen',
    icon: ArrowUp,
    title: 'Hebebühnen',
    description: 'Ermöglichen sicheres Arbeiten in der Höhe für Fassadenarbeiten, Dacharbeiten, Baumschnitt oder Montage technischer Ausstattungen.',
    features: [
      'Sicheres Arbeiten in der Höhe',
      'Für Fassaden- & Dacharbeiten',
      'Baumschnitt & Montagearbeiten',
      'Verschiedene Höhen verfügbar'
    ],
    priceRange: 'Preis auf Anfrage',
    category: 'Höhenarbeit',
    availability: {
      minDays: 1,
      maxDays: 14
    }
  },
  {
    id: '3',
    slug: 'grabenfraesen',
    icon: Settings,
    title: 'Grabenfräsen',
    description: 'Ideal für den Garten- und Landschaftsbau. Zum Ziehen schmaler und tiefer Gräben für Kabelverlegung und Drainagearbeiten.',
    features: [
      'Für Garten- & Landschaftsbau',
      'Schmale und tiefe Gräben',
      'Kabelverlegung & Drainage',
      'Bewässerungssystem-Installation'
    ],
    priceRange: 'Preis auf Anfrage',
    category: 'Erdarbeiten',
    availability: {
      minDays: 1,
      maxDays: 7
    }
  },
  {
    id: '4',
    slug: 'haecksler',
    icon: Scissors,
    title: 'Häcksler',
    description: 'Für das effiziente Zerkleinern von Holz, Ästen und Grünabfall auf Baustellen oder bei Gartenprojekten.',
    features: [
      'Effizientes Zerkleinern',
      'Holz, Äste & Grünabfall',
      'Erleichterte Entsorgung',
      'Für Bau- & Gartenprojekte'
    ],
    priceRange: 'Preis auf Anfrage',
    category: 'Gartengeräte',
    availability: {
      minDays: 1,
      maxDays: 7
    }
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category === category)
}
