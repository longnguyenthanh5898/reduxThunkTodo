import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTask } from "../redux/action";

const ListTask = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  return (
    <ListGroup>
      {tasks.length > 0 ? (
        <Fragment>
          {tasks.map((task) => (
            <ListGroupItem key={task.id}>
              <strong>{task.task}</strong>
              <div>
                <ButtonGroup>
                  <Link to={`/edit/${task.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    className="btn btn-danger"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </ListGroupItem>
          ))}
        </Fragment>
      ) : (
        <h1>No Task</h1>
      )}
    </ListGroup>
  );
};

export default ListTask;
