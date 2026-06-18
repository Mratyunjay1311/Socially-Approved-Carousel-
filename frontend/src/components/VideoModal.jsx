import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

function VideoModal({
  videos,
  selectedVideo,
  onClose
}) {

    const [activeIndex,setActiveIndex] = useState(0)
  if (!selectedVideo) return null;

  const initialIndex = videos.findIndex(
    (video) => video.id === selectedVideo.id
  )

  

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          width: "90%",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <button onClick={onClose}>
          Close
        </button>

        <Swiper
          initialSlide={initialIndex}
          spaceBetween={2}
           spaceBetween={20}
          onSlideChange={(swiper)=>{
      setActiveIndex(swiper.activeIndex)
  }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
            <VideoPlayer video={video}  isActive={initialIndex === activeIndex}/>

              <h4>{video.title}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoModal;