import React, { Component } from "react";
import "./App.css";
import { Button, Checkbox, Form, Dimmer, Grid } from "semantic-ui-react";

const options = {
  result: [
    { text: "", value: "", key: "blank" },
    { text: "Won", value: "won", key: "Won" },
    { text: "Loss", value: "loss", key: "Loss" },
    { text: "Draw", value: "draw", key: "Draw" },
    { text: "Leave/Disconnect", value: "leave", key: "Leave" }
  ],
  heros: [
    { text: "Tank", value: "", key: "Tank" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B1"
    },
    { text: "D.Va", value: "dva", key: "D.Va" },
    { text: "Orisa", value: "orisa", key: "Orisa" },
    { text: "Reinhardt", value: "reinhardt", key: "Reinhardt" },
    { text: "Roadhog", value: "roadhog", key: "Roadhog" },
    { text: "Winston", value: "winston", key: "Winston" },
    { text: "Wrecking Ball", value: "wrecking_ball", key: "Wrecking Ball" },
    { text: "Zarya", value: "zarya", key: "Zarya" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B2"
    },
    { text: "Damage", value: "", key: "Damage" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B3"
    },
    { text: "Ashe", value: "ashe", key: "Ashe" },
    { text: "Bastion", value: "bastion", key: "Bastion" },
    { text: "Doomfist", value: "doomfist", key: "Doomfist" },
    { text: "Genji", value: "genji", key: "Genji" },
    { text: "Hanzo", value: "hanzo", key: "Hanzo" },
    { text: "Junkrat", value: "junkrat", key: "Junkrat" },
    { text: "McCree", value: "mccree", key: "McCree" },
    { text: "Mei", value: "mei", key: "Mei" },
    { text: "Pharah", value: "pharah", key: "Pharah" },
    { text: "Reaper", value: "reaper", key: "Reaper" },
    { text: "Soldier: 76", value: "soldier_76", key: "Soldier: 76" },
    { text: "Sombra", value: "sombra", key: "Sombra" },
    { text: "Symmetra", value: "symmetra", key: "Symmetra" },
    { text: "Torbjörn", value: "torbjorn", key: "Torbjörn" },
    { text: "Tracer", value: "tracer", key: "Tracer" },
    { text: "Widowmaker", value: "widowmaker", key: "Widowmaker" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B4"
    },
    { text: "Support", value: "", key: "Support" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B5"
    },
    { text: "Ana", value: "ana", key: "Ana" },
    { text: "Baptiste", value: "baptiste", key: "Baptiste" },
    { text: "Brigitte", value: "brigitte", key: "Brigitte" },
    { text: "Lúcio", value: "lucio", key: "Lúcio" },
    { text: "Mercy", value: "mercy", key: "Mercy" },
    { text: "Moira", value: "moira", key: "Moira" },
    { text: "Zenyatta", value: "zenyatta", key: "Zenyatta" }
  ],
  party: [
    { text: "", value: "" },
    { text: 1, value: 1 },
    { text: 2, value: 2 },
    { text: 3, value: 3 },
    { text: 4, value: 4 },
    { text: 5, value: 5 },
    { text: 6, value: 6 }
  ],
  maps: [
    { text: "Assault Maps", value: "", key: "Assault Maps" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B1"
    },

    { text: "Hanamura", value: "hanamura", key: "Hanamura" },
    {
      text: "Horizon Lunar Colony",
      value: "horizon",
      key: "Horizon Lunar Colony"
    },
    { text: "Paris", value: "paris", key: "Paris" },
    {
      text: "Temple of Anubis",
      value: "temple_of_anubis",
      key: "Temple of Anubis"
    },
    {
      text: "Volskaya Industries",
      value: "volskaya",
      key: "Volskaya Industries"
    },

    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B2"
    },
    { text: "Hybrid Maps", value: "", key: "Hybrid Maps" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B3"
    },
    { text: "Blizzard World", value: "blizzard_world", key: "Blizzard World" },
    { text: "Eichenwalde", value: "eichenwalde", key: "Eichenwalde" },
    { text: "Hollywood", value: "hollywood", key: "Hollywood" },
    { text: "King's Row", value: "king's_row", key: "King's Row" },
    { text: "Numbani", value: "numbani", key: "Numbani" },

    { text: "Escort Maps", value: "", key: "Escort Maps" },

    { text: "Dorado", value: "dorado", key: "Dorado" },
    { text: "Junkertown", value: "junkertown", key: "Junkertown" },
    { text: "Rialto", value: "rialto", key: "Rialto" },
    { text: "Route 66", value: "route_66", key: "Route 66" },
    {
      text: "Watchpoint: Gibraltar",
      value: "gibraltar",
      key: "Watchpoint: Gibraltar"
    },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B4"
    },
    { text: "Control Maps", value: "", key: "Control Maps" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B5"
    },
    { text: "Busan", value: "busan", key: "Busan" },
    { text: "Ilios", value: "ilios", key: "Ilios" },
    { text: "Lijiang Tower", value: "lijiang Tower", key: "Lijiang Tower" },
    { text: "Nepal", value: "nepal", key: "Nepal" },
    { text: "Oasis", value: "oasis", key: "Oasis" }
  ]
};
class Record extends Component {
  state = {
    Result: "",
    Ranking: 0,
    Hero: "",
    Hero2: "",
    Party: 1,
    Map: "",
    Details: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Grid.Column className="center">
        <Form>
          <Form.Select
            fluid
            label="Result"
            name="Result"
            options={options.result}
            onChange={this.handleChange}
            placeholder=""
          />
          <Form.Input
            fluid
            type="number"
            label="Current Ranking"
            name="Ranking"
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            label="Hero"
            name="Hero"
            options={options.heros}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            label="Secondary Hero"
            name="Hero2"
            options={options.heros}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            label="Party Size"
            name="Party"
            options={options.party}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Select
            key="map"
            fluid
            label="Map"
            name="Map"
            options={options.maps}
            placeholder=""
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Details"
            name="Details"
            onChange={this.handleChange}
          />
          <Form.Button content="Submit" onClick={this.handleSubmit} />
        </Form>
      </Grid.Column>
    );
  }
}

export default Record;
