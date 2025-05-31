const express = require("express")
const router = express.Router();
const postControllers = require("../controllers/post.controller")



router.post("/create-post", postControllers.createPost)
router.get("/get-post", postControllers.getPost)

module.exports = router;