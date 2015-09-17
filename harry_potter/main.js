var Scanner = require('./scanner.js');
var BookBasket = require('./book-basket.js');
var Pos = require('./pos.js');
var AllBooks = require('./all-books.js');
var BasketItem = require('./basket-Item.js');

var inputs = ['1-1', '2-3'];
var allBooks = new AllBooks();

var allHarryPotters = allBooks.loadAllBooks();
BasketItem.getAllBooks(allHarryPotters);

var scaner = new Scanner();
var bookBasket = new BookBasket();
var pos = new Pos();
inputs.forEach(function(val) {
  var item = scaner.scan(val);
  bookBasket.addBook(item.bookId, item.count);
});
pos.print(bookBasket);


//module.exports = main;
