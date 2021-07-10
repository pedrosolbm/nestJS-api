#Derivando da imagem oficial do MySQL
FROM mysql:5.7

#Adicionando os scripts SQL para serem executados na criação do banco
COPY ./docker/db/ /docker-entrypoint-initdb.d/

FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5555

CMD npm run start:dev