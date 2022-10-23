#! /bin/bash
echo "Copying the .wasm file from sql.js"

# You must re-copy the wasm file after updating the sql.js package.

mkdir -p build/static/js/
mkdir -p public/static/js/

# For `yarn build`
cp -f node_modules/sql.js/dist/sql-wasm.wasm build/static/js/

# For `yarn start` (webpack-dv server)
cp -f node_modules/sql.js/dist/sql-wasm.wasm public/static/js/