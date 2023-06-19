import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Index'
import Login from './pages/Login/Index'
import About from './pages/About/Index'
import Contact from './pages/Contact/Index'
import Register from './pages/Register/Index'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <section>
      <Navbar/>
      <Toaster/>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/login' Component={Login} />
                <Route path='/register' Component={Register} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
            </Routes>
    </section>
  )
}

export default App
