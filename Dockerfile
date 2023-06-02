# ==== CONFIGURE =====
# Use a Node slim image
FROM node:slim AS development

ENV NODE_ENV development

# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
