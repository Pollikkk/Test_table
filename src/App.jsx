import { useEffect, useMemo,useState } from 'react'
import { TableContext } from './contexts/TableContext'
import Table from './components/Table'
import './App.css'

const API = "https://dummyjson.com/users"

const App = () => {
  const [rawUsers, setRawUsers] = useState([])
  const [users, setUsers] = useState([])

  const [sortField, setSortField] = useState(null)
  const [sortDirection, setSortDirection] = useState('none')

  const [activeFilterField, setActiveFilterField] = useState(null)

  const [filter, setFilter] = useState({ key: null, value: null })

  const [currentUser, setCurrentUser] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

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

  useEffect(() => {
    const load = async () => {
      const res = await fetch(API)
      const data = await res.json()
      setRawUsers(data.users || [])
      setUsers(data.users || [])
    }
    load()
  }, [])

  useEffect(() => {
    const loadSorted = async () => {
      // нет сортировки -> вернуть как было
      if (!sortField || sortDirection === 'none') {
        setUsers(rawUsers)
        return
      }

      const res = await fetch(`${API}?sortBy=${sortField}&order=${sortDirection}`)
      const data = await res.json()
      setUsers(data.users || [])
    }
    loadSorted()
  }, [sortField, sortDirection, rawUsers])

  useEffect(() => {
    const loadFiltered = async () => {
      if (!filter.key || filter.value == null || filter.value === '') {
        //setUsers(rawUsers); 
        return
      }

      const res = await fetch(`${API}/filter?key=${encodeURIComponent(filter.key)}&value=${encodeURIComponent(filter.value)}`)
      const data = await res.json()
      setUsers(data.users || [])
    };

    loadFiltered();
  }, [filter, rawUsers])

  const onSort = (field) => {
    if (!field) return
    console.log(field)
    console.log(sortField)
    
    if (sortField !== field) {
      setSortField(field)
      setSortDirection('asc')
      return
    } 

    const directions = ['none', 'asc', 'desc']
    const nextIndex = (directions.indexOf(sortDirection) + 1) % 3
    console.log('nextIndex '+nextIndex)
    console.log('directions[nextIndex] '+directions[nextIndex])

    setSortDirection(directions[nextIndex])
    if (nextIndex === 'none') setSortField(null)
  }

  const getSortedUsers = async () => {
    const res = await fetch(`https://dummyjson.com/users?sortBy=${sortField}&order=${sortDirection}`)
    const data = await res.json()
    setUsers(data.users)
  }

  const contextValue = useMemo(() => ({
    users,         // то, что выводим
    rawUsers,             // если нужны "сырые" данные
    sortField,
    sortDirection,
    onSort,
    activeFilterField,
    setActiveFilterField,
    filter,
    setFilter,
    currentUser,
    setCurrentUser,
    isOpen,
    setIsOpen,
  }), [users, rawUsers, sortField, sortDirection, activeFilterField, filter, currentUser, isOpen])

  return (
    <>
      <TableContext.Provider value={contextValue}>
        <Table />
      </TableContext.Provider>
    </>
  )
  
}

export default App