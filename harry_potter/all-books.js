var BookInformation = require('./book.js');

function AllBooks() {

}

AllBooks.prototype.loadAllBooks=function() {
  var allHarryPotters = [new BookInformation('1','HarryPotter-1',8.00),
                         new BookInformation('2','HarryPotter-2',8.00),
                         new BookInformation('3','HarryPotter-3',8.00),
                         new BookInformation('4','HarryPotter-4',8.00),
                         new BookInformation('5','HarryPotter-5',8.00),];
  return allHarryPotters;
};

module.exports = AllBooks;
