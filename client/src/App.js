import { Provider } from "react-redux";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import store from "./Store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <div className="App">
      <Header />
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Content />
        </Provider>
      </ApolloProvider>

      <Footer />
    </div>
  );
}

export default App;
