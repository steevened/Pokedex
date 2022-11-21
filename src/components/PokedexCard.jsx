import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PokedexCard({ url }) {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data))
  }, [])

  console.log(pokemon)
  return (
    <div className='card card-compact card-side bg-base-200 shadow-lg shadow-base-100'>
      {pokemon?.sprites?.other.home ? (
        <figure className=' w-32 bg-primary rounded-full p-5 m-5'>
          <img
            loading='lazy'
            src={pokemon?.sprites?.other.home.front_default}
            alt='pokemon'
          />
        </figure>
      ) : (
        <div className='ml-10 h-full justify-center items-center'>
          <button className='btn btn-ghost loading'></button>
        </div>
      )}

      <div className='card-body  h-auto  items-center justify-center'>
        <div className='card-title text-2xl'>
          <h2>
            {pokemon.name?.[0].toUpperCase()}
            {pokemon.name?.slice(1)}
          </h2>
        </div>

        <div className='card-actions'>
          <Link
            to={`/pokedex/${pokemon.id}`}
            className='btn btn-sm rounded-none'
          >
            <h3>View</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokedexCard
