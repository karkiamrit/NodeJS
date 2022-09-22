const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>ENTER MSG</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="inputmsg"/><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  console.log(req.url, req.method, req.headers);
  
  res.write("<html>");
  res.write("<head><title>My first node project</title></head>");
  res.write("<body>Hello friendly user</body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

/* module.exports={
    handler: requestHandler,
    someText: 'Some hard coded text'
};*/ //in case multiple kura export garna pare

//yo garesi app.js ma server banauda (routes.handler)pass garna paro

//OR

//module.exports.handler= requestHandler;
//and module.exports.someText='Hi there';

//exports.handler= requestHandler;
//and exports.someText='Hi there';
