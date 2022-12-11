import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeSearch = ({
  pokeName,
  searchPokemon,
  setIsSearchBarVisible,
  IsSearchBarVisible,
}) => {
  useState(() => {
    if (pokeName.name.toLowerCase().includes(searchPokemon.toLowerCase())) {
      setIsSearchBarVisible(true)
      // console.log(pokeName.name)
    } else {
      setIsSearchBarVisible(!IsSearchBarVisible)
    }
  }, [searchPokemon])

  const navigate = useNavigate()

  return (
    <div>
      {IsSearchBarVisible && (
        <div
          className="cursor-pointer py-1 text-center"
          onClick={() => navigate(`/pokedex/${pokeName.name}`)}
        >
          {pokeName.name}
        </div>
      )}
    </div>
  )
}

export default PokeSearch
