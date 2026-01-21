import { sortIcons } from '../assets/icons'
import './TableHeaderCell.css'

const TableHeaderCell = ({ field, label, onSort, sortField, sortDirection}) => {
    const getSortIcon = () => {
            if (sortField !== field){
                console.log('sortField ' + sortField)
                console.log('field ' + field)
                return <div className="arrow"></div>
            } 

            const src = sortIcons[sortDirection]
            console.log('src' + src)
            return src ? <img className="arrow" src={src} alt={`${sortDirection} sort`}/> : <div className="arrow"></div>
        }
    return (
        <>
            <th onClick={() => {onSort(field)}}>
                <div className="cellContent">
                     <div>{label}</div>
                     {getSortIcon()}
                </div>
            </th>
        </>
    )
}

export default TableHeaderCell