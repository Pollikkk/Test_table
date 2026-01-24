import { useTableContext } from '../contexts/TableContext'

export const useTable = () => {
  const { state, actions } = useTableContext()
  
  return {
    // Состояние
    sortField: state.sortField,
    sortDirection: state.sortDirection,
    activeFilterField: state.activeFilterField,
    filters: state.filters,
    users: state.users,
    
    // Действия
    setSort: actions.setSort,
    setActiveFilterField: actions.setActiveFilterField,
    setFilter: actions.setFilter,
    setUsers: actions.setUsers,
  }
}