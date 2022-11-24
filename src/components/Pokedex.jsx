import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokedexCard from './PokedexCard'
import ReactPaginate from 'react-paginate'

const Pokedex = () => {
  const name = useSelector((state) => state.name)

  const [pages, setPages] = useState([])
  const [typePages, setTypePages] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])
  const [searchPokemon, setSearchPokemon] = useState('')
  const [toggleBar, setToggleBar] = useState(true)
  const [page, setPage] = useState(20)
  const [offset, setOffset] = useState(0)

  const navigate = useNavigate()

  useEffect(
    () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((res) => setPages(res.data.count))

      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/?limit=${page}&offset=${offset}`
        )
        .then((res) => setPokemons(res.data.results))

      axios
        .get(`https://pokeapi.co/api/v2/type/`)
        .then((res) => setTypes(res.data.results))
    },
    [offset],
    []
  )

  const searchPokeBtn = () => {
    navigate(`/pokedex/${searchPokemon.toLowerCase()}`)
  }

  const filterType = (e) => {
    const url = e.target.value
    setOffset(0)
    axios.get(`${url}?limit=20&offset=20`).then((res) => {
      setPokemons(res.data.pokemon)
      setPages(res.data.pokemon.length)
    })
  }

  const handlePageClick = (data) => {
    const selected = data.selected
    setOffset(selected * page)
  }

  // console.log(offset)

  return (
    <div className='w-full  h-full pt-24'>
      <h1 className='text-6xl font-bold text-center dark:text-lbaseContent'>
        {name ? `Hello ${name[0].toUpperCase()}${name.slice(1)}` : 'Hello'}
      </h1>
      <h3 className='text-3xl text-center mt-5 dark:text-lbaseContent'>
        Choose your pokedex
      </h3>

      <div className='form-control mt-6  py-5 grid place-content-center gap-3'>
        {toggleBar ? (
          <form>
            <div className='input-group'>
              <input
                onChange={(e) => setSearchPokemon(e.target.value)}
                value={searchPokemon}
                type='text'
                placeholder='Search by name…'
                className='input bg-base-300 dark:bg-lBase300 focus:input-bordered focus:outline-none
                placeholder:text-neutral-content dark:placeholder:text-lNeutral/50 placeholder:font-bold placeholder:text-sm dark:text-lNeutral'
              />
              <button
                className='btn btn-square dark:bg-lBase200 border-none dark:text-lNeutral/50'
                onClick={searchPokeBtn}
              >
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
        ) : (
          <div className='w-[336px] dark:text-lNeutral/50'>
            <select
              onChange={filterType}
              className='select w-full bg-base-300  dark:bg-lBase300 focus:outline-none'
            >
              <option disabled selected className=' '>
                Search by type...
              </option>
              {types.map((type) => (
                <option value={type.url} key={type.url}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className=' flex flex-col gap-3 mb-10'>
        {/* start of input */}
        <div className='flex  items-center justify-center gap-3'>
          <span className='text-primary dark:text-lPrimary'>Name</span>
          <input
            type='checkbox'
            className='toggle toggle-md rounded-none dark:bg-lBase300'
            onChange={() => setToggleBar(!toggleBar)}
          />

          <span className='text-secondary dark:text-lSecondary'>Type</span>
        </div>
        {/* end of input */}
      </div>
      <ul className='grid md:container md:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5 mt-8'>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
            <PokedexCard
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'previous'}
        containerClassName='btn-group w-100 flex justify-center mx-auto my-10'
        activeLinkClassName='btn btn-primary dark:btn-lPrimary'
        breakLinkClassName='btn btn-disabled dark:text-lNeutral rounded-none'
        previousLinkClassName='btn btn-ghost dark:text-lNeutral rounded-none'
        nextLinkClassName='btn btn-ghost rounded-none dark:text-lNeutral'
        pageLinkClassName='btn rounded-none dark:bg-lbaseContent border-none'
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(pages / page)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
      />
    </div>
  )
}

export default Pokedex
