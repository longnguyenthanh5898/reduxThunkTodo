import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { addTask } from "../redux/action";
import { Form, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const AddTask = () => {
  const [task, setTask] = useState();
  const dispatch = useDispatch();
  const taskChangeHandler = (e) => {
    setTask({ id: uuid(), task: e.target.value });
  };
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <h1>Name:</h1>
        <input
          type="text"
          onChange={taskChangeHandler}
          name="name"
          placeholder="Enter Name"
        />
      </FormGroup>
      <Button type="submit" color="primary" style={{ marginTop: "5px" }}>
        Submit
      </Button>
      <Link
        to="/"
        className="btn btn-danger"
        style={{ marginLeft: "5px", marginTop: "5px" }}
      >
        Cancel
      </Link>
    </Form>
  );
};

export default AddTask;
