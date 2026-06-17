function VideoCard({ video, onVideoClick,handleLike,handleShare}) {
  return (
    <div
      onClick={() => onVideoClick(video)}
      style={{
        minWidth: "250px",
        cursor: "pointer",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <video
        src={video.videoUrl}
        muted
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "10px" }}>
        <h4>{video.title}</h4>

       <button
  onClick={(e) => {
    e.stopPropagation();
    handleLike(video.id);
  }}
>
  ❤️ {video.likes}
</button>
      </div>
      <button
  onClick={(e) => {
    e.stopPropagation();
    handleShare(video.id);
  }}
>
  Share ({video.shares})
</button>
    </div>
  );
}

export default VideoCard;