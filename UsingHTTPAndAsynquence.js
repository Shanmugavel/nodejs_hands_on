var http = require('http');
var ASQ = require('asynquence');
require('asynquence-contrib'); //no need to store in variable as it doesn't return anything

var host = "localhost";
var port  = 8081;
var options = { "Content-Type" : "text/plain"};

function sendForbiddenResp(resp) {
  resp.writeHead(403, options);
  resp.end();
}

function handleHTTPReq(req, resp) {
  if(req.method === "GET") {
    if (req.url === "/") {
      var seq = ASQ();
      seq.then(function(done) {
        setTimeout(function(){
          resp.writeHead(200, options);
          done();
        }, 1000);
      }).then(function(done) {
        setTimeout(function(){
          resp.write("Awesome!!!");
          done();
        }, 1000);
      }).val(function() {
        setTimeout(function(){
          resp.end();
        }, 1000);
      }).or(function(err) {
        console.error("Error : " + err);
      });
    } else {
      sendForbiddenResp(resp);
    }
  } else {
    sendForbiddenResp(resp);
  }
}

var server = http.createServer(handleHTTPReq);
server.listen(port, host);
