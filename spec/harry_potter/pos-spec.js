var Pos = require('../../harry_potter/pos.js');
var BookBasket = require('../../harry_potter/book-basket.js');
var BasketItem = require('../../harry_potter/basket-Item.js');

describe('Pos', function() {
  var pos;
  var bookBasket;
  var allHarryPotters;
  var mothods;
  beforeEach(function() {
    pos = new Pos();
    bookBasket = new BookBasket();

    allHarryPotters = [{
      bookId: '1',
      bookName: 'HarryPotter-1',
      bookPrice: 8.00
    }, {
      bookId: '2',
      bookName: 'HarryPotter-2',
      bookPrice: 8.00
    }, {
      bookId: '3',
      bookName: 'HarryPotter-3',
      bookPrice: 8.00
    }, {
      bookId: '4',
      bookName: 'HarryPotter-4',
      bookPrice: 8.00
    }, {
      bookId: '5',
      bookName: 'HarryPotter-5',
      bookPrice: 8.00
    }];

    mothods = [0, 0.05, 0.1, 0.2, 0.25];
    bookBasket.addBook('1', 1);
    bookBasket.addBook('2', 1);
    bookBasket.addBook('3', 1);
    bookBasket.addBook('4', 1);
    bookBasket.addBook('5', 1);

    BasketItem.getAllBooks(allHarryPotters);
    BookBasket.getDiscountMothods(mothods);
  });
  
  describe('print', function() {
    it('the print function should print the book`s name and count and the total money', function() {
      spyOn(console, 'log');
      var str = 'HarryPotter-1 the count 1' + '\n' +
        'HarryPotter-2 the count 1' + '\n' +
        'HarryPotter-3 the count 1' + '\n' +
        'HarryPotter-4 the count 1' + '\n' +
        'HarryPotter-5 the count 1' + '\n' +
        'the total money is:30';
      pos.print(bookBasket);
      expect(console.log).toHaveBeenCalledWith(str);
    });
  });
});
