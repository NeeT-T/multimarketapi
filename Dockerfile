# Image
FROM node:16.17.1-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app/

RUN npm install yarn

RUN yarn install --no-save

EXPOSE 4008

CMD [ "yarn", "dev" ]