import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

const EjemploRedux = () => (
  <Provider store={store}>
    <div onClick={(event) => event.stopPropagation()}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
);

export default EjemploRedux;
