#!/bin/sh

npm install

npm run deploy

echo "> Ready on http://admin:$PASSWORD@localhost:8080/"
