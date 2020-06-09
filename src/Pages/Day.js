import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../main.scss' 

export const Day = () => {
  return (
    <div>
      <FullCalendar defaultView="dayGridDay" plugins={[ dayGridPlugin ]} />
    </div>
  )
}