import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
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
      .then(r =>
        r.map(game => {
          return <GameCard key={game.id} info={game} />;
        })
      );
  }
  componentDidUpdate() {
    this.setState({
      array: arrayOfCards
    });
  }
  render() {
    console.log(arrayOfCards);
    return <Card.Group>{this.state.array}</Card.Group>;
  }
}
export default MatchHistory;
