import React from 'react'
import Card from './Card'

const Abilities = ({ pokemon }) => {
  const { abilities } = pokemon
  // console.log(abilities)
  return (
    <Card>
      <div>
        <h2 className='text-3xl font-bold dark:text-lbaseContent'>Abilities</h2>
      </div>
      <ul className='text-2xl mt-2 mx-4 flex flex-col gap-2 font-bold'>
        {abilities?.map((ability) => (
          <li
            key={ability?.ability.url}
            className='text-primary bg-base-100 py-2 rounded-md mx-3 dark:text-lPrimary  dark:bg-lBase100'
          >
            <h2>
              {ability?.ability.name[0].toUpperCase()}
              {ability?.ability.name.slice(1)}
            </h2>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Abilities
