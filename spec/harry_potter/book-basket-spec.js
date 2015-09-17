var BookBasket = require('../../harry_potter/book-basket.js');

describe('BookBasket',function() {
  var bookBasket;
  beforeEach(function() {
    bookBasket = new BookBasket();
  });
  it('BookBasket should have an array basketItems and at first it should be null',function() {
    expect(bookBasket.basketItems instanceof Array).toBe(true);
    expect(bookBasket.basketItems.length).toBe(0);
  });

  describe('addBook',function() {
    it('if a book is not in basketItems the function should add it in',function() {
      bookBasket.addBook('1',2);
      expect(bookBasket.basketItems[0].bookId).toBe('1');
      expect(bookBasket.basketItems[0].count).toBe(2);
      expect(bookBasket.basketItems.length).toBe(1);

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
});
