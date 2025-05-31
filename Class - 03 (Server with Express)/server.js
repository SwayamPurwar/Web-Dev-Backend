const express = require("express")

const app = express()


app.get("/", (req, res ) => {
    res.send("Hello from server")
})

app.get("/home", (req, res) =>{
    res.send("Hello from server on home")
})

app.get("/about", (req, res) => {
    res.send("Hello from server on about")
})

app.get("/contact", (req, res) => {
    res.send("Hello from server on contact")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
    
})

