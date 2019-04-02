import React, { Component } from "react";
import { Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";

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
    return <Grommet theme={theme}>Hey there</Grommet>;
  }
}

export default App;
