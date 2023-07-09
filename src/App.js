import React from 'react'
import './App.css'

import { Header, Nakamura, Kwansei, Navbar, Irises, Mssa } from './containers'
import irises from './assets/irises.png'
import mssa from './assets/mssa.png'

const App = () => {
  return (
    <div className="App">
      <div className="black__bg">
        <Navbar/>
      </div>
      <div className="image__bg">
        <Header/>
        <Nakamura/>
        <Kwansei/>
      </div>
      <div className="black__bg">
        <Irises/>
        <div className="painting__irises-image">
          <img src={irises} alt="" />
        </div>
        <div className="painting__mssa-image">
          <img src={mssa} alt="" />
        </div>
        <Mssa/>
      </div>
      
      
      
    </div>
    
  )
}

export default App

