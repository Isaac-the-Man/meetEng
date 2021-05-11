FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

EXPOSE 8080

COPY . .

RUN npm run build

FROM nginx:stable-alpine as prod-stage

COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf