import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../action";
const initialState = {
  tasks: [],
};

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        // tasks: [...state.tasks, action.payload],
        tasks: [action.payload, ...state.tasks],
      };
    case EDIT_TASK:
      const updateTaskDetail = action.payload;
      const updateTask = state.tasks.map((task) => {
        if (task.id === updateTaskDetail.id) {
          return updateTaskDetail;
        } else {
          return task;
        }
      });
      return {
        // tasks: state.tasks.splice(action.payload, 1, action.payload.id),
        tasks: updateTask,
      };
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
