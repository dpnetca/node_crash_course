const fs = require("fs");
const path = require("path");

// create folder
// mkdir is async, requires to send in the path and a callback
// mkdirsync is synchronous, does not require a callback, instead will just take the path and wait
// in most cases you want to use the async version
//             <path>       ,   <options>, callback
fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");
});
// (err) => {} is the same as saying function(err) {}

// create and write to file
// this will overwrite if file already exists, to append to an existing file use fs.appendFile
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File written to...");

    //we do this in callback function to make sure it doesn't start until after writeFile is compelte
    fs.appendFile(
      path.join(__dirname, "test", "hello.txt"),
      " I love(??) Node.js",
      (err) => {
        if (err) throw err;
        console.log("File written to...");
      }
    );
  }
);

// NOTE: because these are all async, running this as one script will cause the steps below
// to happen in an unexpeted order

// Read File
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed...");
  }
);
