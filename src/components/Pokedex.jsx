import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokedexCard from './PokedexCard'

const Pokedex = () => {
  const name = useSelector((state) => state.name)
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])
  const [searchPokemon, setSearchPokemon] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => setPokemons(res.data.results))

    axios
      .get('https://pokeapi.co/api/v2/type/')
      .then((res) => setTypes(res.data.results))
  }, [])

  const searchPokeBtn = () => {
    navigate(`/pokedex/${searchPokemon.toLowerCase()}`)
  }

  // console.log(types)

  return (
    <div className='w-full  h-full pt-24'>
      <h1 className='text-5xl font-bold text-center'>
        {name ? `Hello ${name[0].toUpperCase()}${name.slice(1)}` : 'Hello'}
      </h1>
      <h3 className='text-xl text-center mt-4'>Choose your pokedex</h3>
      <div className='form-control py-5 grid place-content-center gap-3'>
        <form>
          <div className='input-group'>
            <input
              onChange={(e) => setSearchPokemon(e.target.value)}
              value={searchPokemon}
              type='text'
              placeholder='Search…'
              className='input bg-base-300 focus:input-bordered focus:outline-none'
            />
            <button className='btn btn-square' onClick={searchPokeBtn}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </form>
        <select className='select w-full bg-base-300 focus:outline-none'>
          <option disabled selected>
            Search by type
          </option>
          {types.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <ul className='grid md:container md:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5 mt-8'>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>
            <PokedexCard url={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pokedex
