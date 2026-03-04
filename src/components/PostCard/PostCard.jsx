function PostCard({ post }) {
  const isImage = post.post_hint === "image" && post.url?.startsWith("http");

  const hasText = post.selftext && post.selftext.length > 0;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{
        fontSize: '18px',
        marginBottom: '8px',
        lineHeight: '1.4',
      }}
      >
        {post.title}
      </h3>

      <p style={{
        fontSize: "13px",
        color: "#666",
        marginBottom: '12px',
      }}
      >
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
                marginBottom: '12px',
                borderRadius: '8px',
            }}
        />
      )}

      {hasText && (
        <p style={{
          marginTop: "10px",
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#333',
        }}
        >
          {post.selftext}
        </p>
      )}

      {!isImage && !hasText && (
        <a 
          href={post.url}
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#0079d3',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          View content
        </a>
      )}
    </div>
  );
}

export default PostCard;