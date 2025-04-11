FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . /app
EXPOSE 3000
VOLUME [ "/data" ]
CMD [ "npm","start" ]