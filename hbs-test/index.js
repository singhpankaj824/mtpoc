var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var mkdirp = require('mkdirp');
var source = "<h1> {{heading}} </h1> <p> {{content}} </p>";
var template = handlebars.compile(source);


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



//function definition


var compileData = function (template, obj, currentDir) {
var fullpath ="";

  
  if (obj.length) {

    obj.forEach(function (item, index) {
	fullpath = path.join(currentDir, item.heading);
console.log(fullpath);
      if (item.sub.length > 0) {
         compileData(template, item.sub, fullpath);
      } 
       
 
 
      var result = template(item);       
      writeHtml(fullpath, result);         
    });
  }
}

var writeHtml = function (filename, data) {


  makeDirectories(filename, function (p) {

 
    var writerStream = fs.createWriteStream(path.join(p, 'page.html'));

    writerStream.write(data, 'UTF8');

    writerStream.end();

    writerStream.on('finish', function () {
      console.log('writing finished');
    });

    writerStream.on('error', function (err) {
      console.log(err);

    });

  });
  

}

var makeDirectories = function (pth, callback) {
  if (!fs.existsSync(pth))
	  {

    mkdirp(pth, function (err) {
      if (err) console.error(err)
      else
        return callback(pth);
    });
  }

  
}


// calling functions

 
compileData(template, a, __dirname);