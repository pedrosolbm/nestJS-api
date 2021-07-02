#### Acessando o MySQL no container
```bash
# Configurando e subindo o container 
$ docker-compose up
# Acessar o bash container
$ docker docker exec -it <container id> bash
# Acessar o mysql
$ mysql -uroot -pmysql
```
#### Instalando o app
```bash
$ npm install
```
#### Rodando the app
```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```
#### Testes
```bash
# unit tests
$ npm run test
# e2e tests
$ npm run test:e2e
# test coverage
$ npm run test:cov
```