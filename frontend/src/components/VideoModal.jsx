import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function VideoModal({
  videos,
  selectedVideo,
  onClose
}) {
  if (!selectedVideo) return null;

  const initialIndex = videos.findIndex(
    (video) => video.id === selectedVideo.id
  );

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
          spaceBetween={20}
          slidesPerView={3}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <video
                src={video.videoUrl}
                controls
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

              <h4>{video.title}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoModal;