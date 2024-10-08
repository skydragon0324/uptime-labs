import React, { useEffect, useState, useCallback } from "react";
import { fetchPokemon, markFavorite } from "../services/api";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import { usePokemon } from "../context/PokemonContext";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { allPokemonList } = usePokemon();
  const limit = 10;

  // Fetch data only when there's no search term
  useEffect(() => {
    if (!searchTerm) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);

        const offset = (currentPage - 1) * limit;
        try {
          const data = await fetchPokemon(limit, offset);
          setPokemon(data.results);
          setTotalPages(Math.ceil(data.count / limit));
        } catch (error) {
          setError(`${error}`);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [currentPage, searchTerm]);
  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      if (term) {
        const filteredPokemon = allPokemonList.filter((p) =>
          p.name.toLowerCase().includes(term.toLowerCase())
        );
        setPokemon(filteredPokemon); // Update the Pokemon list with filtered results
        setTotalPages(1); // No pagination when searching
        setCurrentPage(1); // Reset to the first page for search results
      } else {
        setCurrentPage(1);
      }
    },
    [allPokemonList]
  );

  return (
    <div className="container mx-auto px-[20px] md:px-[100px] mt-[100px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-[40px]">Pokemon List</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <PokemonList pokemon={pokemon} loading={loading} error={error} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
          }
        }}
      />
    </div>
  );
};

export default App;
