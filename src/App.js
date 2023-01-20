import React, { Component } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom'

import Layout from './layout/layout';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';


class App extends Component {
  render() {
    let routes = (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projects-&-Clients' element={<Projects/>}/>
        <Route path='/Contact-Me' element={<Contact/>}/>
      </Routes>
    )

    return(
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
}

export default (App);

