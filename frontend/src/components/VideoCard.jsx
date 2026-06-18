function VideoCard({ video, onVideoClick,handleLike,handleShare}) {
  return (
    <div
      onClick={() => onVideoClick(video)}
      style={{
        minWidth: "260px",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "0.2s",
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
  }} style={{ display: "flex", justifyContent: "space-between" }}
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