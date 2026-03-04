function PostCard({ post }) {
  const isImage = post.post_hint === "image" && post.url?.startsWith("http");

  const hasText = post.selftext && post.selftext.length > 0;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "15px",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>{post.title}</h3>

      <p style={{ fontSize: "12px", color: "gray" }}>
        Posted by u/{post.author}
      </p>

      {isImage && (
        <img
          src={post.url}
          alt={post.title}
          style={{ 
                width: "100%",
                maxHeight: '500px',
                objectFit: 'contain',
                marginTop: "10px",
                borderRadius: '6px',
            }}
        />
      )}

      {hasText && <p style={{ marginTop: "10px" }}>{post.selftext}</p>}

      {!isImage && !hasText && (
        <a href={post.url} target="_blank" rel="noreferrer">
          View content
        </a>
      )}
    </div>
  );
}

export default PostCard;