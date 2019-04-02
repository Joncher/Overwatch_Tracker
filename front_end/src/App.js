import React, { Component } from "react";
import { Grommet } from "grommet";
import { Route, Switch } from "react-router-dom";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Switch>
          <Route path="/match-history" component={MatchHistory} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/record" component={Record} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Error} />
        </Switch>
      </Grommet>
    );
  }
}

export default App;
