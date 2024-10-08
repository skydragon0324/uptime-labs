import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemon, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {pokemon.map((p) => (
        <PokemonCard key={p.name} pokemon={p} />
      ))}
    </div>
  );
};

export default PokemonList;
