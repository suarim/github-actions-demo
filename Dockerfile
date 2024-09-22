FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . .
CMD ["node", "index.js"]