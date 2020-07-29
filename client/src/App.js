import React from "react";
import "./App.css";
import logo from "./logo.png";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import { Component } from "react";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";

// const { ApolloServer } = require("apollo-server");

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <div className="container">
              <img
                src={logo}
                alt="SpaceX"
                style={{ width: 300, display: "block", margin: "auto" }}
              />
              <Route exact path="/" component={Launches} />
              <Route exact path="/launch/:flight_number" component={Launch} />
            </div>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
