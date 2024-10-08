## Challenge Structure

This challenge is divided into four main parts:

1. Backend Development
   Implemented various features, including:
   - Auth Middleware: Validates API requests using an API key.
   - Rate Limit Middleware: Prevents abuse of the API by implementing request limits.
   - Caching Mechanism: Utilized node-cache to cache responses. All configurations, including rate limit options, API key, and cache duration, are centralized in config.js.
2. Frontend Development
   Developed a user interface for displaying the Pokémon list, including:
   - Search Functionality: Allows users to search for Pokémon efficiently.
   - Favorites Management: Features for adding and removing Pokémon from favorites.
   - Context API: Used for managing Pokémon data state.
   - Debounce Feature: Implemented on the search input to minimize unnecessary API calls.
   - Pagination: Integrated with the API to handle large datasets.
3. Dockerization
   Created Dockerfiles for both frontend and backend services.
   - Added a docker-compose.yml file to manage and run both services seamlessly.

## Challenge Highlights

The most challenging aspect was optimizing the frontend to reduce API requests to the backend, particularly for the search functionality. Since the current Pokémon API does not provide a comprehensive list of all Pokémon, I developed a custom API to fetch this data.

On the frontend, I utilized the Context API to ensure the Pokémon list is fetched only once during the initial rendering of the website. Additionally, I memoized the search handler to prevent unnecessary re-creation on every render.

## Areas for Improvement

If given more time, I would focus on enhancing the UI/UX aspects of the application to provide a more intuitive and engaging user experience.
