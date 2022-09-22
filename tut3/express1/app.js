const express = require("express");

const app = express();

/*add product wala path agadi rakhnu ko karan 
chai / dubai ma xa ra yedi / paila rakhe tyo dui
palta jane bho so add product le ni / ma jana sako
so paila thulo wala jaile*/
app.use('/add-product',(req, res, next) => {
    console.log("hello");
    res.send("<h1>This is the add product section</h1>");
  });
//next ni garna hunna cz tala ko ni run hunxa
//node js ma return res.end() garejhai ho kindof
//aba add-product path ma mathi janxa natra baki sab ma / wala run hunxa talako  

//use() ma jati path ni add garna milxa
app.use('/',(req, res, next) => {
  console.log("hello");
  res.send("<h1>Hello</h1>");
});

app.listen(3000);
