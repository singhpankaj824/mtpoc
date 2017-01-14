var fs = require('fs');
var f = 'write.json';


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
 
 var tempStr = '{"id" : "' + guid() + '", "heading" : "' + line + '", "content" : "", "sub" : [] }, \n';
 
var fullStr = line.replace(line, tempStr);
var fullStr1 = fullStr.replace(/\t/g, ' ');
//console.log(fullStr);
writeData(fullStr1);



//	var count = (temp.match(/\t/g) || []).length;

});
	



function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}



function writeData(data) {

fs.appendFile(f, data,function(err){
  if(err)
    console.error(err);
  console.log('Appended!');
});



}