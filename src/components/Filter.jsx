import { useState } from "react"

const Filter = ({onClose, applyFilter, sortField, field, users}) => {
    const [filter, setFilter] = useState({})//добавим конкретные свойства для данного sortField
    if (field!==sortField) return null

    const handleApply = () => {
        applyFilter(filter)
        onClose()
    }

    return (
        <>
            <div className="filterField">
                {
                    users.map((user) => {
                        <div>{user}</div>
                    })
                    
                }
                <button onClick={handleApply}>Применить</button>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </>
    )
}

export default Filter