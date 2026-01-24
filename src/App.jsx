import { useEffect, useMemo,useState } from 'react'
import { TableContext } from './contexts/TableContext'
import Table from './components/Table'
import './App.css'
import Pagination from './components/Pagination'

const API = "https://dummyjson.com/users"

const App = () => {
  const [rawUsers, setRawUsers] = useState([])//обычный список пользователей
  const [users, setUsers] = useState([])//текущий список пользователей

  const [sortField, setSortField] = useState(null)//сортировка
  const [sortDirection, setSortDirection] = useState('none')

  const [activeFilterField, setActiveFilterField] = useState(null)//фильтр
  const [filter, setFilter] = useState({ key: null, value: null })

  const [currentUser, setCurrentUser] = useState(null)//открытый пользователь
  const [isOpen, setIsOpen] = useState(false)

  const pageSize = 5  //постраничный вывод пользоватлей
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(users.length / pageSize)
  const currentPageUsers = useMemo(() => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    return users.slice(start, end)
  }, [users, page])

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

  const contextValue = useMemo(() => ({
    users,         
    rawUsers,        
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
    currentPageUsers,
    page,
    setPage
  }), [users, rawUsers, sortField, sortDirection, activeFilterField, filter, currentUser, isOpen, currentPageUsers, page])

  return (
    <>
      <TableContext.Provider value={contextValue}>
        <Table />
        <Pagination totalPages={totalPages}/>
      </TableContext.Provider>
    </>
  )
  
}

export default App