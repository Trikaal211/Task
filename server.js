const express = require("express");
const app  = express();
const rateCheck = require("./src/middleware/ratecheck.js");

app.use(rateCheck.Iplimiter);
app.get('/user',rateCheck.Userlimiter);
app.listen(3000,()=>{
    console.log("server running ") 
});
