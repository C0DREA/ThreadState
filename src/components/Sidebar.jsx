import { useSelector, useDispatch } from "react-redux";
import { setSubreddit, setFilter } from "../redux/uiSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const { selectedSubreddit, filter } = useSelector((state) => state.ui);

  return (
    <div style={{ width: "250px", padding: "20px", borderRight: "1px solid #ccc" }}>
      <h3>Communities</h3>

      <p>Current: {selectedSubreddit}</p>

      <button onClick={() => dispatch(setSubreddit("reactjs"))}>
        r/reactjs
      </button>
      <button onClick={() => dispatch(setSubreddit("javascript"))}>
        r/javascript
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
