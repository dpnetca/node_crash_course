// Events allows for event driven architecture where certain kinds of objects (emitters)
// emitt a named event that cause Functions (listeners) to be called

const EventEmitter = require("events");

// Create an Emitter Class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Create Event Listener
myEmitter.on("event", () => console.log("Event Fired!"));

// Init Event
myEmitter.emit("event");
