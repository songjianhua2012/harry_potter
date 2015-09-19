var BookBasket = require('../../harry_potter/book-basket.js');

describe('BookBasket',function() {
  var bookBasket;
  var discounts;
  beforeEach(function() {
    bookBasket = new BookBasket();
    discounts = [0,0.05,0.1,0.2,0.25];
    BookBasket.getDiscountMothods(discounts);
  });

  it('BookBasket should have an array basketItems and at first it should be null',function() {
    expect(bookBasket.basketItems instanceof Array).toBe(true);
    expect(bookBasket.basketItems.length).toBe(0);
  });

  describe('addBook',function() {
    it('if a book is not in basketItems the function should add it in',function() {
      bookBasket.addBook('1',2);
      expect(bookBasket.basketItems.length).toBe(1);
      expect(bookBasket.basketItems[0].bookId).toBe('1');
      expect(bookBasket.basketItems[0].count).toBe(2);

      bookBasket.addBook('2',3);
      expect(bookBasket.basketItems.length).toBe(2);
      expect(bookBasket.basketItems[1].bookId).toBe('2');
      expect(bookBasket.basketItems[1].count).toBe(3);
    });

    it('if a book is in basketItems the function should add the count only',function() {
      bookBasket.addBook('1',3);
      bookBasket.addBook('1',2);
      expect(bookBasket.basketItems[0].bookId).toBe('1');
      expect(bookBasket.basketItems[0].count).toBe(5);
      expect(bookBasket.basketItems.length).toBe(1);
    });
  });

  describe('getRealMoney',function() {
    it('if bought 5 different books it should return the right money',function() {
      bookBasket.basketItems = [{bookId:'1',count:1},
                                {bookId:'2',count:1},
                                {bookId:'3',count:1},
                                {bookId:'4',count:1},
                                {bookId:'5',count:1}];
      var money = bookBasket.getRealMoney();
      expect(money).toBe(30);
    });

    it('if bought 4 different books it should return the right money',function() {
      bookBasket.basketItems = [{bookId:'1',count:1},
                                {bookId:'2',count:0},
                                {bookId:'3',count:1},
                                {bookId:'4',count:1},
                                {bookId:'5',count:1}];
      var money = bookBasket.getRealMoney();
      expect(money).toBe(25.6);
    });

    it('if bought 3 different books it should return the right money',function() {
      bookBasket.basketItems = [{bookId:'1',count:0},
                                {bookId:'2',count:0},
                                {bookId:'3',count:1},
                                {bookId:'4',count:1},
                                {bookId:'5',count:1}];
      var money = bookBasket.getRealMoney();
      expect(money).toBe(21.6);
    });

    it('if bought 2 different books it should return the right money',function() {
      bookBasket.basketItems = [{bookId:'1',count:0},
                                {bookId:'2',count:0},
                                {bookId:'3',count:0},
                                {bookId:'4',count:1},
                                {bookId:'5',count:1}];
      var money = bookBasket.getRealMoney();
      expect(money).toBe(15.2);
    });

    it('if bought only 1 books it should return the right money',function() {
      bookBasket.basketItems = [{bookId:'1',count:0},
                                {bookId:'2',count:0},
                                {bookId:'3',count:0},
                                {bookId:'4',count:0},
                                {bookId:'5',count:1}];
      var money = bookBasket.getRealMoney();
      expect(money).toBe(8);
    });

    it('if the bought books are same it should return the right money',function() {
      bookBasket.basketItems = [{bookId:'1',count:0},
                                {bookId:'2',count:0},
                                {bookId:'3',count:0},
                                {bookId:'4',count:0},
                                {bookId:'5',count:3}];
      var money = bookBasket.getRealMoney();
      expect(money).toBe(24);
    });

    it('if bought 8 books it should return the right money',function() {
      bookBasket.basketItems = [{bookId:'1',count:2},
                                {bookId:'2',count:2},
                                {bookId:'3',count:2},
                                {bookId:'4',count:1},
                                {bookId:'5',count:1}];
      var money = bookBasket.getRealMoney();
      expect(money).toBe(51.2);
    });
  });
});
