var BasketItem = require('./basket-Item.js');

function BookBasket() {
  this.basketItems = [];
}

BookBasket.prototype.addBook = function(bookId,count) {
  var tempItem = this.basketItems.filter(function(val) {
    return val.bookId === bookId;
  });

  if (tempItem.length !== 0) {
    tempItem[0].count += count;
  } else {
    var bookItem = new BasketItem(bookId, count);
    this.basketItems.push(bookItem);
  }
};

module.exports = BookBasket;
