FROM node:12.18

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/var/www

COPY package.json $HOME/
RUN chown -R app:app $HOME/*

USER root
WORKDIR $HOME
RUN npm i -g @adonisjs/cli
RUN npm install

EXPOSE 80 3333 1025 8025
