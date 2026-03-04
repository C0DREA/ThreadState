import { useSelector, useDispatch } from "react-redux";
import { setSubreddit, setFilter } from "../../redux/uiSlice";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const dispatch = useDispatch();
  const { selectedSubreddit, filter } = useSelector((state) => state.ui);

  return (
    <div style={{
        width: "250px",
        padding: "20px",
        borderRight: "1px solid #e0e0e0",
        backgroundColor: '#ffffff',
      }}
    >
      <h3>Communities</h3>

      <p>Current: {selectedSubreddit}</p>

      <button onClick={() => dispatch(setSubreddit("reactjs"))}>
        r/reactjs
      </button>
      <button onClick={() => dispatch(setSubreddit("javascript"))}>
        r/javascript
      </button>

      {/*Added more subreddit buttons for testing further modifications to the UI*/}

      <button onClick={() => dispatch(setSubreddit('wallpapers'))}> 
        r/wallpapers
      </button>
      <button onClick={() => dispatch(setSubreddit('aww'))}>
        r/aww
      </button>
      <button onClick={() => dispatch(setSubreddit('technology'))}>
        r/technology
      </button>


      <hr />

      <h3>Filter</h3>
      <p>Current: {filter}</p>

      <button onClick={() => dispatch(setFilter("hot"))}>Hot</button>
      <button onClick={() => dispatch(setFilter("new"))}>New</button>
      <button onClick={() => dispatch(setFilter("top"))}>Top</button>
    </div>
  );
}

export default Sidebar;
