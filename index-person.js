// Import from the ./person.js file and store in the Person variable
const Person = require("./person");
// import Person from "./person"; // not implemented in node.js

// Instintantiate a new isntance of the Person class
const person1 = new Person("John Doe", 30);

// call the greeting method
person1.greeting();
