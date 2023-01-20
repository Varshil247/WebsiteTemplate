import React from 'react'
import classes from './navbar.module.css'

import Navlinks from '../navlinks/navlinks'
import SidebarToggle from '../sidebar/sidebarToggle/sidebarToggle'
import Container from '../../ui/container/container'

const navbar = (props) => {
  return (
    <header className={classes.nav}>
      <Container>
        <div className={classes.navbar}>
          <div className={classes.logo}>
              My Portfolio
          </div>
          <nav className={classes.DesktopOnly}>
            <Navlinks header={true}/>
          </nav>
          <SidebarToggle clicked={props.toggleSidebar}/>
        </div>
      </Container>
    </header>
  )
}

export default navbar