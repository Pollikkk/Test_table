import { createContext, useContext } from 'react'

export const TableContext = createContext(null)

export const useTable = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('useTableContext must be used inside <TableContext.Provider>')
  }
  return context
}
