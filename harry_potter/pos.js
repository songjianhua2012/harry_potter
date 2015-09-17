var BasketItem = require('./basket-Item.js');

function Pos() {

}

Pos.prototype.print = function(bookBasket) {
  var boughtBooks = bookBasket.basketItems;
  var str = '';
  boughtBooks.forEach(function(val) {
    str += val.getName() +'  ' +val.count +'\n';
  });
  console.log(str);
};

module.exports = Pos;
