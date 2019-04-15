import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Container, Divider } from "semantic-ui-react";

import Navbar from "./containers/Navbar";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Record from "./containers/Record";
import MatchHistory from "./containers/MatchHistory";
class App extends Component {
  render() {
    return (
      <Container fluid={true} style={{ padding: "1em" }}>
        <Navbar />
        <Divider hidden />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/record" component={Record} />
          <Route path="/history" component={MatchHistory} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    );
  }
}

export default App;
