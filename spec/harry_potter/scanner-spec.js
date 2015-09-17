var Scanner = require('../../harry_potter/scanner.js');

describe('Scanner', function() {
  var scanner;
  var bookItem;
  beforeEach(function() {
    scanner = new Scanner();
    bookItem = '1-1';
  });
  describe('Scanner should have scan function', function() {
    it('the return object should have bookId and count', function() {
      var book = scanner.scan(bookItem);
      expect(book.bookId).toBe('1');
      expect(book.count).toBe(1);
    });
  });
});
