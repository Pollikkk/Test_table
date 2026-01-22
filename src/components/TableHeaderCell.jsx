import { useState } from "react"
import Filter from './Filter'
import { sortIcons } from '../assets/icons'
import filterIcon from '../assets/filter.svg'
import './TableHeaderCell.css'

const TableHeaderCell = ({ field, label, onSort, sortField, sortDirection, users}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const openFilter = () => setIsFilterOpen(true)
    const closeFilter = () => setIsFilterOpen(false)

    const getSortIcon = () => {//меняем сортировочную иконку
        if (sortField !== field){
            console.log('sortField ' + sortField)
            console.log('field ' + field)
            return <div className="arrow"></div>
        } 
        const src = sortIcons[sortDirection]
        console.log('src' + src)
        return src ? <img className="arrow" src={src} alt={`${sortDirection} sort`}/> : <div className="arrow"></div>
    }

    const closeOpenFilter = (e) => {
        e.stopPropagation()
        console.log('isFilterOpen '+isFilterOpen)
        isFilterOpen ? closeFilter():openFilter()
    }

    const applyFilter = () => {//применить фильтр
        
    }
    return (
        <>
            <th className="cell" onClick={() => {onSort(field)}}>
                <div className="cellContent">
                     <div>{label}</div>
                     {getSortIcon()}
                </div>
                <div className="filter">
                    <img className="filterImg" src={filterIcon} onClick={(e) => closeOpenFilter(e)}></img>
                    {isFilterOpen && (
                        <Filter 
                            onClose={closeFilter}
                            applyFilter={applyFilter}
                            sortField={sortField}
                            field={field}
                            users={users}
                        />
                    )}
                </div>
            </th>
        </>
    )
}

export default TableHeaderCell