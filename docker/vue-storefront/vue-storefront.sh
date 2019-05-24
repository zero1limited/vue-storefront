#!/bin/sh
set -e

yarn install || exit $?

yarn build:client && yarn build:server && yarn build:sw || exit $?

echo "VS_ENV: ${VS_ENV}"

if [ "$VS_ENV" = 'dev' ]; then
  yarn dev
else
  yarn start
fi
