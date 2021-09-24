import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";

import { TodoItem } from "./TodoItem";

export const ToDos = (props) => {
  return (
    <Container>
      <h3>Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to display!!!"
        : props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.sno}
                todoItem={todo}
                onDelete={props.onDelete}
              />
            );
          })}
    </Container>
  );
};

ToDos.prototype = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      sno: PropTypes.number,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
};
