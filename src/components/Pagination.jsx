import { useTable } from "../contexts/TableContext"
import './Pagination.css'

const Pagination = ({totalPages}) => {
    const {page, setPage} = useTable()

    return(
        <>
            <div className='pagination'>
                <button className='paginationButton' disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</button>
                <div>{page} / {totalPages}</div>
                <button className='paginationButton' disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
            </div>
        </>
    )
}

export default Pagination