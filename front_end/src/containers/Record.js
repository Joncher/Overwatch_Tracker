import React, { Component } from "react";
import { Form, Grid } from "semantic-ui-react";
import options from "../public/options.js";
import { Link } from "react-router-dom";
import "./App.css";

class Record extends Component {
  state = {
    result: "",
    new_ranking: 0,
    hero_one: "",
    hero_two: "",
    party_size: 1,
    map: "",
    details: "",
    user_id: localStorage.userId
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    fetch("http://localhost:3001/api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(r => {
        localStorage.ranking = r.game.new_ranking;
        window.location.href = "http://localhost:3000/history";
      });
  };

  render() {
    console.log(this.state);
    return (
      <Grid.Column className="centered main">
        <Form>
          <Form.Select
            fluid={true}
            label="Result"
            name="result"
            options={options.result}
            onChange={this.handleChange}
            placeholder=""
          />
          <Form.Input
            fluid={true}
            type="number"
            label="Current Ranking"
            name="new_ranking"
            onChange={this.handleChange}
          />
          <Form.Select
            fluid={true}
            label="Hero"
            name="hero_one"
            options={options.heros}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Select
            fluid={true}
            label="Secondary Hero"
            name="hero_two"
            options={options.heros}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Select
            fluid={true}
            label="Party Size"
            name="party_size"
            options={options.party}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Select
            fluid={true}
            label="Map"
            name="map"
            options={options.maps}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Input
            fluid={true}
            label="Details"
            name="details"
            onChange={this.handleChange}
          />

          <Form.Button content="Submit" onClick={this.handleSubmit} />
        </Form>
      </Grid.Column>
    );
  }
}

export default Record;
