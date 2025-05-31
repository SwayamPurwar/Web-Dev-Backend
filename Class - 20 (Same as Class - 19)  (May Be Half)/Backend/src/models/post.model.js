const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    imageURL: String,
    caption: String,
    likeCount: {
        type: Number,
        default: 0
    }
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel