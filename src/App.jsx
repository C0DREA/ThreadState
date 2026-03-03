import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <Sidebar />
        <div style={{ padding: "20px" }}>
          <h2>Post Feed Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
