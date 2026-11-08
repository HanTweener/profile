# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (leverages Docker layer cache)
COPY package*.json ./
RUN npm ci

# Optional Build arguments for Vite client-side environment variables
ARG VITE_SITE_URL
ARG VITE_PROFILE_EMAIL
ARG VITE_GITHUB_USERNAME
ARG VITE_GITHUB_URL
ARG VITE_PROJECT_1_URL
ARG VITE_PROJECT_2_URL
ARG VITE_PROJECT_4_URL
ARG VITE_PROJECT_5_URL

ENV VITE_SITE_URL=$VITE_SITE_URL \
    VITE_PROFILE_EMAIL=$VITE_PROFILE_EMAIL \
    VITE_GITHUB_USERNAME=$VITE_GITHUB_USERNAME \
    VITE_GITHUB_URL=$VITE_GITHUB_URL \
    VITE_PROJECT_1_URL=$VITE_PROJECT_1_URL \
    VITE_PROJECT_2_URL=$VITE_PROJECT_2_URL \
    VITE_PROJECT_4_URL=$VITE_PROJECT_4_URL \
    VITE_PROJECT_5_URL=$VITE_PROJECT_5_URL

# Copy source files and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
