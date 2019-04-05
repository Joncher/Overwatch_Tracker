import React, { Component } from "react";
import "../App.css";
import { Button, Checkbox, Form, Dimmer, Grid } from "semantic-ui-react";

const options = {
  result: [
    { text: "", value: "" },
    { text: "Won", value: "won" },
    { text: "Loss", value: "loss" },
    { text: "Draw", value: "draw" },
    { text: "Leave/Disconnect", value: "leave" }
  ]
};

class Record extends Component {
  render() {
    return (
      <Grid.Column className="center">
        <Form>
          <Form.Select
            fluid
            label="Result"
            options={options.result}
            placeholder=""
          />
          <Form.Input
            fluid
            type="number"
            label="Current Ranking"
            placeholder="Current Ranking"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Grid.Column>
    );
  }
}

export default Record;
