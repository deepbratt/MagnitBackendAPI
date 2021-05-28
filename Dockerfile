FROM node:12-alpine
WORKDIR /app
COPY . /app
COPY /default.json /app
RUN npm install
CMD ["npm","start"]
