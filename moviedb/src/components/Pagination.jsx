import React from 'react';
import PaginationStyle from '../styles/PaginationStyle.module.css';

const Pagination = ({page, totalPages, handlePageClick}) => {

    const generatePagination = () => {
        const pagination = [];
        const startPage = Math.max(2, page - 3);
        const endPage = Math.min(totalPages - 1, page + 3);

        pagination.push(
            <button
            key={1}
            className={page === 1 ? PaginationStyle.activePage : ''}
            onClick={() => handlePageClick(1)}
            >
            1
            </button>
        );

        if (startPage > 2) {
            pagination.push(<span key="start-ellipsis">...</span>);
        }

        for (let i = startPage; i <= endPage; i++) {
            pagination.push(
            <button
                key={i}
                className={page === i ? PaginationStyle.activePage : ''}
                onClick={() => handlePageClick(i)}
            >
                {i}
            </button>
            );
        }
        
        if (endPage < totalPages - 1) {
            pagination.push(<span key="end-ellipsis">...</span>);
        }

        if(totalPages !== 1){
            pagination.push(
                <button
                key={totalPages}
                className={page === totalPages ? PaginationStyle.activePage : ''}
                onClick={() => handlePageClick(totalPages)}
                >
                {totalPages}
                </button>
            );
        }
        
    return pagination;
    };

  return (
    <div className={PaginationStyle.pagination}>
        {generatePagination()}
    </div>
  )
}

export default Pagination
