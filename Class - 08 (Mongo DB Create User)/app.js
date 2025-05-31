const express = require("express");
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/mongoosetest-db").then(()=>{
    console.log("Connected to MongoDB");
    
})

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    age : Number
}) 

const userModel = mongoose.model("user", userSchema)

const app = express();

app.use(express.json())


app.get("/", (req, res) =>{
    res.send("Hello World")

})






app.post("/create-user", async (req, res)=>{
    console.log(req.body)

    const user = await userModel.create({
        username: "test",
        email: "test@example.com",
        age: 35

    })    

    return res.status(201).json({
        message:"User created successfully",
        user: user
    })

})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
})