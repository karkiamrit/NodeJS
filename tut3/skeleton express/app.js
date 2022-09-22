//THIS IS A EXPRESS JS CODE
// const http=require('http');
// tala app.listen garekole yo line hatauna milo internally tesle yo kam direct garxa

const express= require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("In the middleware");
    next();
});//middleware add garna
//next pani fxn ho pass bhako 


app.use((req,res,next)=>{
    console.log("In the middleware");
    res.send('<h1>Hello from express</h1>');
});

/*const server=http.createServer(app);
server.listen(3000);*/ //yo dui line ko satta 
app.listen(3000);