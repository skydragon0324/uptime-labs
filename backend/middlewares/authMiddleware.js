const config = require("../config/config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const apiKey = authHeader && authHeader.split(" ")[1];

  if (!apiKey || apiKey !== config.apiKey) {
    return res
      .status(401)
      .json({ error: "Unauthorized, missing or invalid API key" });
  }

  next();
};

module.exports = authMiddleware;
