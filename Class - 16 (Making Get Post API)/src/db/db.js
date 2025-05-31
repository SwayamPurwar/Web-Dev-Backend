const mongoose = require("mongoose");


function connectDB() {
    mongoose.connect("mongodb://localhost:27017/n22")
    .then(()=>{
        console.log("Connected to DB");
        
    })
    .catch((err) =>{
        console.log("Error to connecting to DB",err);
        
    })
}
module.exports = connectDB