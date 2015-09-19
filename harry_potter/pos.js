var BasketItem = require('./basket-Item.js');

function Pos() {

}

Pos.prototype.print = function(bookBasket) {
  var boughtBooks = bookBasket.basketItems;
  var str = '';
  boughtBooks.forEach(function(val) {
    str += val.getName() +' the count ' +val.count +'\n';
  });
  str += 'the total money is:' + bookBasket.getRealMoney();
  console.log(str);
};

module.exports = Pos;
