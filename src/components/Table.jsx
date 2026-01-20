import UserData from './UserData'
import { sortIcons } from '../assets/icons'
import './Table.css'

const Table = ({users, onSort, direction}) => {

    const getSortIcon = (dir) => {
      const src = sortIcons[dir]
      return src ? <img src={src} alt={`${dir} sort`} width={1} height={1} /> : null
    }

    return (
        <>
            <table>
              <thead>
                <tr>
                  <th onClick={() => {onSort('firstName')}}>
                    Фамилия
                    {getSortIcon(direction)}
                  </th>
                  <th onClick={() => onSort('lastName')}>Имя</th>
                  <th onClick={() => onSort('maidenName')}>Отчество</th>
                  <th onClick={() => onSort('age')}>Возраст</th>
                  <th onClick={() => onSort('gender')}>Гендер</th>
                  <th onClick={() => onSort('phone')}>Номер телефона</th>
                  <th>Email</th>
                  <th>Адрес</th>
                </tr>
              </thead>
              <tbody>
                <UserData users={users} />
              </tbody>
            </table>
        </>
    )
}

export default Table;