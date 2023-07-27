FROM node:18
WORKDIR /app
COPY package.json /app
run npm install
copy . .
expose 8888
cmd node server.js