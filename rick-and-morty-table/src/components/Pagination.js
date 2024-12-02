import React from 'react';
import '../style/Pagination.css';

const Pagination = ({ page, setPage, pageSize, setPageSize }) => {
  return (
    <div className="pagination-container">
  <div className="pagination">
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>
      Previous
    </button>
    <span>Page {page}</span>
    <button onClick={() => setPage(page + 1)}>Next</button>
  </div>
  <div className="page-size-selector">
    <label htmlFor="pageSize">Results per page:</label>
    <select
      id="pageSize"
      value={pageSize}
      onChange={(e) => {
        setPageSize(Number(e.target.value));
        setPage(1); 
      }}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>

    </select>
  </div>
</div>

  );
};

export default Pagination;
