/**
 * Created by songjianhua on 15-9-12.
 */

var print = require('../../very_easy/99_bottles_of_beer/99_bottles_of_beer.js');

describe('printBeerSong', function () {
  it('should print the right song the last two lines are different',function() {
    spyOn(console,'log');
    print.printBeerSong(1);
    var expectText =
      '1 bottle of beer on the wall,1 bottle of beer.' + '\n' +
      'Take one down and pass it around, no more bottles of beer on the wall.'+'\n'+
      'No more bottles of beer on the wall, no more bottles of beer.'+'\n'+
      'Go to the store and buy some more, 1 bottle of beer on the wall,';
     expect(console.log).toHaveBeenCalledWith(expectText);
  });
});