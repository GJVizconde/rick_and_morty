import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
  //!! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //!! CREDENCIALES FAKE
  const email = "gilmer@gmail.com";
  const password = "123456";

  //* FUNCIONES

  const onSearch = (id) => {
    if (id < 827) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.data)
        .then((data) => {
          if (data?.name && !characters.find((char) => char.id === data.id)) {
            console.log("Entre");
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert("¡No se pueden duplicar!");
          }
        });
    } else {
      alert("El número debe ser menor que 826");
    }
  };

  const onRandom = () => {
    const id = Math.floor(Math.random() * 827);
    onSearch(id);
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (char) => char.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  const login = (userData, setUserData) => {
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
      setUserData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="App">
      {pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} onRandom={onRandom} />
      )}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/" element="" />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/:error" element={<Error />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
