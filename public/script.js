// an array with all of our cart items
var cart = [];
var total = 0;

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();

  var total = 0;

  var source = $('#cartList-template').html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < cart.length; i++) {
    // select template and convert it to an HTML string
    var newHTML = template(cart[i]);
    // append to the page the entire cart list
    $('.cart-list').append(newHTML);

    total += cart[i].price;
  }

  $('.total').html(total);
}

var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  // css .shopping-cart display none använd detta och vänd om vid klickningar 
  $('.shopping-cart').toggleClass('show');
/*
  var toggle = document.getElementsByClassName('shopping-cart');
  if (toggle.style.display === "none") {
    toggle.style.display === "block"
  } else {
    toggle.style.display === "none"
  } */
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();