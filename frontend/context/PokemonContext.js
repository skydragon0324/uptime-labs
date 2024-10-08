// context/FavoritesContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchFavorite, fetchAllPokemon, markFavorite } from "../services/api"; // Adjust the path if needed

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [allPokemonList, setAllPokemonList] = useState([]);

  // Fetch favorites when the context is mounted
  useEffect(() => {
    const fetchData = async () => {
      try {
        const favoriteData = await fetchFavorite();
        const pokemonList = await fetchAllPokemon();
        setFavorites(favoriteData);
        setAllPokemonList(pokemonList);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleFavorite = async (name) => {
    try {
      await markFavorite(name);
      setFavorites((prevFavorites) => {
        if (prevFavorites.includes(name)) {
          alert(`${name} has been removed from favorites!`);
          return prevFavorites.filter((fav) => fav !== name);
        } else {
          alert(`${name} has been added to favorites!`);
          return [...prevFavorites, name];
        }
      });
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{ favorites, allPokemonList, toggleFavorite }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
