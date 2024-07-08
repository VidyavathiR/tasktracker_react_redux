import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTasksToServer } from "../slices/tasksSlice";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    console.log({ title, description });
    dispatch(addTasksToServer({ title, description, deadline }));
    setTitle("");
    setDescription("");
    setDeadline("");
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(0);
  return (
    <section className="my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Deadline to complete task"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
            Add Task
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default AddTask;
