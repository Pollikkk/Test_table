import { useTable } from "../contexts/TableContext"
import { useState } from "react"
import UserModal from './UserModal'
import './UserData.css'

const UserData = () => {
    const {users, setIsOpen, setCurrentUser} = useTable()
    return (
        <>
            {users.map((user) => (
                <tr 
                onClick={() => {
                    setIsOpen(true); 
                    setCurrentUser(user);
                    console.log('USER ' + user)
                }} 
                key={user.id}
                >
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

export default UserData