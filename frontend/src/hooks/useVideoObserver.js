import { useEffect } from "react";

function useVideoObserver(videoRef) {

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        const video = videoRef.current;

        if (!video) return;

        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }

      },
      {
        threshold: 0.6
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      observer.disconnect()
    };

  }, [videoRef])

}

export default useVideoObserver;