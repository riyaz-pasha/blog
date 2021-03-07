# Specifying a base image
FROM node:alpine

# 
WORKDIR /usr/app

# only copy package.json to avoid rebuild (like whenever we change index.js file etc)
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy everything now to watch our changes
COPY ./ ./

# Default command
CMD ["npm","start"]
