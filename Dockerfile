FROM node:12-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 4000
CMD ["npm","start"]
