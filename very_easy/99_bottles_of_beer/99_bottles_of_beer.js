/**
 * Created by songjianhua on 15-9-12.
 */
function initTheString() {
  var strings = {'str1':' bottles of beer on the wall, ',
                 'str2':' bottles of beer.',
                 'str3':'Take one down and pass it around, ',
                 'str4':' bottle of beer on the wall, ',
                 'str5':' bottle of beer.',
                 'str6':'Take one down and pass it around, no more bottles of beer on the wall.' + '\n' +
                        'No more bottles of beer on the wall, no more bottles of beer.' + '\n',
                 'str7':'Go to the store and buy some more, '
                 };
  return strings;
}

function printBeerSong(beerCount) {
  var strings = initTheString();
  for (var i = beerCount; i > 0; i--) {
    if (i > 2) {
      var str = i + strings['str1'] + i + strings['str2'] + '\n' + strings['str3'] + (i-1) + strings['str1'] ;
      console.log(str);
    }
    else if (i === 2) {
      var str = i + strings['str1'] + i + strings['str2'] + '\n' + strings['str3'] + (i-1) + strings['str4'] ;
      console.log(str);
    }
    else {
      var str = i + strings['str4'] + i + strings['str5'] + '\n' + strings['str6'] + strings['str7'] +
                 beerCount + (beerCount>1?strings['str1']:strings['str4']);
      console.log(str);
    }
  }
}

//printBeerSong(1);