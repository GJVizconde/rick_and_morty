import { useState, useRef } from "react";

const SearchBar = ({ onSearch, onRandom }) => {
  const [id, setId] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        onClick={handleClick}
        ref={inputRef}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
          inputRef.current.focus();
        }}
      >
        Agregar
      </button>

      <button
        onClick={() => {
          onRandom();
        }}
      >
        Random
      </button>
    </div>
  );
};

export default SearchBar;
