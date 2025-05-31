const express = require("express")
const postRoutes = require("./routes/post.routes")

const app = express()
app.use(express.json())

app.use("/", postRoutes)




module.exports = app