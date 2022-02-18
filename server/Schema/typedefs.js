import { gql } from "apollo-server";

const typeDefs = gql`
  type ToDo {
    id: ID!
    task: String!
  }
  type Tasks {
    tasks: [ToDo!]!
  }
  type Query {
    tasks: [ToDo!]!
    task(id: ID!): ToDo!
  }
  input createNewTaskInput {
    task: String!
  }
  input updateTaskInput {
    id: ID!
    updatedTask: String!
  }

  type Mutation {
    createTask(input: createNewTaskInput!): ToDo!
    updateTask(input: updateTaskInput!): ToDo!
    deleteTask(id: ID!): ToDo
  }
`;

export default typeDefs;
