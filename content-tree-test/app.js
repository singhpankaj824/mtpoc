
var data = require('./write.json');


function findParent(code) {
  return data.filter(
    function (data) {
      return data.id == code
    }
  );
}

var parent = findParent('1cce0ccc-ae62-f2e5-4dee-d2258a785e6b');
console.log(parent);
