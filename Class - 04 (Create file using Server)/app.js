const express = require('express');
const fs = require("fs");

const app = express();

app.post("/", (req, res) =>{
  fs.writeFile("createdbyserver.txt", "Hello from Server", ()=>{
    console.log("File created");
    res.send("File created");
  })
})

app.listen(3000, () =>{
  console.log("Server is running on port 3000");
})