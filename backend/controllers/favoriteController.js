const favorites = new Set(); // Simple in-memory storage for favorites

const addFavorite = (req, res) => {
  const { name } = req.body;
  favorites.add(name);
  res.status(201).json({ message: `${name} added to favorites` });
};

const getFavorites = (req, res) => {
  res.status(200).json(Array.from(favorites));
};

module.exports = { addFavorite, getFavorites };
