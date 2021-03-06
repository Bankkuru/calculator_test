FROM node:6

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .