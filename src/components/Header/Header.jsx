// Header component
// Displays the app logo and search input
// Connected to Redux to manage the search term state
// The search term is used to filter posts in the PostList component
// The search input updates the Redux state with the current search term as the user types

import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/uiSlice";
import styles from "./Header.module.css";

// Header component definition
const Header = () => {
  const dispatch = useDispatch();
  // Get the current search term from Redux state
  const searchTerm = useSelector((state) => state.ui.searchTerm);

  // Render the header with logo and search input
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

// Export the Header component as default
export default Header;
