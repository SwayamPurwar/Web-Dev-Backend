const express = require("express")
const postRoutes = require("./routes/post.routes")
const cors = require("cors");


const app = express()
app.use(cors());
app.use(express.json())
app.use("/", postRoutes)




module.exports = app