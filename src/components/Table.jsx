import { useTable } from "../contexts/TableContext"
import UserData from './UserData'
import TableHeaderCell from './TableHeaderCell'
import UserModal from './UserModal'
import './Table.css'

const Table = () => {
    const {isOpen, setIsOpen} = useTable()

    const columnConfig = [
      { field: 'firstName', label: 'Фамилия' },
      { field: 'lastName', label: 'Имя' },
      { field: 'maidenName', label: 'Отчество' },
      { field: 'age', label: 'Возраст' },
      { field: 'gender', label: 'Гендер' },
      { field: 'phone', label: 'Номер телефона' },
      { field: '', label: 'Email' },
      { field: '', label: 'Адрес' },
    ]

    return (
        <>
            <table>
              <thead>
                <tr>
                  {columnConfig.map(({ field, label }) => (
                    <TableHeaderCell 
                      key={label}
                      field={field} 
                      label={label}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                <UserData />
              </tbody>
            </table>

            <UserModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </>
    )
}

export default Table