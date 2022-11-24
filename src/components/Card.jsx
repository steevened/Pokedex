import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='text-center mt-10 text-3xl flex flex-col gap-2 container mx-auto w-11/12 bg-base-300 dark:bg-lBase300 py-5 rounded-md'>
      {children}
    </div>
  )
}

export default Card
