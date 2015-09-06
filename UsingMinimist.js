//Parse command line arguments as key value pair
//node UsingMinimist -n Shan -y2015 --level=Expert! --lang=nodejs arg1 arg2
//Seems hypen needs to be followed with only one char key!!
var args = require('minimist')(process.argv.slice(2));
var keyLessArgs = args._;
console.log(args)
console.log("Hello "+ args.n);
console.log("Welcome to the world of " + args.lang);
console.log("Year you started learning nodejs : "+ args.y);
console.log("Your Level : "+ args.level);
keyLessArgs.forEach(function(val, index, arr) {
  console.log(val + " at " + index);
});
