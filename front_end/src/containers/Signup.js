import React, { Component } from "react";
import {
  Button,
  Dimmer,
  Header,
  Icon,
  Image,
  Segment,
  Grid,
  Form
} from "semantic-ui-react";
import logo from "../images/Login_Signup/logo.jpg";

class Signup extends Component {
  state = { username: "", password: "", ranking: "" };

  handleBackToLogin = () => {
    window.location.replace("http://localhost:3000/login");
  };

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = () => {
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        ranking: this.state.ranking
      })
    })
      .then(r => r.json())
      .then(r => {
        if (r.error === "failed to create user") {
          window.alert(r.error);
        } else {
          localStorage.token = r.jwt;
          localStorage.userId = r.user.id;
          localStorage.username = r.user.username;
          window.location.href = "http://localhost:3000/home";
        }
      });
    this.setState({
      username: "",
      password: "",
      ranking: ""
    });
  };

  render() {
    return (
      <div>
        <Dimmer active>
          <div className="login-form">
            <Grid
              textAlign="center"
              style={{ height: "100%" }}
              verticalAlign="middle"
            >
              <Grid.Row verticalAlign="top">
                <Grid.Column style={{ maxWidth: 525 }}>
                  <Button
                    className="back"
                    icon
                    color="grey"
                    onClick={this.handleBackToLogin}
                  >
                    <Icon name="left arrow" />
                  </Button>

                  <Header
                    as="h2"
                    color="yellow"
                    textAlign="center"
                    className="head"
                  >
                    <Image src={logo} /> SIGN UP FOR OVERTRACK
                  </Header>
                  <Form size="large">
                    <Segment stacked>
                      <Form.Input
                        fluid={true}
                        icon="user"
                        iconPosition="left"
                        value={this.state.username}
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid={true}
                        icon="lock"
                        value={this.state.password}
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid={true}
                        value={this.state.ranking}
                        placeholder="Current Rank ex: 1500"
                        type="number"
                        name="ranking"
                        onChange={this.handleChange}
                      />

                      <Button
                        color="yellow"
                        fluid={true}
                        size="large"
                        onClick={this.handleSubmit}
                      >
                        {" "}
                        Sign up{" "}
                      </Button>
                    </Segment>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Dimmer>
      </div>
    );
  }
}
export default Signup;
