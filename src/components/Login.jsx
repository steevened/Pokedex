import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeName } from '../store/slices/name.slice'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUserName = () => {
    dispatch(changeName(userName))
    navigate('/pokedex')
  }

  // console.log(submitted)

  return (
    <div className='flex flex-col items-center gap-5 '>
      <h1 className='text-8xl mb-10  font-bold dark:text-lNeutral'>Welcome</h1>
      {/* <h2 className='text-2xl'>Enter your name</h2> */}
      <form
        onSubmit={handleUserName}
        className='shadow-lg shadow-base-100 dark:shadow-lBase300'
      >
        <input
          value={userName}
          type='text'
          placeholder='Enter your Name'
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          className={`input bg-base-300 dark:bg-lBase300 focus:outline-none rounded-none text-bold text-center placeholder:font-bold placeholder:text-primary dark:placeholder:text-lPrimary text-accent dark:text-lAccent font-bold'
          placeholder='Enter your name'
           ${
             userName.length <= 5 && !submitted
               ? 'input-bordered input-error'
               : ''
           }`}
        />
        <button
          onClick={() => setSubmitted(true)}
          className='btn border-none rounded-none dark:bg-lBase200 dark:text-lNeutral'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
