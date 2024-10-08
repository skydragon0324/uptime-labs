import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
