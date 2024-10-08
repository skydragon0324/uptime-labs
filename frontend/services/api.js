import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Fetch paginated Pokémon data
export const fetchPokemon = async (limit = 10, offset = 0) => {
  try {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`${error.response.data}`);
  }
};

export const fetchAllPokemon = async (limit = 10, offset = 0) => {
  try {
    const response = await api.get("/pokemon/all");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`${error.response.data}`);
  }
};

// Mark Pokémon as favorite
export const markFavorite = async (name) => {
  try {
    const response = await api.post("/favorites", { name });
    return response.data;
  } catch (error) {
    throw new Error("Failed to mark Pokémon as favorite");
  }
};

export const fetchFavorite = async () => {
  try {
    const response = await api.get("/favorites");
    return response.data;
  } catch (error) {
    throw new Error("Failed to mark Pokémon as favorite");
  }
};
