const express=require('express');
const app=express();
// app.use((req,res,next)=>{
//     console.log('Hello');
//     next();
// })
app.use('/users',(req,res,next)=>{
    console.log('Hilo');
    res.send("<h1>Hello there, You are in Users Section</h1>");
})
app.use('/',(req,res,next)=>{
    res.send("<h1>Hello from the top of the world</h1>");
})
app.listen(3000);