const http=require('http');
const request=require('./request');
const server=http.createServer(request);

server.listen(3000);