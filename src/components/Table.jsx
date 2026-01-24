import UserData from './UserData'
import TableHeaderCell from './TableHeaderCell'
import './Table.css'

const Table = () => {
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
        </>
    )
}

export default Table