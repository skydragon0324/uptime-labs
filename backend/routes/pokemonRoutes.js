const express = require("express");
const {
  getPokemonList,
  getAllPokemon,
} = require("../controllers/pokemonController");
const authMiddleware = require("../middlewares/authMiddleware");
const rateLimiter = require("../middlewares/rateLimitMiddleware");

const router = express.Router();

router.get("/pokemon", authMiddleware, rateLimiter, getPokemonList);
router.get("/pokemon/all", authMiddleware, rateLimiter, getAllPokemon);

module.exports = router;
