// Spinner component
// Displays a loading spinner while data is being fetched
// Used in PostDetail when comments are loading
// Simple CSS-based spinner animation

import styles from "./Spinner.module.css";

function Spinner() {
    // The spinner is a simple div with a CSS animation defined in Spinner.module.css
    return <div className={styles.spinner}></div>;
}

export default Spinner;