import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/postsSlice";
import  PostCard  from "../PostCard/PostCard";

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
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostFeed;
