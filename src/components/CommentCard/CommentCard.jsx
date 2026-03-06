import styles from "./CommentCard.module.css";

function CommentCard({ comment }) {
    if (!comment.body) return null;
    
    return (
        <div className={styles.commentCard}>
            <h4 className={styles.author}>{comment.author}</h4>
            <p className={styles.body}>{comment.body}</p>
        </div>
    )
}

export default CommentCard;