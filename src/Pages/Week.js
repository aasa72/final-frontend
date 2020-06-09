import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../main.scss' 
import { Todo } from '../Components/Todo'
import { Mealplan } from '../Components/Mealplan'
import { Notes } from '../Components/Notes'

export const Week = () => {
  return (
    <div>
      <div>
        <FullCalendar defaultView="dayGridWeek" plugins={[ dayGridPlugin ]} />
      </div>
      <div>
        <Todo />
        <Mealplan />
        <Notes />
      </div>
    </div>
  )
}