import { useEffect, useRef, useState } from "react";
import useVideoObserver from "../hooks/useVideoObserver";

function VideoPlayer({ video,isActive}) {

    const [isPlaying, setIsPlaying] = useState(false);
const [isMuted, setIsMuted] = useState(true);
const [progress, setProgress] = useState(0);
const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);

  useVideoObserver(videoRef);

  useEffect(()=>{

   if(!videoRef.current) return

   if(isActive){
      videoRef.current.play()
   }else{
      videoRef.current.pause()
   }

},[isActive])

const handleTimeUpdate = () => {

  const video = videoRef.current;

  const percentage =
    (video.currentTime / video.duration) * 100;

  setProgress(percentage);
};

const togglePlay = () => {

  const video = videoRef.current;

  if (video.paused) {

    video.play();

    setIsPlaying(true);

  } else {

    video.pause();

    setIsPlaying(false);
  }
};

const toggleMute = () => {

  const video = videoRef.current;

  video.muted = !video.muted;

  setIsMuted(video.muted);
};

  return (
   <>

   {
  loading &&
  (
    <p>Loading...</p>
  )
}
    <video
    onWaiting={() => setLoading(true)}

onCanPlay={() => setLoading(false)}
    onTimeUpdate={handleTimeUpdate}
      ref={videoRef}
      src={video.videoUrl}
      controls
      muted
      style={{
        width: "100%",
        borderRadius: "10px",
      }}

      
    />

    <div
  style={{
    width: "100%",
    height: "5px",
    background: "#ddd",
  }}
>
  <div
    style={{
      width: `${progress}%`,
      height: "100%",
      background: "red",
    }}
  />
</div>

<button onClick={togglePlay}>
  {isPlaying ? "Pause" : "Play"}
</button>

<button onClick={toggleMute}>
  {isMuted ? "Unmute" : "Mute"}
</button>
   </>
  );
}

export default VideoPlayer;