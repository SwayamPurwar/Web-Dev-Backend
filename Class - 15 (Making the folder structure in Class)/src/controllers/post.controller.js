const postModel = require("../models/post.model")

module.exports.createPost = async (req, res) =>{
    const {imageURL, caption} = req.body

    const post =    await postModel.create({
        imageURL,
        caption
    });

    res.status(201).json({
        message: "Post created Successfully",
        post
    });

}