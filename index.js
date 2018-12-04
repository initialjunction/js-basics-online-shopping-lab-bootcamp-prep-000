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
    for (var itemName in cart)
    return `In your cart, you have ${itemName} at ${itemPrice}`
  } else {
    return "Your shopping cart is empty.";
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
