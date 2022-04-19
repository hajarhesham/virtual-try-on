#baseimage
FROM node

#store all files to this dir
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]