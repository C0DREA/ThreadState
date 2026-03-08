// CommentCard component
// Displays a single Reddit comment inside the PostDetail view
// Shows comment author and body text

import styles from "./CommentCard.module.css";

// Note: Reddit's API returns a lot of "comments" that are actually placeholders for more comments (kind: "more")
function CommentCard({ comment }) {
    // Filter out "more comments" placeholders and deleted comments
    if (!comment.body) return null;
    
    return (
        <div className={styles.commentCard}>
            <h4 className={styles.author}>{comment.author}</h4>
            <p className={styles.body}>{comment.body}</p>
        </div>
    )
}

export default CommentCard;