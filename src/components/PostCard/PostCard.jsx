import { useDispatch } from "react-redux";
import { setSelectedPost } from "../../redux/uiSlice";
import styles from "./PostCard.module.css";

function PostCard({ post }) {
  const isImage = post.post_hint === "image" && post.url?.startsWith("http");
  const hasText = post.selftext && post.selftext.length > 0;

  const dispatch = useDispatch();

  return (
    <div className={styles.card} onClick={() => dispatch(setSelectedPost(post))}>
      
      <div className={styles.meta}>
        <span className={styles.subreddit}>r/{post.subreddit}</span>
        <span className={styles.author}>Posted by u/{post.author}</span>
      </div>

      <h3 className={styles.title}>{post.title}</h3>

      {isImage && (
        <img
          src={post.url}
          alt={post.title}
          className={styles.image}
        />
      )}

      {hasText && (
        <p className={styles.text}>
          {post.selftext}
        </p>
      )}

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

      <div className={styles.footer}>
        <span className={styles.votes}>🔼 {post.ups}</span>
        <span className={styles.comments}>💬 {post.num_comments} comments</span>
      </div>

    </div>
  );
}

export default PostCard;
