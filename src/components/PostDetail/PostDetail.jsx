import { useDispatch, useSelector } from "react-redux";
import { setSelectedPost } from "../../redux/uiSlice";
import { useEffect } from "react";
import { fetchComments } from "../../redux/postsSlice";
import CommentCard from "../CommentCard/CommentCard";
import styles from "./PostDetail.module.css";

function PostDetail({ post }) {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);

  const updatedPost = posts.find((p) => p.id === post?.id);

  useEffect(() => {
    if (post) {
      dispatch(fetchComments(post.id));
    }
  }, [post, dispatch]);

  if (!post) {
    return <p>Select a post to view details</p>;
  }

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
        {!updatedPost?.comments ? (
          <p>Loading comments...</p>
        ) : updatedPost.comments.length > 0 ? (
          updatedPost.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <p>No comments yet</p>
      )}
      </div>
    </div>
  );
}

export default PostDetail;
