const PizzaShop = require("./pizza-shop22-2.js");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

pizzaShop.order("large", "mushrooms");

pizzaShop.displayOrderNumber();
