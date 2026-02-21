"use client"

import { useEffect, useState } from "react"

interface User {
  name: string
  email: string
  id: string
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )
      const data: User[] = await res.json()
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users