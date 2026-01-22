import UserData from './UserData'
import TableHeaderCell from './TableHeaderCell'
import './Table.css'

const Table = ({ users, onSort, direction, sortField }) => {

    const columnConfig = [
      { field: 'firstName', label: 'Фамилия' },
      { field: 'lastName', label: 'Имя' },
      { field: 'maidenName', label: 'Отчество' },
      { field: 'age', label: 'Возраст' },
      { field: 'gender', label: 'Гендер' },
      { field: 'phone', label: 'Номер телефона' },
      { field: null, label: 'Email' },
      { field: null, label: 'Адрес' },
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
                      onSort={onSort}
                      sortField={sortField}
                      sortDirection={direction}
                      users={users}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                <UserData users={users} />
              </tbody>
            </table>
        </>
    )
}

export default Table