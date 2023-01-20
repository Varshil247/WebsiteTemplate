import React from 'react'
import classes from './sidebarToggle.module.css'

import {CgMenuMotion} from 'react-icons/cg'

const sidebarToggle = (props) => (
  <div className={classes.sidebarToggle} onClick={props.clicked}>
      <CgMenuMotion size={35}/>
  </div>
);

export default sidebarToggle;

