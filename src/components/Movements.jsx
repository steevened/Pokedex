import React from 'react'

const Movements = ({ pokemon }) => {
  const { moves } = pokemon

  return (
    <div className=' w-11/12 mx-auto mt-10 mb-5'>
      <div className='collapse  rounded-md'>
        <input type='checkbox' className='peer' />

        <div className='collapse-title bg-neutral dark:bg-lBase200 peer-checked:bg-base-300 dark:peer-checked:bg-lBase300 relative'>
          <h2 className='text-center text-2xl font-bold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-lbaseContent'>
            Movements
          </h2>
        </div>
        <div className='collapse-content bg-neutral  peer-checked:bg-base-300 dark:peer-checked:bg-lBase300'>
          <ul className='grid grid-cols-2 gap-3  justify-items-center'>
            {moves?.map((move) => (
              <li
                key={move.move.url}
                className='bg-base-100 dark:bg-lBase100 cursor-auto btn btn-ghost rounded-md py-2 text-center dark:text-lNeutral w-36 mx-2 dark:hover:bg-lBase200'
              >
                <p>{move.move.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Movements
