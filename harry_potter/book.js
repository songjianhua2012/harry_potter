var allBooks = require('./all-books.js');

function bookInformation(bookId,bookName,bookPrice) {
  this.bookId = bookId;
  this.bookName = bookName;
  this.bookPrice = bookPrice;
}

bookInformation.prototype.getAllBooks = function() {
  var books = new allBooks();
  var allHarryPotters = books.loadAllBooks();
  return allHarryPotters;
};


module.exports = bookInformation;
