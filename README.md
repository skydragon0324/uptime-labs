# Full-Stack Pokémon App Challenge with Docker and CI

## Overview

Welcome to the Full-Stack Pokémon App coding challenge! This challenge is designed to evaluate your skills in frontend and backend development, as well as your ability to containerize applications and set up basic CI processes.

## Challenge Structure

This challenge is divided into four parts:

1. Backend Development
2. Frontend Development
3. Dockerization
4. Continuous Integration Setup

## Requirements

### Part 1: Backend Development

Create a Node.js/Express backend that serves as a proxy to the PokéAPI. Your backend should:

1. Fetch and cache Pokémon data from the PokéAPI (https://pokeapi.co/api/v2/pokemon)
2. Implement rate limiting to prevent abuse of your API
3. Add a simple authentication mechanism (e.g., API key)
4. Create an endpoint for user favorites (storing in memory is fine for this challenge)
5. Implement proper error handling and appropriate HTTP status codes

### Part 2: Frontend Development

Create a React application that interfaces with your backend API. The frontend should have the following features:

1. Authenticate with your backend API
2. Fetch and display Pokémon data from your backend
3. Implement a search input that allows users to filter Pokémon by name
4. Display a list view of the filtered Pokémon data
5. Implement either pagination or infinite scrolling for the list
6. Allow users to mark Pokémon as favorites
7. Include basic error handling and loading states

### Part 3: Dockerization

1. Create a Dockerfile for the backend
2. Create a Dockerfile for the frontend
3. Create a docker-compose.yml file that runs both the frontend and backend services
4. Ensure that the frontend can communicate with the backend when run via Docker Compose

### Part 4: Continuous Integration Setup

1. Create a .github/workflows directory in your project
2. Add a GitHub Actions workflow file (e.g., ci.yml) that does the following:
   - Runs on push to the main branch and on pull requests
   - Sets up Node.js
   - Installs dependencies for both frontend and backend
   - Runs linting for both frontend and backend
   - Runs any unit tests you've written
   - Builds Docker images for both frontend and backend
   - (Bonus) Pushes Docker images to a registry (you can use Docker Hub)

## Focus Areas

Please pay special attention to the following aspects:

- Clean, well-organized code for both backend and frontend
- Proper state management in the frontend
- RESTful API design principles in the backend
- Efficient caching mechanism in the backend
- Secure authentication implementation
- Responsive design for the frontend
- Efficient Dockerfiles (multi-stage builds if appropriate)
- Comprehensive CI workflow

## Getting Started

1. Clone this repository to your local machine
2. Follow the setup instructions in each project's respective README file
3. For local development:
   - Use `npm start` or `yarn start` in each directory
4. For Docker:
   - Use `docker-compose up` to start both services

## API Information

- PokéAPI Base URL: https://pokeapi.co/api/v2/
- Pokémon endpoint: https://pokeapi.co/api/v2/pokemon
- For pagination, you can use the `limit` and `offset` query parameters

Example: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`

## Submission

When you've completed the challenge:

1. Commit your changes to the main branch
2. Push your changes to your forked repository
3. Ensure that the GitHub Actions workflow runs successfully
4. Notify the interviewer that you've completed the challenge

## Evaluation Criteria

Your solution will be evaluated based on:

- Functionality: Does the app meet all the requirements for both backend and frontend?
- Code Quality: Is the code clean, well-organized, and easy to understand?
- API Design: Is the backend API well-structured and following RESTful principles?
- State Management: Is state managed effectively and appropriately in the frontend?
- Security: Is authentication implemented securely?
- Performance: Is the caching mechanism effective?
- UI/UX: Is the frontend interface intuitive and responsive?
- Error Handling: Are errors handled gracefully on both backend and frontend?
- Dockerization: Are the Dockerfiles and docker-compose.yml correctly configured?
- CI Setup: Is the GitHub Actions workflow comprehensive and effective?
- Bonus: Any additional features or improvements you add will be considered

Good luck, and we look forward to seeing your full-stack solution with Docker and CI integration!
