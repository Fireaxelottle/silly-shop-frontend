import React from 'react'
import {
    Column,
    usePagination,
    useSortBy,
    useTable,
    TableOptions,
  } from "react-table";
import { Link } from 'react-router-dom';  


const Table = ({rows, columns, heading , showPagination}) => {

    const data = React.memo(() => rows, [rows]);



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        pageCount,
        state: { pageIndex },
        previousPage,
        canNextPage,
        canPreviousPage,
      } = useTable( columns, data , useSortBy, usePagination);

  return (
    <div className='table'>
      <h1>{heading}</h1>

      <table className="table" >
          <thead>
            jkhj
          </thead>
          <tbody>dsadasd</tbody>
        </table>

        {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
    </div>
  )
}

export default Table
