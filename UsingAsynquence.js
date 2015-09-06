//node UsingAsynquence --file=hw.txt
var fs = require('fs');
var args = require('minimist')(process.argv.slice(2));
var ASQ = require('asynquence');
require('asynquence-contrib'); //no need to store in variable as it doesn't return anything

var options  = { "encoding" : "utf-8"}, dataDir = "./data/";

function readContentsAsynchronously(fileName) {
  var seq = new ASQ();
  fs.readFile(dataDir+fileName, options, seq.errfcb());
  return seq;
}

function readFileContents(fileName) {
  readContentsAsynchronously(fileName)
  .val(function (content) {
    console.log(content);
  }).or(function(err) {
    console.error('Error : ' + err);
  });
}

readFileContents(args.file);
