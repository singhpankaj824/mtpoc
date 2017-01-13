var a =  [{
 	"heading": "article1",
 	"content": "ct1",
 	"sub": [{
 		"heading": "article1_subarticle",
 		"content": "article1_subarticle",
 		"sub": [{
 			"heading": "article1_subarticle",
 			"content": "article1_subarticle",
 			"sub": []
 		}]
 	}]
 }, {
 	"heading": "article2",
 	"content": "article2-content",
 	"sub": [{
 		"heading": "article2",
 		"content": "article2-content",
 		"sub": []
 	}]
 }]

//console.log(a[0]);
var dataObj = [];
var element = {};

var lineReader = require('readline').createInterface({

  input: require('fs').createReadStream('content-node.json')
});

lineReader.on('line', function (line) {
	var element = {
		"heading" : line,
		"content" : "content-text",
		"sub" : []
	 };

	var len = dataObj.length;
console.log(len);
	var temp = line;
	var count = (temp.match(/\t/g) || []).length;

	if(count === 0)
		{
			addNode(dataObj, element);
//console.log(JSON.stringify(dataObj));
		}

//console.log(line);

});



function addNode(nodeIndex, element) {

	dataObj.push(element);
 
}




