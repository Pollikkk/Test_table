import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
const API = "https://dummyjson.com/users"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.users.length > 0){
        setUsers(data.users)
      }
      console.log(users)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchUsers(API);
  }, [])

  return (
    <>
      <div class = 'content'>
        <Table users={users}/>
      </div>
    </>
  )
  
}

export default App;
