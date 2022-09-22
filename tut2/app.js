//same tut1 ko but using modules/diff modules ma divide matra gareko
const http = require("http");
const routes=require('./routes');
const server = http.createServer(routes);
server.listen(3000);