//node ReadFromFile --file=hw.txt
var fs = require('fs');
var args = require('minimist')(process.argv.slice(2));

var options  = { "encoding" : "utf-8"}, dataDir = "./data/";

function readFileContentsSync(fileName) {
  return fs.readFileSync(dataDir+fileName, options)
}

function readFileContentsAsync(fileName) {
  fs.readFile(dataDir+fileName, options, function(err, data) {
    if(err) {
      console.error('Error : ' + err);
    }
    console.log(data);
  });
}

var content = readFileContentsSync(args.file);
console.log(content);
console.log("Read asynchronously!");
readFileContentsAsync(args.file);
