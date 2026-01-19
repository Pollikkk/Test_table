import UserData from './UserData'
import './Table.css'

const Table = ({users}) => {
    return (
        <>
            <table>
              <thead>
                <tr>
                  <th>ФИО</th>
                  <th>Возраст</th>
                  <th>Адрес</th>
                  <th>Рост</th>
                  <th>Вес</th>
                  <th>Номер телефона</th>
                  <th>Email</th>
                  <th>Аватар</th>
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