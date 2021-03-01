#!/bin/bash

cd /var/app/current/;

if [[ -f ".env" ]];then
  echo "File env exist. Replacing with a new one";
  rm .env;
else
  echo "File env does not exist. Creating env file";
fi;

echo "APP_NAME=intern_2" > .env;
echo "APP_ENV=development" >> .env;
echo "APP_PORT=8080" >> .env;

echo "DB_DIALECT=mysql" >> .env;
echo "DB_HOST=10.0.2.142" >> .env;
echo "DB_NAME=intern_2" >> .env;
echo "DB_USER=intern_2" >> .env;
echo "DB_PASS=" >> .env;

echo "SALT=8" >> .env;

echo "JWT_TOKEN=$(echo 'ThisIsASecretKey' | base64)" >> .env;
echo "DEFAULT_IMAGE=https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg" >> .env;
