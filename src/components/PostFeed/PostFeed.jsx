import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/postsSlice";
import  PostCard  from "../PostCard/PostCard";
import PostDetail from "../PostDetail/PostDetail";
import styles from "./PostFeed.module.css";

function PostFeed() {
  const dispatch = useDispatch();

  const { selectedSubreddit, filter, searchTerm, selectedPost } = useSelector((state) => state.ui);
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts({ subreddit: selectedSubreddit, filter }));
  }, [selectedSubreddit, filter, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (selectedPost) {
    return <PostDetail post={selectedPost} />;
  }

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
        <div className={styles.feed}>
            {/* Show message if no posts match the search term */}
            {filteredPosts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            )}
        </div>
    );
}

export default PostFeed;
