import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PostFeed from "./components/PostFeed/PostFeed";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>

      <Header />

      <div className={styles.layout}>

        <Sidebar />

        <main className={styles.feed}>
          
          <PostFeed />
        </main>
      </div>
    </div>
  );
}

export default App;
