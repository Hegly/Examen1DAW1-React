import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Home} from './components/Home'
import {NavBar} from './components/NavBar'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Usuarios } from './components/Usuarios'
import { Plantas } from './components/Plantas'
import { Eventos } from './components/Eventos'

function App() {
  
  return (
    <>

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/usuarios' element={<Usuarios/>}></Route>
          <Route path='/plantas' element={<Plantas/>}></Route>
          <Route path='/eventos' element={<Eventos/>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>

    </>
  )
}

export default App
