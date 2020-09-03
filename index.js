// import core modules
const http = require("http");
const path = require("path");
const fs = require("fs");

// create server -http.createServer takes a function as an input
/// defined inline with `(req,res) => {...}`
const server = http.createServer((req, res) => {
  /* 
  // ***********************************
  // The below works, but is inefficient
  // ***********************************

  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        // check for error
        if (err) throw err;

        // define HTTP Status code, and content type header
        res.writeHead(200, { "Content-Type": "text/html" });
        // output the content from the file
        res.end(content);
      }
    );
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        // check for error
        if (err) throw err;

        // define HTTP Status code, and content type header
        res.writeHead(200, { "Content-Type": "text/html" });
        // output the content from the file
        res.end(content);
      }
    );
  }
  if (req.url === "/api/users") {
    // sample data
    const users = [
      { name: "Bob Smith", age: 40 },
      { name: "John Doe", age: 30 },
    ];
    // set header to JSON format
    res.writeHead(200, { "Content-Type": "application/json" });
    // stringify the users data ton json and send
    res.end(JSON.stringify(users));
  }
  */

  // ***************
  // more efficient
  // ***************

  // Build dynamic file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  console.log(filePath);

  // get extention of the filename
  let extname = path.extname(filePath);

  // set typical content-type
  let contentType = "text/html;";

  // set exceptions to content-type based on common extensions
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

// look for environment variable "PORT" if nto found then use 5000
const PORT = process.env.PORT || 5000;

// Start server on defined port
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
