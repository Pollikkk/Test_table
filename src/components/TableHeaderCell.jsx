import { useEffect } from "react"
import { useTable } from "../contexts/TableContext"
import Filter from './Filter'
import { sortIcons } from '../assets/icons'
import filterIcon from '../assets/filter.svg'
import './TableHeaderCell.css'

const TableHeaderCell = ({ field, label}) => {
    const {
        sortField,
        sortDirection,
        onSort,
        activeFilterField,
        setActiveFilterField,
    } = useTable()

    const getSortIcon = () => {//меняем сортировочную иконку
        if (!field || sortField !== field){
            return <div className="arrow"></div>
        } 
        const src = sortIcons[sortDirection]
        return src ? <img className="arrow" src={src} alt={`${sortDirection} sort`}/> : <div className="arrow"></div>
    }

    const closeOpenFilter = (e) => {
        e.stopPropagation()
        if (!field) return
        setActiveFilterField(activeFilterField === field ? null : field)
    }

    useEffect(() => {
        const onDocClick = () => setActiveFilterField(null)
        if (!activeFilterField) return
        document.addEventListener('click', onDocClick)
        return () => document.removeEventListener('click', onDocClick)
    }, [activeFilterField]);
        
    return (
        <>
            <th className="cell" onClick={() => field && onSort(field)}>
                <div className="cellContent">
                     <div>{label}</div>
                     {getSortIcon()}
                </div>
                
                <div className="filter">
                    {field && (
                        <img 
                            className="filterImg" 
                            src={filterIcon} 
                            alt="filter"
                            onClick={closeOpenFilter}
                        />)
                    }

                    {activeFilterField === field && (
                        <div class="filterModal">
                            <Filter field={field} />
                        </div>
                    )}
                </div>
            </th>
        </>
    )
}

export default TableHeaderCell