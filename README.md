# Create React App + React Router + TypeORM + sql.js

A boilerplate to create a React web app fully backed by TypeORM (sql.js) with TypeScript in the browser. It is suitable for typescript developers who wants to make a website without the need of a backend.

Just run `yarn start` to start the webpack dev server or `yarn build` to compile your code.
The tiny `pre-run.sh` script is run in either `yarn build` or `yarn start` in order to copy `node_modules/sql.js/dist/sql-wasm.wasm` to the `build/static/js` and `public/static/js` folders respectively. 

Always make sure the `sql-wasm.wasm` file in those two folders is updated when you update the sql.js package