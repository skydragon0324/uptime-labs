const axios = require("axios");
const cache = require("../utils/cache");

const getPokemonList = async (req, res) => {
  const { limit = 20, offset = 0 } = req.query; // Default values: limit 20, offset 0
  const cacheKey = `pokemon-list-${limit}-${offset}`;

  try {
    // Check if data is cached
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
      params: { limit, offset },
    });

    const pokemonList = response.data;

    cache.set(cacheKey, pokemonList);

    res.status(200).json(pokemonList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Pokemon list" });
  }
};

const getAllPokemon = async (req, res) => {
  const cacheKey = `pokemon-all-list`;
  let url = "https://pokeapi.co/api/v2/pokemon?limit=500"; //fetch 500 per request
  let nextUrl = url;
  let allPokemon = [];
  try {
    // Check if data is cached
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    while (nextUrl) {
      const response = await axios.get(nextUrl);
      url = response.data.next;
      nextUrl = url;
      allPokemon = [...allPokemon, ...response.data.results];
    }
    cache.set(cacheKey, allPokemon);
    res.status(200).json(allPokemon);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Pokemon list" });
  }
};

module.exports = { getPokemonList, getAllPokemon };
