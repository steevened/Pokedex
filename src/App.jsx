import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HandleTheme from './components/HandleTheme'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import PokedexInfo from './components/PokedexInfo'
import ReactPaginate from 'react-paginate'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <HashRouter>
      <div className='flex items-center justify-center min-h-screen h-full dark:bg-lBase100'>
        <Navbar />
        <HandleTheme />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
