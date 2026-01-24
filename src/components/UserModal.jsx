import { useTable } from "../contexts/TableContext"
import './UserModal.css'
import crossMark from '../assets/cross-mark.svg'

const UserModal = ({isOpen, onClose}) => {
    if (!isOpen) return null
    const {currentUser} = useTable()
    return (
        <>
            <div className="containerModal" onClick={(e) => e.stopPropagation()}>
                <div className="userModal">
                    <div><b>{`ФИО: ${currentUser.firstName} ${currentUser.lastName} ${currentUser.maidenName}`}</b></div>
                    <div><img src={currentUser.image}></img></div>
                    <div>{`Возраст: ${currentUser.age}`}</div>
                    <div>{`Адрес: страна ${currentUser.address.country}, город ${currentUser.address.city}, штат ${currentUser.address.state}, улица ${currentUser.address.address}`}</div>
                    <div>{`Рост: ${currentUser.height}`}</div>
                    <div>{`Вес: ${currentUser.weight}`}</div>
                    <div>{`Номер телефона: ${currentUser.phone}`}</div>
                    <div>{`Email: ${currentUser.email}`}</div>

                    <img src={crossMark} className="closeModal" onClick={onClose}></img>
                </div>
            </div>
            
        </>
    )
}

export default UserModal