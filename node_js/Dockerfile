FROM node:18.11-alpine

WORKDIR /app

ADD package*.json ./


RUN npm install

ADD . .


CMD node node_js.js

