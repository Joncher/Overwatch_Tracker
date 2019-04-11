import React, { Component } from "react";
import { Card, Container, Grid } from "semantic-ui-react";
import GameCard from "../components/GameCard";

const arrayOfCards = [];
class MatchHistory extends Component {
  state = {
    array: []
  };
  componentDidMount(arrayOfCards) {
    arrayOfCards = fetch(
      `http://localhost:3001/api/v1/games/${localStorage.userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      }
    )
      .then(r => r.json())
      .then(r => r.map(game => <GameCard key={game.id} info={game} />))
      .then(r => this.setState({ array: r }));
  }

  render() {
    return (
      <Grid.Column className="gamecards main">
        <Card.Group fluid>{this.state.array}</Card.Group>
      </Grid.Column>
    );
  }
}
export default MatchHistory;
