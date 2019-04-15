import React, { Component, lazy, Suspense } from "react";
import { Card, Grid, Dimmer, Loader } from "semantic-ui-react";
import GamePlaceholder from "../components/GamePlaceholder";
import LazyLoad from "react-lazyload";
import Loaders from "../components/Loaders";
const GameCard = lazy(() => import("../components/GameCard"));

class MatchHistory extends Component {
  state = {
    placeholder: [<Loaders />],
    array: []
  };
  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/games/${localStorage.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(r => r.json())
      .then(r => r.map(game => <GameCard key={game.id} info={game} />))
      .then(r => this.setState({ placeholder: [], array: r.reverse() }));
  }

  render() {
    return (
      <Grid.Column className="gamecards main">
        <Card.Group fluid={true}>
          <Suspense fallback={<Loaders />}>{this.state.array}</Suspense>
        </Card.Group>
      </Grid.Column>
    );
  }
}
export default MatchHistory;
