const app = require("./src/app")
const http = require('http');
const server = http.createServer(app);

const connectDb = require('./src/db/config');
connectDb();



server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})