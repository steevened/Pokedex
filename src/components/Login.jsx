import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeName } from '../store/slices/name.slice'

const Login = () => {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUserName = () => {
    dispatch(changeName(userName))
    navigate('/pokedex')
  }

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-5xl font-bold'>Welcome</h1>
      {/* <h2 className='text-2xl'>Enter your name</h2> */}
      <form onSubmit={handleUserName} className='shadow-lg shadow-base-100'>
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          className='input bg-base-300 focus:outline-none rounded-none text-bold text-center placeholder:font-bold placeholder:text-primary text-accent font-bold'
          placeholder='Enter your name'
          type='text'
        />
        <button className='btn rounded-none'>Submit</button>
      </form>
    </div>
  )
}

export default Login
