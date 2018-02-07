const http = require('http');

const PORT = 8081;

function handleRequest(request, response) {
     response.end("im working " + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT);
});
