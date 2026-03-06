import { useDispatch } from "react-redux";
import { setSelectedPost } from "../../redux/uiSlice";
import styles from "./PostDetail.module.css";

function PostDetail({ post }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.detailContainer}>
      <button
        className={styles.backButton}
        onClick={() => dispatch(setSelectedPost(null))}
      >
        ← Back
      </button>

      <h2>{post.title}</h2>

      <p className={styles.author}>
        Posted by u/{post.author}
      </p>

      {post.post_hint === "image" && (
        <img
          src={post.url}
          alt={post.title}
          className={styles.image}
        />
      )}

      {post.selftext && <p className={styles.text}>{post.selftext}</p>}

      <div className={styles.commentsSection}>
        <h3>Comments</h3>
        <p>Loading comments...</p>
      </div>
    </div>
  );
}

export default PostDetail;
