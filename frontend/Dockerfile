# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the frontend app
RUN npm run build

# Install a lightweight server to serve the static files
RUN npm install -g serve

# Expose the frontend port (e.g., 3000)
EXPOSE 3000

# Command to serve the application
CMD ["npm", "start"]
