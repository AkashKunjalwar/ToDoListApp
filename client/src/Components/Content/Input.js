import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_TASK_MUTATION,
  QUERY_ALL_TASKS,
  UPDATE_TASK_MUTATION,
} from "../../ApolloClient/QueriesMutation";
import styles from "./Input.module.css";

const Input = () => {
  const { isUpdating, updatedTaskId, taskInput } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const { refetch } = useQuery(QUERY_ALL_TASKS);
  const [createTask] = useMutation(CREATE_TASK_MUTATION);
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION);

  const taskInputHandler = (e) => {
    dispatch({
      type: "UPDATE_INPUT_VALUE",
      payload: e.target.value,
    });
  };

  const taskSubmitHandler = (e) => {
    e.preventDefault();
    if (taskInput !== "") {
      Array.from(e.target.children).forEach((list) => {
        if (list.id === "addButton") {
          createTask({
            variables: {
              input: {
                task: taskInput,
              },
            },
          })
            .then(() => refetch())
            .then(() => dispatch({ type: "RESET_INPUT_VALUE" }));
        } else if (list.id === "updateButton") {
          updateTask({
            variables: {
              input: {
                id: updatedTaskId,
                updatedTask: taskInput,
              },
            },
          })
            .then(() => refetch())
            .then(() => {
              dispatch({ type: "RESET_INPUT_VALUE" });
              dispatch({ type: "RESET_ISUPDATING" });
            });
        }
      });
    }
  };

  return (
    <form className={styles.inputSection} onSubmit={taskSubmitHandler}>
      <input
        type="text"
        id="inputField"
        placeholder="Enter the To Do..."
        onChange={taskInputHandler}
        value={taskInput}
      />
      {isUpdating ? (
        <button id="updateButton"> update</button>
      ) : (
        <button id="addButton"> Add ToDo</button>
      )}
    </form>
  );
};

export default Input;
