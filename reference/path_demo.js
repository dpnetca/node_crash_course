// this is a core module don't need to npm install or anything
const path = require("path");

// full file name
console.log(__filename);

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
