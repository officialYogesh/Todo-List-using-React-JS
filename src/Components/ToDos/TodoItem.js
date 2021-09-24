import React from "react";

import Button from "react-bootstrap/Button";

export const TodoItem = ({ todoItem, onDelete }) => {
  return (
    <div>
      <h4>{todoItem.title}</h4>
      <p>{todoItem.desc}</p>
      <Button
        variant="danger"
        size="sm"
        onClick={() => {
          onDelete(todoItem);
        }}
      >
        Delete
      </Button>{" "}
    </div>
  );
};
