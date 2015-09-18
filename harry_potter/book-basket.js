var BasketItem = require('./basket-Item.js');
var Discount = require('./discount.js');

function BookBasket() {
  this.basketItems = [];
}

BookBasket.prototype.addBook = function(bookId, count) {
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

BookBasket.prototype.getRealMoney = function() {
  var discount = new Discount();
  var discountWays = discount.discountMothods();
  this.basketItems.sort(function(n1,n2) {
    return -n1.count+n2.count;
  });
  var g = [];
  g[0] = this.basketItems[0].count - this.basketItems[1].count;
  g[1] = this.basketItems[1].count - this.basketItems[2].count;
  g[2] = this.basketItems[2].count - this.basketItems[3].count;
  g[3] = this.basketItems[3].count - this.basketItems[4].count;
  g[4] = this.basketItems[4].count;
  var t = g[2]<g[4]?g[2]:g[4];
  if (t > 0) {
    g[2] -= t;
    g[4] -= t;
    g[3] += 2 * t;
  }
  var sum = 0;
  for (var i = 0; i < 5; ++i) {
    sum += g[i] * (i + 1) * 8 * (1 - discountWays[i]);
  }
  return sum;
};
module.exports = BookBasket;
