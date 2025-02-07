# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Expose the correct port (Vite Preview runs on 4173 by default)
EXPOSE 4173

# Start the application
CMD ["npm", "run", "preview", "--", "--port", "4173", "--host"]
