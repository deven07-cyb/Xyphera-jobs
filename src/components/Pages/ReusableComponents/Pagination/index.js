import React from 'react';
import './pagination.css'; // Example CSS file for styling

function Pagination({
  currentPage,
  totalPages,
  recordsPerPage,
  onPageChange,
  onRecordsPerPageChange,
}) {
  return (
    <div className="pagination-container">
      <div className="pagination-records">
        <select value={recordsPerPage} onChange={onRecordsPerPageChange}>
          <option value={5}>5 List</option>
          <option value={10}>10 List</option>
          <option value={20}>20 List</option>
          <option value={50}>50 List</option>
        </select>
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>

        {currentPage > 2 && (
          <button onClick={() => onPageChange(1)}>1</button>
        )}

        {currentPage > 3 && <span className="dots">...</span>}

        {currentPage > 1 && (
          <button onClick={() => onPageChange(currentPage - 1)}>
            {currentPage - 1}
          </button>
        )}

        <button className="active">{currentPage}</button>

        {currentPage < totalPages && (
          <button onClick={() => onPageChange(currentPage + 1)}>
            {currentPage + 1}
          </button>
        )}

        {currentPage < totalPages - 2 && <span className="dots">...</span>}

        {currentPage < totalPages - 1 && (
          <button onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        )}

        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Pagination;
