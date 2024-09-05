# Use Node.js image as base
FROM node:20 as builder

ARG VITE_BASE_URL
ARG VITE_CLIENT_ID

ENV VITE_BASE_URL=$VITE_BASE_URL
ENV VITE_CLIENT_ID=$VITE_CLIENT_ID

# Set working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN yarn

# Build the application
RUN yarn build

# Stage 2: Production Environment
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from builder stage to nginx's web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
