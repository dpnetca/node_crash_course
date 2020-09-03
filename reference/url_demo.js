const usl = require("url");

const myUrl = new URL(
  "http://www.dpnet.ca:9000/test.html?id=100&status=active"
);

// serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain) and port
console.log(myUrl.host);

// Hostname does not include port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

//  Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop Params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
