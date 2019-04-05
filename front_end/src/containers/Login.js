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
  Message
} from "semantic-ui-react";
import logo from "../images/Login_Signup/logo.jpg";

class Login extends Component {
  state = { active: true, username: "", password: "" };

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.handleLogin(this.state);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    const { active } = this.state;

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
                  <Form size="large">
                    <Segment stacked>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        value={this.state.username}
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid
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
                        fluid
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
