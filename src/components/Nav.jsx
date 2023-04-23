import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = ({ onSearch, onRandom }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleClick}>Log Out</button>
      <br />
      <br />
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
      <br />
      <br />
      <SearchBar onSearch={onSearch} onRandom={onRandom} />
    </div>
  );
};

export default Nav;
