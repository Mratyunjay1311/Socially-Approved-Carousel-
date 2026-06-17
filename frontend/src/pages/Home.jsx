import { useEffect, useState } from "react"
import api from "../services/api"
import VideoCard from "../components/VideoCard"
import VideoModal from "../components/VideoModal";

function Home(){

    const [videos,setVideos] = useState([])
const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        fetchVideos()
    },[])

    const fetchVideos = async()=>{
         try {
      const response = await api.get("/videos/allVideos");

      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
    }

    const handleVideoClick = (video) => {
  setSelectedVideo(video);
}

const closeModal = () => {
  setSelectedVideo(null);
}
const handleLike = async (videoId) => {
  try {

    const response = await api.post(
      "/videos/like",
      {
        videoId,
      }
    );

    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId
          ? {
              ...video,
              likes: response.data.likes,
            }
          : video
      )
    );

  } catch (error) {
    console.log(error);
  }
}

const handleShare = async (videoId) => {
  try {

    await navigator.clipboard.writeText(
      `${window.location.origin}/video/${videoId}`
    );

    const response = await api.post(
      "/videos/share",
      {
        videoId,
        platform: "copy-link",
      }
    );

    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId
          ? {
              ...video,
              shares: response.data.shares,
            }
          : video
      )
    );

    alert("Link copied!");
  } catch (error) {
    console.log(error);
  }
}
    return(
        <>
       <h2>Video Carousel</h2> 
       <div
  style={{
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    padding: "20px",
  }}
>
  {videos.map((video) => (
    <VideoCard
      key={video.id}
      video={video}
      onVideoClick={handleVideoClick}
       handleLike={handleLike}
       handleShare={handleShare}
    />
  ))}
</div>

<VideoModal
  videos={videos}
  selectedVideo={selectedVideo}
  onClose={closeModal}
/>
        </>
    )
}

export default Home