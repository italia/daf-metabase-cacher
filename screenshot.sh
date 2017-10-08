#!/usr/bin/env bash

# Includo il file .env nello Script
. ./.env

PWD=$PWD/result
DIR=`date +%Y-%m`
FULL_PATH=$PWD/$DIR
#FULL_PATH=$DIR
FILE_PREFIX=`date +%Y%m%d-%H%M%S`

echo "Making Screenshot of $URL into $PWD/$DIR";
mkdir -p FULL_PATH
#echo "docker run -v $FULL_PATH:/srv ubermuda/screenshot $URL $FILE_PREFIX.jpg 1920px";
docker run -v $FULL_PATH:/srv ubermuda/screenshot $URL $FILE_PREFIX.jpg 800px
