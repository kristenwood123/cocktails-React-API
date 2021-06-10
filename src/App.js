import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
//components
import Navbar from './components/Navbar'
import { AppProvider } from './context'
function App() {
  return (
  <AppProvider>
    <div>
      <h2>App component</h2>
    </div>
  </AppProvider>
  )
}

export default App
