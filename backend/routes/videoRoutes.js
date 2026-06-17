const express = require("express")
const { allVideos, likeVideo, shareVideo } = require("../controllers/videoController")

const videoRouter = express.Router()

videoRouter.get('/allVideos',allVideos)

videoRouter.post('/like',likeVideo)

videoRouter.post('/share',shareVideo)


module.exports = videoRouter