const mongoose = require('mongoose');


function connectDb (){
mongoose.connect("mongodb://localhost:27017/revision").then(()=>{
    console.log("Connected to MongoDB");
})
}


module.exports = connectDb;a