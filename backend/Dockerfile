FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod --silent

EXPOSE 3000

COPY . .

CMD ["npm", "run", "start"]