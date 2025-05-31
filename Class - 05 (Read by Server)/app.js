const express = require('express');
const fs = require('fs');

const app = express();

app.post("/", (req, res) => {
    fs.writeFile('data.txt', 'Hello World!', () => {
        console.log('File written successfully');
        res.send('File written successfully');
    });
});

app.get("/read", (req, res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        console.log(err);
        console.log(data);
        res.send(data);
    });         
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});