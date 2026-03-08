// App.jsx
// Main application component
// Sets up the overall layout of the Reddit client app
// Contains the Header, Sidebar, and PostFeed components

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PostFeed from "./components/PostFeed/PostFeed";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* Top navigation header containing the app title and search bar */}
      <Header />
      {/* Main layout: sidebar (subreddits) + main content (posts) */}
      <div className={styles.layout}>
      {/* Sidebar with selectable subreddit categories */}
        <Sidebar />
        {/* Main content area where posts are displayed */}
        <main className={styles.feed}>
          <PostFeed />
        </main>
      </div>
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
