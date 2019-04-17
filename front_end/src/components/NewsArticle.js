import React, { Component } from "react";
import { Image, Grid, Container, Divider } from "semantic-ui-react";

class NewsArticle extends Component {
  handleClick = () => {
    window.open(`${this.props.info.url}`, "_blank");
  };

  render() {
    return (
      <Grid columns={2} onClick={this.handleClick}>
        <Grid.Row>
          <Grid.Column>
            <Image className="newsimage" src={this.props.info.urlToImage} />
          </Grid.Column>
          <Grid.Column>
            <Container as="h1">{this.props.info.title}</Container>
            <Divider />
            <Container as="h3"> {this.props.info.description}</Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default NewsArticle;
