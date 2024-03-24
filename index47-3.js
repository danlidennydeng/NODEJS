setImmediate(() => console.log("setImmediate 1"));

setImmediate(() => {
  console.log("setImmediate 2");

  process.nextTick(() => console.log("tick inside setImmediate 2"));
  Promise.resolve().then(() => console.log("promise inside setImmediate 2"));
});

setImmediate(() => console.log("setImmediate 3"));
