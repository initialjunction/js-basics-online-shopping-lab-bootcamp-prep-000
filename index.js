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
    if (cart.length === 1) {
      return "In your cart, you have " + cart[0] + " at" + " $" + cart[1] + "."
    }
    var totalItems = [];
    var i = 0;
    for (let i = 0; i < cart.length; i++) {
      var full = `${cart.itemName[i]} at ${"$cart.itemPrice[i]"}.`
      totalItems.push(full)
    }
    return "In your cart, you have " + totalItems.join(", and");
  } else {
    return "Your shopping cart is empty.";
  }
}


function total() {
  var totalPrice = 0;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    totalPrice + cart[i][1];
  } return totalPrice;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
