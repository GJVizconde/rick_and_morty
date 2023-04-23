import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Esta linea sirve para conectar nuestra App con la extension REDUX DEVTOOLS del navegador

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea sirve para que
  // podamos hacer peticiones a una Api/servidor
);

export default store;
