// Sidebar component
// Displays a list of subreddits that users can select
// Selecting a subreddit triggers a Redux action to fetch posts from that subreddit

import { useSelector, useDispatch } from "react-redux";
import { setSubreddit, setFilter } from "../../redux/uiSlice";
import styles from "./Sidebar.module.css";

// The Sidebar component provides buttons for users to select different subreddits and filters.
function Sidebar() {
  const dispatch = useDispatch();
  const { selectedSubreddit, filter } = useSelector((state) => state.ui);

  // List of preloaded subreddits to display in the sidebar
  const subreddits = [
    { name: 'reactjs', label: 'ReactJS'},
    { name: 'gaming', label: 'Gaming'},
    { name: 'worldnews', label: 'World News'},
    { name: 'tech', label: 'Tech'},
    { name: 'memes', label: 'Memes'},
    { name: 'webdev', label: 'Web Dev'}
  ];

  // List of filters to allow users to sort posts by "hot", "new", or "top"
  const filters = ["hot", "new", "top"];

  // Render the sidebar with subreddit and filter selection buttons
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sectionTitle}>Communities</h3>

      {/* Display the currently selected subreddit */}
      <p className={styles.current}>Current: {selectedSubreddit}</p>

      {/* Subreddit selection buttons */}
      <div className={styles.buttonGroup}>
        {/* Map through the subreddits and create a button for each */}
        {subreddits.map((sub) => (
          <button
            key={sub.name}
            className={`${styles.button} ${
              selectedSubreddit === sub.name ? styles.active : ""
            }`}
            onClick={() => dispatch(setSubreddit(sub.name))}
          >
            {sub.label}
          </button>
        ))}
      </div>
      
      <hr className={styles.divider} />
      
      {/* Filter section */}
      <h3 className={styles.sectionTitle}>Filter</h3>

      <p className={styles.current}>Current: {filter}</p>

      <div className={styles.buttonGroup}>
        {/* Map through the filters and create a button for each */}
        {filters.map((f) => (
          <button
            key={f}
            className={`${styles.button} ${
              filter === f ? styles.active : ""
            }`}
            onClick={() => dispatch(setFilter(f))}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

// Export the Sidebar component as the default export of this module
export default Sidebar;
