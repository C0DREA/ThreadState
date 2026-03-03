import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/uiSlice";

const Header = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSearchTerm('test'));
        console.log('Search term updated');
    };

    return (
        <div>
            <h1>ThreadState</h1>
            <button onClick={handleClick}>Test Redux</button>
        </div>
    );
};

export default Header;