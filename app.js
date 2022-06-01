const http = require('http');
const userController = require('./Controllers/user.controller');

http.createServer(function (request, response) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE, PUT',
    'Access-Control-Max-Age': 2592000
  };
  response.writeHead(200, headers);
  response.write(JSON.stringify(userController[request.url](request)));
  response.end();
}).listen(3000);
