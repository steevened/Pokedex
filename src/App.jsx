import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HandleTheme from './components/HandleTheme'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import PokedexInfo from './components/PokedexInfo'

function App() {
  return (
    <HashRouter>
      <div className='h-screen'>
        <div className='flex items-center justify-center h-full'>
          <Navbar />
          <HandleTheme />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexInfo />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
