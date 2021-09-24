import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty!");
    } else {
      props.addTodoItem(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <Container className="my-3">
      <h3>Add a Todo item!</h3>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={desc}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
            placeholder="Enter description"
          />
        </Form.Group>
        <Button variant="success" type="submit" size="sm">
          Add Todo
        </Button>
      </Form>
    </Container>
  );
};
