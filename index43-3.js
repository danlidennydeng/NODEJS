process.nextTick(() => console.log("Tick 1"));

process.nextTick(() => {
  console.log("Tick 2");

  process.nextTick(() => console.log("inner tick inside tick 2"));
});

process.nextTick(() => console.log("Tick 3"));

Promise.resolve().then(() => console.log("promise 1"));

Promise.resolve().then(() => {
  console.log("promise 2");
  process.nextTick(() => console.log("inner tick inside promise 2"));
});

Promise.resolve().then(() => console.log("promise 3"));
