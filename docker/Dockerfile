FROM node:20-alpine AS build

WORKDIR /app

# Enable corepack (includes Yarn)
RUN corepack enable

COPY package.json yarn.lock ./
RUN corepack yarn install --frozen-lockfile

COPY . .
RUN corepack yarn build

FROM nginx:1.25-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html
# COPY public/config.json /usr/share/nginx/html/config.json

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
