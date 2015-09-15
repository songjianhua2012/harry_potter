var bookInformation = require('./book.js');

function allBooks() {

}

allBooks.prototype.loadAllBooks=function() {
  var allHarryPotters = [new bookInformation('1','HarryPotter-1',8.00),
                         new bookInformation('2','HarryPotter-2',8.00),
                         new bookInformation('3','HarryPotter-3',8.00),
                         new bookInformation('4','HarryPotter-4',8.00),
                         new bookInformation('5','HarryPotter-5',8.00),];
  return allHarryPotters;
};

module.exports = allBooks;
