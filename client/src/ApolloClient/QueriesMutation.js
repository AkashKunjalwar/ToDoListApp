import { gql } from "@apollo/client";

const QUERY_ALL_TASKS = gql`
  query getTasks {
    tasks {
      id
      task
    }
  }
`;

const CREATE_TASK_MUTATION = gql`
  mutation createTask($input: createNewTaskInput!) {
    createTask(input: $input) {
      id
      task
    }
  }
`;

const UPDATE_TASK_MUTATION = gql`
  mutation updateTask($input: updateTaskInput!) {
    updateTask(input: $input) {
      id
      task
    }
  }
`;

const DELETE_TASK_MUTATION = gql`
  mutation deleteTask($deleteTaskId: ID!) {
    deleteTask(id: $deleteTaskId) {
      id
    }
  }
`;

export {
  QUERY_ALL_TASKS,
  CREATE_TASK_MUTATION,
  UPDATE_TASK_MUTATION,
  DELETE_TASK_MUTATION,
};
