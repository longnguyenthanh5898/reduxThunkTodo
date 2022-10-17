import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { editTask } from "../redux/action";
import { Form, FormGroup, Button } from "react-bootstrap";

const EditTask = () => {
  const [selectedTask, setSelectedTask] = useState({ id: "", task: "" });

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const params = useParams();

  const currentId = params.id;
  console.log(currentId, params);
  const nameChangeHandler = (e) => {
    setSelectedTask({ ...selectedTask, task: e.target.value });
  };
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    dispatch(editTask(selectedTask));
    navigate("/");
  };

  useEffect(() => {
    const taskDetail = tasks.find((task) => task.id === currentId);
    setSelectedTask(taskDetail);
  }, [currentId, tasks]);

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <h1>Name</h1>
        <input
          type="text"
          onChange={nameChangeHandler}
          value={selectedTask.task}
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

export default EditTask;
