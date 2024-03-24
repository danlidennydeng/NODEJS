const upperCase = require("upper-case").upperCase;

function greet() {
  console.log(upperCase("hello, welcome to Dennyland! Well..."));
}

module.exports = greet();

// it works if upper-case@2.0.2.
