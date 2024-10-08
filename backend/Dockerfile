# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json from the backend directory
COPY ./package*.json ./
# Install dependencies
RUN npm install

# Copy the entire backend project into the container
COPY ./ .

# Expose the port that your app listens on (assuming it's 3000)
EXPOSE 3000

# Start the app (assuming the entry point is bin/www)
CMD ["node", "app.js"]
