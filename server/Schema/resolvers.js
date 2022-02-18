import ToDoList from "../FakeData.js";
import _ from "lodash";

const resolvers = {
  Query: {
    tasks: () => {
      return ToDoList;
    },
    task: (parent, args) => {
      const id = args.id;
      const task = _.find(ToDoList, { id: Number(id) });
      return task;
    },
  },
  Mutation: {
    createTask: (parent, args) => {
      const task = args.input;
      if (ToDoList.length < 1) {
        task.id = 1;
      } else {
        const lastId = ToDoList[ToDoList.length - 1].id;
        task.id = lastId + 1;
      }

      ToDoList.push(task);
      return task;
    },
    updateTask: (parent, args) => {
      const { id, updatedTask } = args.input;
      let taskUpdated;
      ToDoList.forEach((task) => {
        if (task.id === Number(id)) {
          task.task = updatedTask;
          taskUpdated = task;
        }
      });
      return taskUpdated;
    },
    deleteTask: (parent, args) => {
      const id = args.id;
      _.remove(ToDoList, (task) => task.id === Number(id));
      return null;
    },
  },
};

export default resolvers;
