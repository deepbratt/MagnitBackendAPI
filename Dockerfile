FROM node:12-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm install mongoose
EXPOSE 4000
CMD ["npm","start"]
