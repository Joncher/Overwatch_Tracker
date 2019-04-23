import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dimmer,
  Header,
  Image,
  Segment,
  Grid,
  Form,
  Message
} from "semantic-ui-react";
import logo from "../images/Login_Signup/logo.jpg";

class Login extends Component {
  state = { username: "", password: "" };

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = () => {
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(r => {
        if (r.jwt) {
          localStorage.token = r.jwt;
          localStorage.userId = r.user.id;
          localStorage.username = r.user.username;
          localStorage.ranking = r.user.ranking;
          this.setState({
            username: "",
            password: ""
          });
          window.location.replace("http://localhost:3000/home");
        } else {
          window.alert("Incorrect Username or Password");
        }
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
              className="cform"
            >
              <Grid.Row verticalAlign="top">
                <Grid.Column style={{ maxWidth: 525 }}>
                  <Header
                    as="h2"
                    color="yellow"
                    textAlign="center"
                    className="head"
                  >
                    <Image src={logo} /> LOG IN TO OVERTRACK
                  </Header>
                  <Form size="large" autocomplete="off">
                    <Segment stacked>
                      <Form.Input
                        autocomplete="false"
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

                      <Button
                        color="yellow"
                        fluid={true}
                        size="large"
                        onClick={this.handleSubmit}
                      >
                        {" "}
                        Login{" "}
                      </Button>
                    </Segment>
                  </Form>
                  <Message>
                    {" "}
                    New here? <Link to="/signup">Sign Up</Link>{" "}
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Dimmer>
      </div>
    );
  }
}
export default Login;
