FROM node:alpine

WORKDIR /usr/apps/node-app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]