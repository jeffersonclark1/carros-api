FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 9001

CMD nodemon -L --watch . server.js