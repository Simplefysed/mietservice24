'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react'
import { supabase, Booking } from '@/lib/supabase'

interface CalendarProps {
  serviceId: string
  onDateRangeSelect: (startDate: Date | null, endDate: Date | null) => void
  minDate?: Date
  maxDate?: Date
}

interface CalendarDate {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  isInRange: boolean
  isRangeStart: boolean
  isRangeEnd: boolean
  isBooked: boolean
  isPartiallyBooked: boolean
}

export default function Calendar({ serviceId, onDateRangeSelect, minDate, maxDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
  const [isSelectingRange, setIsSelectingRange] = useState(false)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  const today = new Date()
  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
  const startOfCalendar = new Date(startOfMonth)
  startOfCalendar.setDate(startOfCalendar.getDate() - startOfCalendar.getDay())
  const endOfCalendar = new Date(endOfMonth)
  endOfCalendar.setDate(endOfCalendar.getDate() + (6 - endOfCalendar.getDay()))

  const monthNames = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ]

  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

  // Load bookings from Supabase
  const loadBookings = async () => {
    if (!serviceId) return

    setLoading(true)
    try {
      const startDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
      const endDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 2, 0)

      const response = await fetch(
        `/api/bookings?service_id=${serviceId}&start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}`
      )
      
      if (response.ok) {
        const data = await response.json()
        setBookings(data.bookings || [])
      } else {
        console.error('Failed to load bookings')
      }
    } catch (error) {
      console.error('Error loading bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  // Load bookings when component mounts or month changes
  useEffect(() => {
    loadBookings()
  }, [serviceId, currentMonth])

  const isDateBooked = (date: Date): boolean => {
    return bookings?.some(booking => {
      const bookingStart = new Date(booking.start_date + 'T' + booking.start_time)
      const bookingEnd = new Date(booking.end_date + 'T' + booking.end_time)
      bookingStart.setHours(0, 0, 0, 0)
      bookingEnd.setHours(23, 59, 59, 999)
      const checkDate = new Date(date)
      checkDate.setHours(12, 0, 0, 0)
      return checkDate >= bookingStart && checkDate <= bookingEnd
    })
  }

  const isDateInSelectedRange = (date: Date): boolean => {
    if (!selectedStartDate || !selectedEndDate) return false
    return date >= selectedStartDate && date <= selectedEndDate
  }

  const generateCalendarDates = (): CalendarDate[] => {
    const dates: CalendarDate[] = []
    const current = new Date(startOfCalendar)

    while (current <= endOfCalendar) {
      const isCurrentMonth = current.getMonth() === currentMonth.getMonth()
      const isToday = current.toDateString() === today.toDateString()
      const isBooked = isDateBooked(current)
      const isSelected = selectedStartDate?.toDateString() === current.toDateString() || 
                        selectedEndDate?.toDateString() === current.toDateString()
      const isInRange = isDateInSelectedRange(current)
      const isRangeStart = selectedStartDate?.toDateString() === current.toDateString()
      const isRangeEnd = selectedEndDate?.toDateString() === current.toDateString()

      dates.push({
        date: new Date(current),
        isCurrentMonth,
        isToday,
        isSelected,
        isInRange,
        isRangeStart,
        isRangeEnd,
        isBooked,
        isPartiallyBooked: false
      })

      current.setDate(current.getDate() + 1)
    }

    return dates
  }

  const handleDateClick = (date: Date) => {
    const clickedDate = new Date(date)
    clickedDate.setHours(0, 0, 0, 0)

    // Check if date is in the past or booked
    if (minDate && clickedDate < minDate) return
    if (maxDate && clickedDate > maxDate) return
    if (isDateBooked(clickedDate)) return

    if (!isSelectingRange) {
      // Start new selection
      setSelectedStartDate(clickedDate)
      setSelectedEndDate(null)
      setIsSelectingRange(true)
      onDateRangeSelect(clickedDate, null)
    } else {
      // Complete selection
      if (selectedStartDate && clickedDate >= selectedStartDate) {
        // Check if any dates in range are booked
        const datesInRange = []
        const current = new Date(selectedStartDate)
        while (current <= clickedDate) {
          if (isDateBooked(current)) {
            // Can't select range with booked dates
            return
          }
          datesInRange.push(new Date(current))
          current.setDate(current.getDate() + 1)
        }

        setSelectedEndDate(clickedDate)
        setIsSelectingRange(false)
        onDateRangeSelect(selectedStartDate, clickedDate)
      } else {
        // Start new selection if clicked date is before start date
        setSelectedStartDate(clickedDate)
        setSelectedEndDate(null)
        onDateRangeSelect(clickedDate, null)
      }
    }
  }

  const clearSelection = () => {
    setSelectedStartDate(null)
    setSelectedEndDate(null)
    setIsSelectingRange(false)
    onDateRangeSelect(null, null)
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const calendarDates = generateCalendarDates()

  const getDateClassName = (calendarDate: CalendarDate): string => {
    let className = 'w-10 h-10 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 rounded-lg '

    if (!calendarDate.isCurrentMonth) {
      className += 'text-secondary-300 '
    } else if (calendarDate.isBooked) {
      className += 'bg-red-100 text-red-600 cursor-not-allowed line-through '
    } else if (calendarDate.isRangeStart || calendarDate.isRangeEnd) {
      className += 'bg-primary-600 text-white font-semibold '
    } else if (calendarDate.isInRange) {
      className += 'bg-primary-100 text-primary-700 '
    } else if (calendarDate.isToday) {
      className += 'bg-primary-50 text-primary-600 font-semibold border-2 border-primary-300 '
    } else {
      className += 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600 '
    }

    return className
  }

  return (
    <div className="relative bg-white border border-secondary-200 rounded-xl p-6 shadow-lg">
      {/* Loading Indicator */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-xl z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      )}
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-secondary-900 flex items-center">
          <CalendarIcon className="mr-2 h-5 w-5 text-primary-600" />
          Verfügbarkeit
        </h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-secondary-600" />
          </button>
          <span className="font-semibold text-secondary-900 min-w-[120px] text-center">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-secondary-600" />
          </button>
        </div>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-secondary-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarDates.map((calendarDate, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(calendarDate.date)}
            disabled={calendarDate.isBooked || (minDate && calendarDate.date < minDate)}
            className={getDateClassName(calendarDate)}
          >
            {calendarDate.date.getDate()}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-600 rounded mr-2"></div>
            <span className="text-secondary-600">Ausgewählt</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-100 rounded mr-2"></div>
            <span className="text-secondary-600">Zeitraum</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-100 rounded mr-2"></div>
            <span className="text-secondary-600">Belegt</span>
          </div>
        </div>
        {(selectedStartDate || selectedEndDate) && (
          <button
            onClick={clearSelection}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Auswahl löschen
          </button>
        )}
      </div>

      {/* Selected Range Display */}
      {selectedStartDate && (
        <div className="mt-4 p-4 bg-primary-50 rounded-lg">
          <div className="text-sm font-medium text-primary-900">
            Ausgewählter Zeitraum:
          </div>
          <div className="text-primary-700">
            {selectedStartDate.toLocaleDateString('de-DE')}
            {selectedEndDate && ` - ${selectedEndDate.toLocaleDateString('de-DE')}`}
            {!selectedEndDate && isSelectingRange && ' (Endtag auswählen)'}
          </div>
        </div>
      )}
    </div>
  )
}
