// index.js

document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners once the DOM is fully loaded

  // Select all elements with the class 'buy_bt'
  var buyNowButtons = document.querySelectorAll('.buy_bt');

  // Attach the same event handler function to each "Buy Now" button
  buyNowButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          var itemName = this.getAttribute('data-item-name');
          var itemPrice = parseFloat(this.getAttribute('data-item-price'));

          addToCart(itemName, itemPrice);
      });
  });
});

var cart = [];
var cartTotal = 0;

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  cartTotal += itemPrice;

  updateCart();
}

function updateCart() {
  var cartItemsElement = document.getElementById('cartItems');
  var cartTotalElement = document.getElementById('cartTotal');

  cartItemsElement.innerHTML = ''; // Clear existing items

  cart.forEach(function (item) {
      var cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      cartItemElement.innerHTML = `${item.name} - $${item.price}`;
      cartItemsElement.appendChild(cartItemElement);
  });

  cartTotalElement.textContent = cartTotal;
}

function checkout() {
  if (cart.length === 0) {
      alert('Your cart is empty. Add items before checking out.');
      return;
  }

  var confirmationMessage = 'Thank you for your purchase!\n\nItems:\n';

  cart.forEach(function (item) {
      confirmationMessage += `${item.name} - $${item.price}\n`;
  });

  confirmationMessage += `\nTotal: $${cartTotal}`;

  // You can customize this part to integrate with a payment gateway or perform other checkout actions
  // For now, let's display a confirmation alert
  alert(confirmationMessage);

  // Clear the cart after checkout
  cart = [];
  cartTotal = 0;
  updateCart();
}
