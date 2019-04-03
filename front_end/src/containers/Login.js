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
import { connect } from "react-redux";

class Login extends Component {
  state = { active: true, username: "", password: "" };

  handleHide = () => {
    window.history.back();
  };

  render() {
    const { active } = this.state;

    return (
      <div>
        <Dimmer onClickOutside={this.handleHide} active>
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
                    <Image src="https://i.etsystatic.com/10773018/r/il/900b92/1131045143/il_794xN.1131045143_oef2.jpg" />{" "}
                    LOG IN TO OVERTRACK
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
export default connect()(Login);
