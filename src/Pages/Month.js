import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../main.scss'

export const Month = () => {
  return (
    <div>
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    </div>
  )
}