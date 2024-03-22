const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", () => {
  console.log(`Order received! Baking a pizza.`);
});

emitter.emit("order-pizza");
