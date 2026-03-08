// PostDetail component
// Displays detailed information about a selected Reddit post
// Shows post title, author, image (if available), and selftext
// Also fetches and displays comments for the post using CommentCard components
// Connected to Redux to manage the selected post and comments state

import { useDispatch, useSelector } from "react-redux";
import { setSelectedPost } from "../../redux/uiSlice";
import { useEffect } from "react";
import { fetchComments } from "../../redux/postsSlice";
import CommentCard from "../CommentCard/CommentCard";
import Spinner from "../Spinner/Spinner";
import styles from "./PostDetail.module.css";

function PostDetail({ post }) {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Get the list of posts from the Redux store
  const posts = useSelector((state) => state.posts.posts);

  // Find the updated post in the Redux store to get the latest comments
  const updatedPost = posts.find((p) => p.id === post?.id);

  // When the component mounts or when the selected post changes, fetch comments for the post
  useEffect(() => {
    // If there is a selected post, dispatch the fetchComments action to load its comments
    if (post) {
      dispatch(fetchComments(post.id));
    }
  }, [post, dispatch]);

  // If no post is selected, display a message prompting the user to select a post
  if (!post) {
    return <p>Select a post to view details</p>;
  }

  // Render the post details and comments
  return (
    <div className={styles.detailContainer}>
      {/* Back button to navigate back to the post feed */}
      <button
        className={styles.backButton}
        onClick={() => dispatch(setSelectedPost(null))}
      >
        ← Back
      </button>

      {/* Post title */}
      <h2>{post.title}</h2>

      {/* Post author */}
      <p className={styles.author}>
        Posted by u/{post.author}
      </p>

      {/* Post image (if available) */}
      {post.post_hint === "image" && (
        <img
          src={post.url}
          alt={post.title}
          className={styles.image}
        />
      )}

      {/* Post selftext (if available) */}
      {post.selftext && <p className={styles.text}>{post.selftext}</p>}

      {/* Comments section */}
      <div className={styles.commentsSection}>
        <h3>Comments</h3>
        {!updatedPost?.comments ? (
          <Spinner />
        ) : updatedPost.comments.length > 0 ? (
          updatedPost.comments.map((comment) => (
            <div key={comment.id} className={styles.comments}>
              <CommentCard comment={comment} />
            </div>
          ))
        ) : (
          <p className={styles.noComments}>No comments yet</p>
      )}
      </div>
    </div>
  );
}

// Export the PostDetail component as the default export of this module
export default PostDetail;
