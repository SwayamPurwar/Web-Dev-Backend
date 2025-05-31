const express = require('express');
const app = express();
const userModel = require("./model/user.model")


app.get("/",async (req,res)=>{
    const data = {
        name: "user",
        age: 20,
        email:"user@doe.com",
        city: "Bhopal"
    }

    const user = await userModel.create(data);
    res.send(user);


})



app.get("/read",async (req,res)=>{

    const allUsers = await userModel.find();
    res.send(allUsers);

})


app.get("/update",async (req,res)=>{

    const email = "user@doe.com"

    const user = await userModel.findOneAndUpdate({email},{email:"dummy@dummy.com"},{new:true});
    res.send(user);

})



app.get("/delete",async (req,res)=>{

    const email = "dummy@dummy.com"

    userModel.findOneAndUpdate({email},{age:null},{new:true})
    .then((result) => {
        res.send(result)
    })

})



module.exports = app;