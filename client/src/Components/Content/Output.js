import { useMutation, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import React, { Fragment } from "react";
import {
  DELETE_TASK_MUTATION,
  QUERY_ALL_TASKS,
} from "../../ApolloClient/QueriesMutation";
import styles from "./Output.module.css";

const Output = () => {
  const dispatch = useDispatch();
  const { data, refetch } = useQuery(QUERY_ALL_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION);

  const removeToDOHandler = (e) => {
    deleteTask({
      variables: { deleteTaskId: e.target.parentElement.parentElement.id },
    }).then(() => refetch());
    e.preventDefault();
  };

  const updateToDoHandler = (e) => {
    dispatch({
      type: "GET_UPDATED_TASK_ID",
      payload: e.target.parentElement.parentElement.id,
    });
    dispatch({
      type: "UPDATE_INPUT_VALUE",
      payload: e.target.parentElement.previousElementSibling.innerHTML,
    });
  };

  return (
    <Fragment>
      {data && data.tasks.length > 0 && (
        <div className={styles.toDoCollection}>
          <h1>To Do</h1>
          <div>
            <ul>
              {data.tasks.map((todoItem) => {
                return (
                  <li className={styles.row} key={todoItem.id} id={todoItem.id}>
                    <div className={styles.column1}>{todoItem.task}</div>
                    <div className={styles.column2}>
                      <button
                        onClick={updateToDoHandler}
                        className={styles.update}
                      >
                        Update
                      </button>
                      <button
                        onClick={removeToDOHandler}
                        className={styles.delete}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Output;
