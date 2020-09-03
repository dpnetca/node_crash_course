# Notes

- see node version with `node --version`
- access REPL with `node`
  ```
  denis@MSI:~/traversy/node_crash$ node
  Welcome to Node.js v12.16.1.
  Type ".help" for more information.
  > 1+1
  2
  > const name = "Denis"
  undefined
  > name
  'Denis'
  > console.log(name)
  Denis
  undefined
  > function hello () { return "Hello " + name }
  undefined
  > hello()
  'Hello Denis'
  >
  (To exit, press ^C again or ^D or type .exit)
  >
  ```
- run `npm init` and follow wizard to create package.json
- run `npm install <package name>` to install package, this gets added to package.json automatically
  - i.e. `npm install uuid` will add the following to our package.json:
    ```
    "dependencies": {
        "uuid": "^8.3.0"
    }
    ```
- can install dev only packages with `npm install -D <package name>` or ` npm install --save-dev <package name>`
  - i.e. `npm install -D nodemon` will add:
    ```
    "devDependencies": {
        "nodemon": "^2.0.4"
    }
    ```
- when sharing files, don't include the `node_modules` folder. just share the package.json file, then npm install or remote host
- package-lock.json tracks dependencies with versions
- create index.js, can run with `node index.js` or just `node index`
- create import files lets create person.js as:

  ```
  const person = {
  name: "John Doe",
  age: 30,
  };

  module.exports = person;
  ```

- we can then import into index.js with:
  ```
  const person = require("./person");
  console.log(person);
  console.log(person.name)
  ```
- result when we run it is:
  ```
  denis@MSI:~/traversy/node_crash$ node index
  { name: 'John Doe', age: 30 }
  John Doe
  ```
- module wrapper gives access to several functions included exports, requires, module, **filename and **dirname
- syntax `import Person from './person'` is not implemented in node, that is why we use Require
- https://nodejs.org/docs/latest-v12.x/api/ will list the core modules
- see reference folder for samples using some core modules
- some exmamples use `modules.exports = foo` others use `exports.foo = foo` read up on the difference here: https://www.hacksparrow.com/nodejs/exports-vs-module-exports.html
- with the http exmaples, if we make changes to our script we have to CTRL+C to stop the server and then restart thje server to see the changes. This is where nodemon can help. we installed nodemon as a dev depency earlier
  - to use nodemon we need to create an NPM script in our packages.json file:
    ```
    "scripts": {
      "start": "node index",
      "dev": "nodemon index"
    },
    ```
  - now we can run it with `npm run dev`
  - ternary operator example `req.url === "/" ? "index.hml" : req.url` read this as "If req.url is equal to '/' then set value to 'index.html' else set valuen to contents of req.url"
