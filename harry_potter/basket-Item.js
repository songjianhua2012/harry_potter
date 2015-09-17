var allHarryPotters = [];

function BasketItem(bookId,count) {
  this.bookId = bookId;
  this.count = count;
}

BasketItem.getAllBooks = function(allHarryPotters) {
  allHarryPotters = allHarryPotters;
};

BasketItem.prototype._getItem = function() {
  if (this._item) { // 缓存技术，第一次没有_item的时候创建一个，如果有了直接返回不用每次创建。
    return this._item;
  } else {
    var that = this;
    var item;
    allHarryPotters.forEach(function(val) {
      if (val.bookId === that.bookId) {
        item = val;
      }
    });
    return item;
  }
};

BasketItem.prototype.getName = function() {
  var item = this._getItem();
  return item.bookName;
};

module.exports = BasketItem;
