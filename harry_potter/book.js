//var allBooks = require('./all-books.js');

function BookInformation(bookId,bookName,bookPrice) {
  this.bookId = bookId;
  this.bookName = bookName;
  this.bookPrice = bookPrice;
}

module.exports = BookInformation;
