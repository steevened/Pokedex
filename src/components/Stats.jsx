import React from 'react'

const Stats = ({ pokemon }) => {
  const { stats } = pokemon
  // console.log(stats)
  return (
    <div className=' mt-28 w-11/12 mx-auto'>
      <ul className='container rounded-md mx-auto px-5 pt-28 py-9 bg-base-300 flex flex-col gap-3 relative'>
        <figure className='w-56 mx-auto absolute -translate-x-1/2 -translate-y-1/2  -top-5 left-1/2 hover:scale-110 transition-all duration-300'>
          <img src={pokemon?.sprites?.other.home.front_default} alt='pokemon' />
        </figure>
        <h2 className='text-3xl font-bold text-center mb-1'>Stats</h2>

        <div className='flex text-xl md:text-2xl justify-between mx-4 relative after:absolute after:w-[1px] after:top-4 after:bottom-4 after:bg-primary after:left-1/2 px-5 py-5 '>
          <div>
            <span className='font-bold'>Weight:</span> {pokemon.weight}
          </div>
          <div>
            <span className='font-bold'>Height:</span> {pokemon.height}
          </div>
        </div>

        <div className=' container px-5 grid lg:grid-cols-2 gap-5'>
          {stats?.map((stat) => (
            <li
              key={stat.stat.url}
              className='flex justify-between bg-base-100 px-4 py-3 rounded-md items-center'
            >
              <p className='text-lg font-bold text-secondary'>
                {stat.stat.name[0].toUpperCase()}
                {stat.stat.name.slice(1)}
              </p>
              <div
                className={`radial-progress
                ${
                  stat.base_stat < 50
                    ? 'text-warning/80'
                    : stat.base_stat < 75
                    ? 'text-info'
                    : 'text-success'
                }
                `}
                style={{ '--value': `${stat.base_stat}` }}
              >
                {stat.base_stat}%
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Stats
