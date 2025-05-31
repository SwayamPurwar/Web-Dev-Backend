const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/class01').then(() => {
    console.log('Connected to MongoDB'); 
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password: String
});
const User = mongoose.model('User', userSchema);
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post("/create", async (req, res) => {
    const user = await User.create({
        name: "John Doe",
        age: 30,
        email: "john@doe.com"
    })

    res.status(201).json(user)
})

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
})   