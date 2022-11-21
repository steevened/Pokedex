import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Abilities from './Abilities'
import Movements from './Movements'
import Stats from './Stats'
import Types from './Types'

const PokedexInfo = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})

  useState(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
  }, [])

  // console.log(pokemon)

  return (
    <div className='w-full h-full pt-24'>
      <h1 className='text-6xl text-center font-bold py-10'>
        {pokemon.name?.[0].toUpperCase()}
        {pokemon.name?.slice(1)}
      </h1>
      <div className='flex flex-col md:flex-row md:container md:mx-auto'>
        <div className='flex-1'>
          <div className='flex flex-col md:flex-row md:w-11/12 sm:gap-2 lg:gap-12 mx-auto'>
            <Types pokemon={pokemon} />
            <Abilities pokemon={pokemon} />
          </div>
          <Stats pokemon={pokemon} />
        </div>
        <div className='flex-0'>
          <Movements pokemon={pokemon} />
        </div>
      </div>
    </div>
  )
}

export default PokedexInfo
