import React from 'react'
import { Link } from 'react-router-dom'
import  { Navigation, NavSection, ListItem, Headline } from 'lib/navbar'

//add log in/out and sign up


export const Navbar = () => {
  return (
    <NavSection>
      <Navigation>
        <ListItem>
          <Link to='/day'>Daily</Link>
        </ListItem>
        <ListItem>
          <Link to='/'>Weekly</Link>
        </ListItem>
        <ListItem>
          <Link to='/month'>Monthly</Link>
        </ListItem>
      </Navigation>
      <Headline>Life planner</Headline>
    </NavSection>
  )
}