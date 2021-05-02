#!/bin/sh

docker build -t sekhar/node-web-app .

docker run -p 49169:8080 -d sekhar/node-web-app


docker run -p 49168:8080 -d sekhar/node-web-app

