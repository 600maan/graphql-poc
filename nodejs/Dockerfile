# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container, excluding node_modules
COPY . .

# Copy the .env file into the container
COPY .env .env

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Run the application using npm start
CMD ["npm", "start"]