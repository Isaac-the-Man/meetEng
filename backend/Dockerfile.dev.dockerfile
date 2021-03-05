FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

EXPOSE 3000

COPY . .

CMD ["npm", "run", "serve"]