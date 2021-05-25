FROM node:10
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 4000
CMD ["npm","start"]
