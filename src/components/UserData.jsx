const UserData = ({users}) => {
    return (
        <>
            {
                users.map((user) => {
                    return(
                        <tr key={user.id}>
                            <td>{user.firstName + " " + user.lastName + " " + user.maidenName}</td>
                            <td>{user.age}</td>
                            <td>{`${user.address.address} , ${user.address.city}, ${user.address.state} ${user.address.postalCode}`}</td>
                            <td>{user.height}</td>
                            <td>{user.weight}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>< img src={user.image} alt="My Image" /></td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData;