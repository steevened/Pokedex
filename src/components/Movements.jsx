import React from 'react'

const Movements = ({ pokemon }) => {
  const { moves } = pokemon
  // console.log(moves)

  return (
    <div className=' w-11/12 mx-auto mt-10 mb-5'>
      <div className='collapse  rounded-md'>
        <input type='checkbox' className='peer' />

        <div className='collapse-title bg-neutral peer-checked:bg-base-300 relative'>
          <h2 className='text-center text-2xl font-bold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            Movements
          </h2>
        </div>
        <div className='collapse-content bg-neutral  peer-checked:bg-base-300 '>
          <ul className='grid grid-cols-2 gap-3  justify-items-center'>
            {moves?.map((move) => (
              <li
                key={move.move.url}
                className='bg-base-100 cursor-auto btn btn-ghost rounded-md py-2 text-center w-36 mx-2'
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
