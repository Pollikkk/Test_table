import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
const API = "https://dummyjson.com/users"

const App = () => {
  const [users, setUsers] = useState([])
  const [sortDirection, setSortDirection] = useState('none')
  const [sortField, setSortField] = useState(null)

  const fetchUsers = async (url) => {
    try{
      const res = await fetch(url)
      const data = await res.json()
      if(data.users.length > 0){
        setUsers(data.users)
      }
      console.log(users)
    } catch (e) {
      console.error(e)
    }
  }

  const onSort = async (field) => {
    console.log(field)
    console.log(sortField)
    if (field == null) return
    let newSortField = sortField
    let newSortDirection = sortDirection
    
    if (sortField !== field) {
      newSortField = field
      newSortDirection = 'asc'
    } else {
      const directions = ['none', 'asc', 'desc']
      const currentIndex = directions.indexOf(sortDirection)
      const nextIndex = (currentIndex + 1) % 3
      console.log(currentIndex)
      newSortDirection = directions[nextIndex]
      
      if (newSortDirection === 'none') {
        newSortField = null
        await fetchUsers(API) //?????????????
        setSortField(null)
        setSortDirection('none')
        return;
      }
    }

    setSortField(newSortField)
    setSortDirection(newSortDirection)
    
    try{
      const res = await fetch(`https://dummyjson.com/users?sortBy=${newSortField}&order=${newSortDirection}`)
      const data = await res.json()
      if(data.users.length > 0){
        setUsers(data.users)
      }
      console.log(users)
      console.log(sortField)
      console.log(sortDirection)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchUsers(API);
  }, [])

  return (
    <>
      <div className = 'content'>
        <Table 
        users={users}
        onSort={onSort}
        direction={sortDirection}
        sortField={sortField}
        />
      </div>
    </>
  )
  
}

export default App