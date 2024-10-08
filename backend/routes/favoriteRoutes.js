const express = require("express");
const {
  addFavorite,
  getFavorites,
} = require("../controllers/favoriteController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/favorites", authMiddleware, addFavorite);
router.get("/favorites", authMiddleware, getFavorites);

module.exports = router;
