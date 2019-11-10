FROM node:13

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .