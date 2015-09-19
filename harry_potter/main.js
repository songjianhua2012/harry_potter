var Scanner = require('./scanner.js');
var BookBasket = require('./book-basket.js');
var Pos = require('./pos.js');
var AllBooks = require('./all-books.js');
var BasketItem = require('./basket-Item.js');
var Discount = require('./discount.js');

var allBooks = new AllBooks();
var scaner = new Scanner();
var bookBasket = new BookBasket();
var pos = new Pos();
var discount = new Discount();

var inputs = ['1-1', '2-1','3-1','4-1','5-1'];
var allHarryPotters = allBooks.loadAllBooks();
BookBasket.getDiscountMothods(discount.discountMothods());
BasketItem.getAllBooks(allHarryPotters);

inputs.forEach(function(val) {
  var item = scaner.scan(val);
  bookBasket.addBook(item.bookId, item.count);
});
pos.print(bookBasket);


//module.exports = main;
