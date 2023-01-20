import React from 'react'
import classes from './navlink.module.css'

import { NavLink } from 'react-router-dom'

const navlink = (props) => {
  return( 
    <li className={props.uniqueLink ? classes.uniqueLink : classes.defaultLink}>
      <NavLink to={props.link} className={({ isActive }) => (isActive ? classes.active : '')}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default navlink