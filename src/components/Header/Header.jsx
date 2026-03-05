import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/uiSlice";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.ui.searchTerm);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        ThreadState
      </div>

      <input
        className={styles.search}
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </header>
  );
};

export default Header;
