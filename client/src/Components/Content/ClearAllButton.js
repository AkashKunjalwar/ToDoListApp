import { useMutation, useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import {
  DELETE_TASK_MUTATION,
  QUERY_ALL_TASKS,
} from "../../ApolloClient/QueriesMutation";
import styles from "./ClearAllButton.module.css";

const ClearAllButton = () => {
  const { data, refetch } = useQuery(QUERY_ALL_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION);

  const clearAllHandler = (e) => {
    data.tasks.forEach((task) => {
      deleteTask({
        variables: {
          deleteTaskId: task.id,
        },
      }).then(() => refetch());
    });
    e.preventDefault();
  };
  return (
    <Fragment>
      {data && data.tasks.length > 0 && (
        <button onClick={clearAllHandler} className={styles.button}>
          Clear All
        </button>
      )}
    </Fragment>
  );
};

export default ClearAllButton;
