import { createStore } from "redux";

const initialState = {
  taskInput: "",
  updatedTaskId: "",
  isUpdating: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_INPUT_VALUE") {
    state.taskInput = action.payload;
    return {
      taskInput: state.taskInput,
      updatedTaskId: state.updatedTaskId,
      isUpdating: state.isUpdating,
    };
  }
  if (action.type === "RESET_INPUT_VALUE") {
    state.taskInput = "";
    return {
      taskInput: state.taskInput,
      updatedTaskId: state.updatedTaskId,
      isUpdating: state.isUpdating,
    };
  }
  if (action.type === "GET_UPDATED_TASK_ID") {
    state.updatedTaskId = action.payload;
    state.isUpdating = true;
    return {
      taskInput: state.taskInput,
      updatedTaskId: state.updatedTaskId,
      isUpdating: state.isUpdating,
    };
  }
  if (action.type === "RESET_ISUPDATING") {
    state.updatedTaskId = "";
    state.isUpdating = false;
    return {
      taskInput: state.taskInput,
      updatedTaskId: state.updatedTaskId,
      isUpdating: state.isUpdating,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
