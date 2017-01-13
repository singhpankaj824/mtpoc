
//var dataObj = [];
var element = {};

var lineReader = require('readline').createInterface({

  input: require('fs').createReadStream('content-node.json')
});

lineReader.on('line', function (line) {


var temp = line;
var count = (temp.match(/\t/g) || []).length;

	if(count === 0)
		{
			addNode(dataObj, element);
		}
	console.log(count);

//	console.log(line);

});



function addNode(nodeIndex, element) {

	dataObj.push(element);
 
}

