import { useMemo } from "react"
import { useTable } from "../contexts/TableContext"
import './Filter.css'

const Filter = ({ field }) => {
    const { rawUsers, filter, setFilter } = useTable()

    const uniqueValues = useMemo(() => {
      const values = rawUsers
        .map((u) => u?.[field])
        .filter((v) => v != null && v !== ""); // убираем пустые значения

      return [...new Set(values)].sort();
    }, [rawUsers, field]);

    return (
        <>
            <div className="filterField" onClick={(e) => e.stopPropagation()}>
                {uniqueValues.map((val) => (
                    <button 
                        className="chooseFilter" 
                        onClick={() => setFilter({key: field, value: val})} 
                        key={String(val)} 
                    > 
                        {val} 
                    </button>
                ))}
                
                    {console.log('FIELD ' + field)}
                    {console.log('FILTER ' + filter.key + " " + filter.value)}
            </div>
        </>
    )
}

export default Filter