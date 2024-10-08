import React from "react";
import { usePokemon } from "../context/PokemonContext";
const PokemonCard = ({ pokemon }) => {
  const { favorites, toggleFavorite } = usePokemon();
  return (
    <div className="flex flex-row items-center justify-between gap-3 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 capitalize">
        {pokemon.name}
      </h2>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded transition duration-300"
        onClick={() => toggleFavorite(pokemon.name)}
      >
        Favorite
      </button>
    </div>
  );
};

export default PokemonCard;
