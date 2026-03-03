import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/uiSlice";

const Header = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.ui.searchTerm);

    return (
        <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
            <h1>ThreadState</h1>

            <input 
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
        </div>
    );
};

export default Header;
