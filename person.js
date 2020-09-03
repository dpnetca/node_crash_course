// Create a new class "Person"
class Person {
  // Class constructor / initiator similar to python __init__ method
  constructor(name, age) {
    // this.<var>  simialar top self.var in python?
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

// export the class for import into other files
module.exports = Person;
