FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . .
CMD ["npm", "start"]