import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const title = 'POKEDEX'
  return (
    <div className='navbar fixed  normal-case top-0 backdrop-blur-md bg-base-200/90 dark:bg-lBase200/90 z-20'>
      <div className='container mx-auto'>
        <Link to='/' className='btn btn-ghost'>
          <h2 className='dark:text-lbaseContent'>Pokedex</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
