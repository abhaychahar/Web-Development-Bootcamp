var fs=require("fs");

fs.writeFile("Message.txt", "Hello from Node !", (err)=>{
    if(err) throw err;
    console.log("First line written");
})

fs.readFile("Message.txt", "utf-8", (err, data)=>{
    if(err) throw err;
    console.log(data);
})