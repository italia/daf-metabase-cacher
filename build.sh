BUILD_DIR=v1
RELATIVE_PATH=daf-metabase-cacher

rm -rf $BUILD_DIR
cd dashboard
npm install
ng build
# Move the build and fix the path
mv dist ../$BUILD_DIR
cd ..
sed -i -e "s/<base href='\/'>/<base href='\/$RELATIVE_PATH\/$BUILD_DIR\/'>/g" $BUILD_DIR/index.html
