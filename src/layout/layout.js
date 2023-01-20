import React, { Component } from 'react'
import classes from './layout.module.css'

import Navbar from '../components/navigation/navbar/navbar'
import Sidebar from '../components/navigation/sidebar/sidebar'
import Footer from '../components/navigation/footer/footer'

class layout extends Component {
  state = {
    showSidebar: false
  }

  sidebarClosedHandler=()=>{
    this.setState({showSidebar: false})
  }

  toggleSidebarHandler=()=>{
    this.setState((prevState)=>{
      return{ showSidebar: !prevState.showSidebar}
    })
  }

  render() {
    return (
        <div>
            <Navbar 
              toggleSidebar={this.toggleSidebarHandler}/>
            <Sidebar
              open={this.state.showSidebar}
              closed={this.sidebarClosedHandler}/>
            <main className={classes.mainContent}>
              {this.props.children}
            </main>
            <Footer/>
        </div>
    )
  }
}

export default layout