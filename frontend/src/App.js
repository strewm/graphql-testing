import React from "react";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';


// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql" // graphql server link
  }),
  credentials: "same-origin",
})

function AppRouter() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <h1>Hello world!</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client = {client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;