var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var item = { itemName: name, itemPrice: ((Math.floor(Math.random() * (101 - 1)) + 1))};
  cart.push(item);
  return `${name} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0) {
    var i = 0;
    for (let i = 0; i < cart.length; i++) {
      var full = `${cart.itemName[i]} at ${"$cart.itemPrice[i]"}.`
    }
    return "In your cart, you have " + full;
  } else {
    return "Your shopping cart is empty.";
  }
}


function currentLine(line) {
  if (line.length > 0) {
    var i = 0;
    var totalLine = [];
    for (i = 0; i < line.length; i++) {
      var lineItem = `${i + 1}. ${line[i]}`;
      totalLine.push(lineItem);
    }
    return "The line is currently: " + totalLine.join(", ");
  } else {
    return "The line is currently empty.";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
