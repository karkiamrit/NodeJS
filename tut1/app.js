const http = require("http"); //import a global core module (ie http in this case)
const fs = require("fs"); //fs=filesystem
// function rqListener(req,res){

// }
// http.createServer(rqListener);
// // or
// http.createServer(function(res,req){

// }); anonymous fxn use
// or
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>ENTER MSG</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="inputmsg"/><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end(); //return garnu ko karan tala ko kei aru run nahos bhanna ho ra yo fxn bata exit garna ho
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end(); //yo tin line err bhitra rakhnu ko karan yo event sab sakesi balla fire garna ho block rokna respond garda
      }); //writeFileSync lekhe writeFile ko satta yelle execution block garxa next line of code until file is created
    }); //event handling data auna sath yo fire hunxa
  }
  // console.log(req); //using arrow fxn
  console.log(req.url, req.method, req.headers);
  // process.exit(); //hard exit garne event loop garideina kinaki server close bhaye kam lagena
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first node project</title></head>");
  res.write("<body>Hello</body>");
  res.write("</html>");
  res.end();
});
server.listen(3000); //keep this server alive till it listens server requests
