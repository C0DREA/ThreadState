import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../redux/postsSlice";

function PostFeed() {
  const dispatch = useDispatch();

  const { selectedSubreddit, filter } = useSelector((state) => state.ui);
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts({ subreddit: selectedSubreddit, filter }));
  }, [selectedSubreddit, filter, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
        <div>
            {posts.map((post) => (
            <div
                key={post.id}
                style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
                }}
            >
                <h3>{post.title}</h3>
                <p>{post.selftext}</p>
                <p>Author: {post.author}</p>
            </div>
            ))}
        </div>
    );
}

export default PostFeed;
