interface User{
    name:string
    email: string
    id: string
}

const Users = async () => {
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    const users:User[]  = await res.json()
  return (
    <div>
        <h1>Users</h1>

        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}

export default Users