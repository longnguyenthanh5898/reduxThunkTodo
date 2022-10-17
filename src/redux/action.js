export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = (task) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addTaskAsync(task));
    }, 2000);
  };
};
export const addTaskAsync = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};
