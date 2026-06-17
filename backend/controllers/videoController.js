const videos = require('../videos.json')
const fs = require('fs')

const allVideos = (req,res)=>{
    res.status(200).json(videos)
}

const likeVideo = (req,res)=>{
    const {videoId} = req.body

    const video = videos.find((v)=>v.id == videoId)

    if(!video){
        return res.status(404).json({
            success:false,
            message:"Video not found"
        })
    }

    video.likes += 1

    fs.writeFileSync(
  "./videos.json",
  JSON.stringify(videos, null, 2)
);

    res.status(200).json({
        success:true,
        likes:video.likes
    })
}

const shareVideo = (req,res)=>{
    const {videoId,platform} = req.body

    const video = videos.find((v)=>v.id == videoId)

    if(!video){
        return res.status(404).json({
            success:false,
            message:"Video not found"
        })
    }

    video.shares += 1

    fs.writeFileSync(
  "./videos.json",
  JSON.stringify(videos, null, 2)
);

    res.status(200).json({
        success:true,
        platform,
        shares:video.shares
    })
}


module.exports = {allVideos,likeVideo,shareVideo}