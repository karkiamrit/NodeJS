const fs = require("fs");
const requestHandle = (req, res) => {
  const url = req.url;
  const method = req.method;
  if(url==="/")
  {
    res.write("<html>");
    res.write("<head>")
    res.write("<title>form</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form action='/create-user' method='POST'>"); 
    res.write("Enter Username:<input type='text' id='user' name='user'/><button type='submit' id='sub'>Submit</button>")
    res.write("</form>"); 
    res.write("</body>"); 
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head>")
    res.write("<title>assignment</title>");
    res.write("</head>");
    res.write("<body>"); 
    res.write("<ul>");
    res.write("<li>Ram</li>");
    res.write("<li>Sam</li>");
    res.write("<li>Hari</li>");
    res.write("</ul>"); 
    res.write("</body>"); 
    res.write("</html>");
    return res.end();
  }
  
  if(url==='/create-user' && method=="POST")
  {
    const values=[];
    req.on("data",(chunk)=>{
        values.push(chunk);
    })
   
    return req.on("end",()=>
    {
        const parsedData=Buffer.concat(values).toString();
        const message=parsedData.split("=")[1];
        console.log(message);
        res.statusCode = 302;        //yo tinta line le '/' ma redirect garekoxa 
        res.setHeader("Location", "/");
        return res.end();
    })
    
   
  }

  res.setHeader('Content-Type','text/html');
  res.write("<html>"); 
  res.write("<head>");
  res.write("</head>"); 
  res.write("<body>"); 
  res.write("<h1>Hello user</h1>");
  res.write("</body>"); 
  res.write("</html>");
  res.end();
};
module.exports = requestHandle;
