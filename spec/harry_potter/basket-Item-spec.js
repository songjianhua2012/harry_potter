var BasketItem = require('../../harry_potter/basket-Item.js');

describe('BasketItem',function() {
  var allHarryPotters;
  var basketItem;
  beforeEach(function() {
    basketItem = new BasketItem('2',3);

    allHarryPotters = [{bookId:'1',bookName:'HarryPotter-1',bookPrice:8.00},
                       {bookId:'2',bookName:'HarryPotter-2',bookPrice:8.00},
                       {bookId:'3',bookName:'HarryPotter-3',bookPrice:8.00},
                       {bookId:'4',bookName:'HarryPotter-4',bookPrice:8.00},
                       {bookId:'5',bookName:'HarryPotter-5',bookPrice:8.00}];

    BasketItem.getAllBooks(allHarryPotters);
  });
  it('this class should have bookId and count prototypes',function() {
    expect(basketItem.bookId).toBe('2');
    expect(basketItem.count).toBe(3);
  });

  describe('getItem',function() {
    it('this function should find the right book by bookId',function() {
      var bookItem = basketItem.getItem();
      expect(bookItem.bookId).toBe('2');
      expect(bookItem.bookName).toBe('HarryPotter-2');
      expect(bookItem.bookPrice).toBe(8.00);
    });
  });

  describe('getName',function() {
    it('this function should return the right bookName',function() {
      var bookName = basketItem.getName();
      expect(bookName).toBe('HarryPotter-2');
    });
  });
});
