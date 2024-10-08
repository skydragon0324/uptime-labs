const express = require("express");
const pokemonRoutes = require("./routes/pokemonRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const cors = require("cors");

const app = express();

app.use(express.json()); // Parse JSON bodies

// Routes
app.use(cors());
const corsOptions = {
  origin: "*", // allow requests from this origin
  methods: ["GET", "POST"], // allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // allowed headers
};
app.use(cors(corsOptions));
app.use("/api", pokemonRoutes);
app.use("/api", favoriteRoutes);

// Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
