import React from 'react'
import classes from './navlinks.module.css'

import Navlink from './navlink/navlink'

const navlinks = () => {
  return (
    <ul className={classes.navlinks}>
      <Navlink link='/'>Home</Navlink>
      <Navlink link='/Projects-&-Clients'>Projects & Clients</Navlink>
      <Navlink link='/Contact-Me'>Contact Me</Navlink>
    </ul>
  )
}

export default navlinks