import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./Components/Shared/Header";
import { Footer } from "./Components/Shared/Footer";
import { ToDos } from "./Components/ToDos/ToDos";
import { AddTodo } from "./Components/ToDos/AddTodo";
import { About } from "./Components/About/About";

function App() {
  let initTodo;

  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    initTodo = [];
  }

  const onDelete = (todoItem) => {
    setTodos(
      todos.filter((item) => {
        return item !== todoItem;
      })
    );
  };

  const addTodoItem = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 0;
    const newTodoItem = {
      sno,
      title,
      desc,
    };
    setTodos([...todos, newTodoItem]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My Todos List" />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <AddTodo addTodoItem={addTodoItem} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>
            );
          }}
        ></Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
