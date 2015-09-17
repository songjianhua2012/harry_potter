var allHarryPottersBooks = [];

function BasketItem(bookId, count) {
  this.bookId = bookId;
  this.count = count;
}

BasketItem.getAllBooks = function(allHarryPotters) {
  allHarryPotterBooks = allHarryPotters;
};

BasketItem.prototype.getItem = function() {
  var that = this;
  var tempBookItem = {};
  allHarryPotterBooks.forEach(function(val) {
    if (val.bookId === that.bookId) {
      tempBookItem = val;
    }
  });
  return tempBookItem;
};

BasketItem.prototype.getName = function() {
  var bookItem = this.getItem();
  return bookItem.bookName;
};

module.exports = BasketItem;
