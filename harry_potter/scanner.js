var bookInformation = require('./book.js');

function Scanner() {

}

Scanner.prototype.scan = function(bookItem) {
  var bookId = bookItem.split('-')[0];
  var bookCount = bookItem.split('-')[1]||1;

  return {'bookId':bookId,'count':parseInt(bookCount)};
};

module.exports = Scanner;
