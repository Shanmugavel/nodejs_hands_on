//Parse command line arguments
var name = process.argv[2];
console.log("Hello "+ name);
process.argv.forEach(function(val, index, arr) {
  console.log(val + " at " + index);
});
