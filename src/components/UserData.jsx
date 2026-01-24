import { useTable } from "../contexts/TableContext"

const UserData = () => {
    const {users} = useTable()
    return (
        <>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.maidenName}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{`${user.address.country}, ${user.address.city}`}</td>
                </tr>
            ))}
        </>
    )
}

export default UserData;