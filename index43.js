console.log("console log 1");

process.nextTick(() => console.log("Tick 1"));
console.log("console log 2");
