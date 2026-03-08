// PostFeed component
// Responsible for displaying the list of Reddit posts
// It fetches posts from the Redux store and renders PostCard components
// Also handles loading and error states, and shows PostDetail when a post is selected

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/postsSlice";
import  PostCard  from "../PostCard/PostCard";
import PostDetail from "../PostDetail/PostDetail";
import Spinner from "../Spinner/Spinner";
import styles from "./PostFeed.module.css";


function PostFeed() {
    // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Get the necessary state from the Redux store
  const { selectedSubreddit, filter, searchTerm, selectedPost } = useSelector((state) => state.ui);
  const { posts, loading, error } = useSelector((state) => state.posts);

  // Fetch posts whenever the selected subreddit, filter, or search term changes
  useEffect(() => {
    // Dispatch the fetchPosts action to load posts based on the current subreddit and filter
    dispatch(fetchPosts({ subreddit: selectedSubreddit, filter }));
  }, [selectedSubreddit, filter, dispatch]);

  // Handle loading and error states
  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  // If a post is selected, show the PostDetail component instead of the post feed
  if (selectedPost) {
    // Show detailed view of the selected post, including comments
    return <PostDetail post={selectedPost} />;
  }

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
);

    // Render the list of posts using PostCard components
  return (
        <div className={styles.feed}>
            {/* Show message if no posts match the search term */}
            {filteredPosts.length === 0 ? (
                <div className={styles.empty}>
                    <p>No posts found</p>
                    <p>Try a different search term</p>
                </div>
            ) : (
                // Map over the filtered posts and render a PostCard for each one
                filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            )}
        </div>
    );
}

// Export the PostFeed component as the default export of this module
export default PostFeed;
