import UserData from './UserData'

const Table = ({users}) => {
    return (
        <>
            <table>
              <thead>
                <tr>
                  <th>ФИО</th>
                  <th>возраст</th>
                  <th>поля адреса</th>
                  <th>рост</th>
                  <th>вес</th>
                  <th>номер телефона</th>
                  <th>email</th>
                  <th>аватар</th>
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