import { useSelector, useDispatch } from "react-redux";
import { setSubreddit, setFilter } from "../../redux/uiSlice";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const dispatch = useDispatch();
  const { selectedSubreddit, filter } = useSelector((state) => state.ui);

  const subreddits = [
    "reactjs",
    "javascript",
    "wallpapers",
    "aww",
    "technology",
  ];

  const filters = ["hot", "new", "top"];

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sectionTitle}>Communities</h3>

      <p className={styles.current}>Current: r/{selectedSubreddit}</p>

      <div className={styles.buttonGroup}>
        {subreddits.map((sub) => (
          <button
            key={sub}
            className={`${styles.button} ${
              selectedSubreddit === sub ? styles.active : ""
            }`}
            onClick={() => dispatch(setSubreddit(sub))}
          >
            r/{sub}
          </button>
        ))}
      </div>

      <hr className={styles.divider} />

      <h3 className={styles.sectionTitle}>Filter</h3>

      <p className={styles.current}>Current: {filter}</p>

      <div className={styles.buttonGroup}>
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

export default Sidebar;
