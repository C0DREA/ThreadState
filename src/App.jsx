import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PostFeed from "./components/PostFeed/PostFeed";

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>

      <Header />

      <div style={{ 
        display: "flex",
        marginTop: "20px",
        flex: 1,
      }}>

        <Sidebar />

        <div style={{
          padding: "20px",
          flex: 1,
          backgroundColor: '#f6f7f8'
        }}>
          
          <PostFeed />
        </div>
      </div>
    </div>
  );
}

export default App;
