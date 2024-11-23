import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const [inputs, setInputs] = useState({})
  const formRef = useRef()
  const navigate = useNavigate()

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputs)

    // axios.post('http://localhost/api_tuts/user/save', inputs)
    axios.post('http://reactphp.free.nf/index.php/user/save', inputs)
    .then(function(res) {
      console.log(res.data)
      navigate('/')
    })
    
    formRef.current.reset()
  }

  return (
    <div className='py-6 px-24'>
      <form action="" className='w-full md:w-[700px] mx-auto border p-10' onSubmit={handleSubmit} ref={formRef}>
        <h1 className='font-bold text-2xl'>Create User</h1>
        <div className="mb-4 mt-7">
          <label htmlFor="" className='font-semibold'>Name</label>
          <input type="text" className='w-full p-3 border border-slate-300 mt-1' name='name' onChange={handleChange} />
        </div>
        <div className="my-4">
          <label htmlFor="" className='font-semibold'>Email</label>
          <input type="email" className='w-full p-3 border border-slate-300 mt-1' name='email' onChange={handleChange} />
        </div>
        <div className="my-4">
          <label htmlFor="" className='font-semibold'>Mobile</label>
          <input type="tel" className='w-full p-3 border border-slate-300 mt-1' name='mobile' onChange={handleChange} />
        </div>
        <button type="submit" className='bg-slate-800 text-white py-3 px-6'>Add User</button>
      </form>
    </div>
  )
}

export default CreateUser