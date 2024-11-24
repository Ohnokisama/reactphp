import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const [inputs, setInputs] = useState({})
  const formRef = useRef()
  const navigate = useNavigate()
  const param = useParams()
  const id = param.id

  useEffect(() => {
    // axios.get(`http://localhost/api_tuts/user/${id}`)
    axios.get(`https://reactphp.free.nf/index.php/user/${id}`)
    .then(function(res) {
      console.log(res.data)
      setInputs(res.data)
    })
  }, [])
  

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputs)
    // axios.put(`http://localhost/api_tuts/user/${id}/edit`, inputs)
    axios.put(`https://reactphp.free.nf/index.php/user/${id}/edit`, inputs)
    .then(function(res) {
      console.log(res.data)
      navigate('/')
    })
    
    formRef.current.reset()
  }

  return (
    <div className='py-6 px-24'>
      <form action="" className='w-full md:w-[700px] mx-auto border p-10' onSubmit={handleSubmit} ref={formRef}>
        <h1 className='font-bold text-2xl'>Edit User</h1>
        <div className="mb-4 mt-7">
          <label htmlFor="" className='font-semibold'>Name</label>
          <input type="text" className='w-full p-3 border border-slate-300 mt-1' name='name' onChange={handleChange} value={inputs.name} />
        </div>
        <div className="my-4">
          <label htmlFor="" className='font-semibold'>Email</label>
          <input type="email" className='w-full p-3 border border-slate-300 mt-1' name='email' onChange={handleChange} value={inputs.email} />
        </div>
        <div className="my-4">
          <label htmlFor="" className='font-semibold'>Mobile</label>
          <input type="tel" className='w-full p-3 border border-slate-300 mt-1' name='mobile' onChange={handleChange} value={inputs.mobile} />
        </div>
        <button type="submit" className='bg-slate-800 text-white py-3 px-6'>Edit User</button>
      </form>
    </div>
  )
}

export default EditUser