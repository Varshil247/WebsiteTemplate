import React from 'react'
import classes from './footer.module.css'

import Container from '../../ui/container/container'
import { CURRENT_YEAR } from '../../../config'

const footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.rights}>
          <p>@ My Portfolio {CURRENT_YEAR} All Rights Reserved</p>
          <p>Developed By Varshil Patel</p>
        </div>
      </Container>
    </footer>
  )
}

export default footer