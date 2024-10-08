import React, { useState, useEffect, memo } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce

  // Call onSearch when the debounced search term changes
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search Pokemon..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full md:w-[500px] p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default memo(SearchBar);
