import React from 'react'
import './App.css'

import { Header, Nakamura, Kwansei } from './containers'

const App = () => {
  return (
    <div className="App">
      <div className="image__bg">
        <Header/>
        <Nakamura/>
        <Kwansei/>
      </div>
      <div className="black__bg">
        
      </div>
    </div>
    
  )
}

export default App

