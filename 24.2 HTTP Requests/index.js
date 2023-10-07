import express from "express";

var app=express();
var port=3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>About me</h1><p>I love music !</p>")
});

app.listen(port, ()=>{
    console.log(`The server is running at port ${port}.`);
});