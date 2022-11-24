import React from 'react'
import Card from './Card'

const Types = ({ pokemon }) => {
  return (
    <Card>
      <div>
        <h2 className='font-bold dark:text-lNeutral'>
          {pokemon?.types?.length > 1 ? 'Types' : 'Type'}
        </h2>
      </div>
      <div className='text-2xl mt-2 mx-4 flex flex-col gap-2 font-bold'>
        <h2 className='text-primary dark:text-lPrimary bg-base-100 dark:bg-lBase100 py-2 rounded-md mx-3'>
          {pokemon.types?.[0].type.name[0].toUpperCase()}
          {pokemon.types?.[0].type.name.slice(1)}
        </h2>
        {pokemon?.types?.[1] && (
          <h2 className='text-primary dark:text-lPrimary bg-base-100 dark:bg-lBase100 py-2 rounded-md mx-3'>
            {pokemon?.types?.[1].type.name[0].toUpperCase()}
            {pokemon?.types?.[1].type.name.slice(1)}
          </h2>
        )}
      </div>
    </Card>
  )
}

export default Types
