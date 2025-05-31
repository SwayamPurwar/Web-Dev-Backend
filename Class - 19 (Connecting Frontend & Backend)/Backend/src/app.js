const express = require("express")
const postRoutes = require("./routes/post.routes")
const app = express()
const cors = require("cors");

app.use(express.json())
app.use(cors());
app.use("/", postRoutes)




module.exports = app