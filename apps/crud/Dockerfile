# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json /app/

# Install application dependencies
RUN npm install

# Copy the entire monorepo project into the container
COPY . /app/

# Build the React.js application inside the 'crud' app directory
RUN npx nx build crud

# Expose the application port (change to the actual port your app uses)
EXPOSE 3000

# Start the application inside the 'crud' app directory
CMD [ "npx", "nx", "serve", "crud" ]
