import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListUser = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {
    // axios.get('http://localhost/api_tuts/users/')
    axios.get('https://reactphp.free.nf/index.php/users/')
    .then(function(res) {
      setUsers(res.data)
    })
  }

  const deleteUser = userId => {
    // axios.delete(`http://localhost/api_tuts/user/${userId}/delete`)
    axios.delete(`https://reactphp.free.nf/index.php/user/${userId}/delete`)
    .then(res => {
      getUsers();
    })
  }

  return (
    <div className='py-12 px-24 overflow-x-auto'>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Mobile Number</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, id) => (
              <tr className="hover:bg-slate-600 hover:text-white" key={id}>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.mobile}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`user/${user.id}/edit`} className='py-2 px-6 bg-blue-700 text-white'>
                    Edit
                  </Link>
                  <button className='py-2 px-6 bg-red-700 text-white ml-2' onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListUser