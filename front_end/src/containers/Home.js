import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dimmer,
  Header,
  Icon,
  Image,
  Segment,
  Grid,
  Form,
  Message,
  Container,
  Divider
} from "semantic-ui-react";
import logo from "../images/Login_Signup/logo.jpg";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Grid columns={2} verticalAlign="top">
          <Grid.Row verticalAlign="top" />
          <Grid.Column>
            <Button fluid style={{ height: "35em" }}>
              Record A Game
            </Button>
          </Grid.Column>

          <Grid.Column>
            <Button fluid style={{ height: "35em", color: "green" }}>
              View Match History
            </Button>
          </Grid.Column>
        </Grid>
        <Divider horizontal />
      </Container>
    );
  }
}

export default Home;
