var http = require('http');

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
      resp.writeHead(200, options);
      resp.write("Awesome!!!");
      resp.end();
    } else {
      sendForbiddenResp(resp);
    }
  } else {
    sendForbiddenResp(resp);
  }
}

var server = http.createServer(handleHTTPReq);
server.listen(port, host);
