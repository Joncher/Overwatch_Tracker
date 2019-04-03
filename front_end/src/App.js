import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Container } from "semantic-ui-react";

import ErrorPage from "./containers/ErrorPage";
import Navbar from "./containers/Navbar";
import Login from "./containers/Login";
class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
