#!/usr/bin/env bash

URL=http://desk.olomedia.it:3002/public/dashboard/9a172e7a-0df2-4100-be7f-407b208d393f
PWD=$PWD/result
DIR=`date +%Y-%m`
FULL_PATH=$PWD/$DIR
#FULL_PATH=$DIR
FILE_PREFIX=`date +%Y%m%d-%H%M%S`

echo "Making Screenshot of $URL into $PWD/$DIR";
mkdir -p FULL_PATH
echo "docker run -v $FULL_PATH:/srv ubermuda/screenshot $URL $FILE_PREFIX.jpg 1920px";
docker run -v $FULL_PATH:/srv ubermuda/screenshot $URL $FILE_PREFIX.jpg 800px
