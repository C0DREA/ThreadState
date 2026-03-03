import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <Sidebar />
        <div style={{ padding: "20px", flex: 1 }}>
          <PostFeed />
        </div>
      </div>
    </div>
  );
}

export default App;
