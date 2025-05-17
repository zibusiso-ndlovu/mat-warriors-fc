# Dockerfile
# Build stage
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install
# Install production dependencies and clean the cache
#RUN npm ci --omit=dev && npm cache clean --force

# Copy all files
COPY . .

# Expose port 80
EXPOSE 5173

# Start nginx
CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]