import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Container, Grid } from "semantic-ui-react";

import ErrorPage from "./containers/ErrorPage";
import Navbar from "./containers/Navbar";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
class App extends Component {
  render() {
    return (
      <Container fluid style={{ padding: "1em" }}>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    );
  }
}

export default App;
