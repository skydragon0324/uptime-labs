const rateLimit = require("express-rate-limit");
const config = require("../config/config");

const rateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  message: "Too many requests from this IP, please try again later.",
});

module.exports = rateLimiter;
