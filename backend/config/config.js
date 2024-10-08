module.exports = {
  apiKey: process.env.API_KEY || "1234567890",
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100, // limit to 100 requests per windowMs
  },
  cacheTTL: 60 * 60, // Cache for 1 hour
};
