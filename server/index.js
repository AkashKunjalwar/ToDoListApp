import { ApolloServer } from "apollo-server";
import typeDefs from "./Schema/typedefs.js";
import resolvers from "./Schema/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  const uri = "http://localhost:4000/";
  console.log(`Your API is running at ${uri}`);
});
