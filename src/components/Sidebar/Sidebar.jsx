import { useSelector, useDispatch } from "react-redux";
import { setSubreddit, setFilter } from "../../redux/uiSlice";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const dispatch = useDispatch();
  const { selectedSubreddit, filter } = useSelector((state) => state.ui);

  const subreddits = [
    { name: 'reactjs', label: 'ReactJS'},
    { name: 'gaming', label: 'Gaming'},
    { name: 'worldnews', label: 'World News'},
    { name: 'tech', label: 'Tech'},
    { name: 'memes', label: 'Memes'},
    { name: 'webdev', label: 'Web Dev'}
  ];

  const filters = ["hot", "new", "top"];

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sectionTitle}>Communities</h3>

      <p className={styles.current}>Current: {selectedSubreddit}</p>

      <div className={styles.buttonGroup}>
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
