import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import './App.css';

import { Navbar } from "./components/navbar/Navbar";


const App = () => {
  return (
      <Router>
        <Navbar />
      </Router>
  )
}

export default App;
