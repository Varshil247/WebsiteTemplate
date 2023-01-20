import React from 'react'
import classes from './sidebar.module.css'
import Navlinks from '../navlinks/navlinks'
import Backdrop from '../../ui/backdrop/backdrop'
import Container from '../../ui/container/container'

const sidebar = (props) => {
  let attachedClasses = [classes.sidebar, classes.close]
  if (props.open){
    attachedClasses = [classes.sidebar, classes.open]
  }

  return (
    <div>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
          <Container>
            <nav>
              <Navlinks/>
            </nav>
          </Container>
        </div>
    </div>
  )
}

export default sidebar