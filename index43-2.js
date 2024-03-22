Promise.resolve().then(() => console.log("promise 1"));

process.nextTick(() => console.log("Tick 1"));
