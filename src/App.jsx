import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import ListUser from './components/ListUser'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5 className='text-4xl font-bold text-center my-10'>React CRUD App using PHP and MySQL</h5>
      <nav className='py-4 px-8 bg-slate-800 text-white'>
        <ul className="flex justify-center gap-16">
          <li className="p-3">
            <NavLink to={'/'}>
              List of Users
            </NavLink>
          </li>
          <li className="p-3">
            <NavLink to={'user/create'}>
              Create User
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path='user/create' element={<CreateUser />} />
        <Route path='user/:id/edit' element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
