import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

function logger(req, res, next) {
  console.log("Request method : "+req.method);
  console.log("Request url : "+req.url);
  next();
}

app.use(logger);

app.get("/", (req, res)=>{
  res.send("Hello");
});

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});
