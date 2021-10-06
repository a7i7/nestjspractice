FROM node:15.12.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080
EXPOSE 3000

CMD ["yarn", "run", "start"]