import React, { Component } from "react";
import {
  Card,
  Image,
  Grid,
  Container,
  Button,
  Transition,
  List,
  Popup
} from "semantic-ui-react";
import "../containers/App.css";

const gameDatails = [];
class GameCard extends Component {
  setTimeToTimefFrom = time => {
    const timeFrom = Date.now() - Date.parse(time);
    let seconds = Math.floor((timeFrom / 1000) % 60);
    let minutes = Math.floor((timeFrom / (1000 * 60)) % 60);
    let hours = Math.floor((timeFrom / (1000 * 60 * 60)) % 24);
    let days = Math.floor((timeFrom / (1000 * 60 * 60 * 24)) % 30);

    if (hours > 24) {
      return days + " day(s)";
    } else if (hours > 0) {
      return hours + " hour(s)";
    }
    return minutes + " minute(s)";
  };

  render() {
    console.log(this.props.info);
    return (
      <Card className={this.props.info.result} fluid>
        <Grid columns={4} padded>
          <Grid.Row>
            <Grid.Column>
              <Image
                className="portrait"
                fluid
                src={require(`../images/portraits/${
                  this.props.info.hero_one
                }-select-portrait.png`)}
              />
              <Container as="h3" textAlign="center">
                {this.props.info.hero_one}
              </Container>
              <Container as="h3" textAlign="center">
                Primary Hero
              </Container>
            </Grid.Column>

            <Grid.Column>
              <Image
                className="portrait"
                fluid
                src={require(`../images/portraits/${
                  this.props.info.hero_two
                }-select-portrait.png`)}
              />
              <Container
                as="h3"
                textAlign="center"
                className={this.props.info.hero_two}
              >
                {this.props.info.hero_two}
              </Container>

              <Container as="h3" textAlign="center">
                Secondary Hero
              </Container>
            </Grid.Column>
            <Grid.Column width="eight">
              <Image
                className="map"
                fluid
                src={require(`../images/maps/${this.props.info.map}_map.jpg`)}
              />
              <Container as="h3" textAlign="center">
                {this.props.info.map}
              </Container>
              <Container as="h3" textAlign="center">
                Map
              </Container>
              <Container as="h1" textAlign="center">
                Played {this.setTimeToTimefFrom(this.props.info.created_at)} ago
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    );
  }
}

export default GameCard;
