import UserData from './UserData'
import { sortIcons } from '../assets/icons'
import './Table.css'

const Table = ({users, onSort, direction, field}) => {

    const getSortIcon = (dir, f) => {
      const src = sortIcons[dir]
      return f == field ? (src ? <img className="arrow" src={src} alt={`${dir} sort`} width={1} height={1} /> : <div className="arrow"></div>) : <div className="arrow"></div>
    }

    return (
        <>
            <table>
              <thead>
                <tr>
                  <th onClick={() => {onSort('firstName')}}>
                    <div className="cellContent">
                      <div>Фамилия</div>
                      {getSortIcon(direction, 'firstName')}
                    </div>
                  </th>
                  <th onClick={() => onSort('lastName')}>
                    <div className="cellContent">
                      <div>Имя</div>
                      {getSortIcon(direction, 'lastName')}
                    </div>
                  </th>
                  <th onClick={() => onSort('maidenName')}>
                    <div className="cellContent">
                      <div>Отчество</div>
                      {getSortIcon(direction, 'maidenName')}
                    </div>
                  </th>
                  <th onClick={() => onSort('age')}>
                    <div className="cellContent">
                      <div>Возраст</div>
                      {getSortIcon(direction, 'age')}
                    </div>
                  </th>
                  <th onClick={() => onSort('gender')}>
                    <div className="cellContent">
                      <div>Гендер</div>
                      {getSortIcon(direction, 'gender')}
                    </div>
                  </th>
                  <th onClick={() => onSort('phone')}>
                    <div className="cellContent">
                      <div>Номер телефона</div>
                      {getSortIcon(direction, 'phone')}
                    </div>
                  </th>
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