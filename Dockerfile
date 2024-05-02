FROM node:lts-alpine

WORKDIR	 /app

COPY . /app

RUN npm install

CMD ["node", "index.js"]

EXPOSE 3000

