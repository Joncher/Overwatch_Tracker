import React, { Component } from "react";
import {
  Card,
  Image,
  Grid,
  Container,
  Popup,
  Button,
  Icon,
  Divider
} from "semantic-ui-react";
import "../containers/App.css";

class GameCard extends Component {
  setTimeToTimefFrom = time => {
    const timeFrom = Date.now() - Date.parse(time);
    let seconds = Math.floor((timeFrom / 1000) % 60);
    let minutes = Math.floor((timeFrom / (1000 * 60)) % 60);
    let hours = Math.floor((timeFrom / (1000 * 60 * 60)) % 24);
    let days = Math.floor((timeFrom / (1000 * 60 * 60 * 24)) % 30);

    if (days > 0) {
      return days + " day(s)";
    } else if (hours > 0) {
      return hours + " hour(s)";
    } else if (minutes > 0) {
      return minutes + " minute(s)";
    } else {
      return seconds + " seconds";
    }
  };

  render() {
    console.log(this.props.info);
    return (
      <Card className={this.props.info.result} fluid={true}>
        <Grid columns={4} padded>
          <Grid.Row>
            <Grid.Column>
              <Image
                className="portrait"
                fluid={true}
                src={require(`../images/portraits/${
                  this.props.info.hero_one
                }-select-portrait.png`)}
              />
              <Container as="h3" className="cardtext" textAlign="center">
                {this.props.info.hero_one}
              </Container>
              <Container as="h3" className="cardtext" textAlign="center">
                Primary Hero
              </Container>
            </Grid.Column>

            <Grid.Column>
              <Image
                className="portrait"
                fluid={true}
                src={require(`../images/portraits/${
                  this.props.info.hero_two
                }-select-portrait.png`)}
              />
              <Container as="h3" textAlign="center" className="cardtext">
                {this.props.info.hero_two}
              </Container>

              <Container as="h3" textAlign="center" className="cardtext">
                Secondary Hero
              </Container>
            </Grid.Column>
            <Grid.Column width="eight">
              <Image
                className="map"
                fluid={true}
                src={require(`../images/maps/${this.props.info.map}_map.jpg`)}
              />
              <Container as="h3" textAlign="center" className="cardtext">
                {this.props.info.map}
              </Container>
              <Container as="h3" textAlign="center" className="cardtext">
                Map
              </Container>
              <Container as="h1" textAlign="center">
                Played {this.setTimeToTimefFrom(this.props.info.created_at)} ago
              </Container>
            </Grid.Column>
            <Popup
              style={{ position: "absolute", width: "500px", height: "25%" }}
              trigger={<Button icon="add" className="show" />}
              content={
                <Card fluid style={{ width: "100%", height: "100%" }}>
                  <Card.Content>
                    <Card.Header>Details:</Card.Header>
                    <Card.Description>
                      {this.props.info.details}
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                </Card>
              }
              basic
              verticalOffset={185}
              position="top right"
            />
          </Grid.Row>
        </Grid>
      </Card>
    );
  }
}

export default GameCard;
