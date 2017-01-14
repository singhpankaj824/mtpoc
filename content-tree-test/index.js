var fs = require('fs');
var writeStream = fs.createWriteStream('output.json');

var lineReader = require('readline').createInterface({

  input: require('fs').createReadStream('content-node.json')
});

lineReader.on('line', function (line) {
	var element = {
		"heading" : line,
		"content" : "content-text",
		"sub" : []
	 };

 
//console.log(line);
 


//	var count = (temp.match(/\t/g) || []).length;

});
	


var hash = guid();
console.log(hash);
function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}