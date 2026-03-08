// PostCard component
// Displays a single Reddit post inside the feed
// Shows post title, author, upvotes, comment count, and preview text
// Clicking the card selects the post and loads its comments

import { useDispatch } from "react-redux";
import { setSelectedPost } from "../../redux/uiSlice";
import styles from "./PostCard.module.css";

// PostCard component definition
function PostCard({ post }) {
  // Determine if the post has an image or text content
  const isImage = post.post_hint === "image" && post.url?.startsWith("http");
  // Check if the post has selftext content
  const hasText = post.selftext && post.selftext.length > 0;

  const dispatch = useDispatch();

  // Handle card click to select the post
  return (
    <div className={styles.card} onClick={() => dispatch(setSelectedPost(post))}>
      
      <div className={styles.meta}>

        {/* Display subreddit information */}
        <span className={styles.subreddit}>r/{post.subreddit}</span>

        {/* Display the author of the post */}
        <span className={styles.author}>Posted by u/{post.author}</span>
      </div>

      {/* Display the post title */}
      <h3 className={styles.title}>{post.title}</h3>

      {/* If the post has an image, display it */}
      {isImage && (
        <img
          src={post.url}
          alt={post.title}
          className={styles.image}
        />
      )}

      {/* If the post has text content, display it */}
      {hasText && (
        <p className={styles.text}>
          {post.selftext}
        </p>
      )}

      {/* If the post has neither an image nor text content, display a link to the original post */}
      {!isImage && !hasText && (
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          View content
        </a>
      )}

      {/* Display the footer with upvotes and comment count */}
      <div className={styles.footer}>
        <span className={styles.votes}>🔼 {post.ups}</span>
        <span className={styles.comments}>💬 {post.num_comments} comments</span>
      </div>

    </div>
  );
}

// Export the PostCard component as the default export
export default PostCard;
