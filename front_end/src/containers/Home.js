import React, { Component, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button, Grid, Container, Divider } from "semantic-ui-react";

import Loaders from "../components/Loaders";
const NewsArticle = lazy(() => import("../components/NewsArticle"));

const today = moment().format("YYYY-MM-DD ");
const weekAgo = moment()
  .subtract(7, "days")
  .format("YYYY-MM-DD ");

class Home extends Component {
  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q="%22overwatch"%22&language=en&from=${weekAgo}&to=${today}&pageSize=5&sortBy=relevancy&apiKey=ea985880356a4b5995f5e0c37af8a424`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(r => r.json())
      .then(
        r =>
          (r = r.articles.map(article => (
            <NewsArticle key={article.content} info={article} />
          )))
      )
      .then(r =>
        this.setState({
          news: r
        })
      );
  }

  state = {
    news: []
  };
  render() {
    console.log(this.state.news);
    return (
      <Container className="main">
        <Container as="h1" textAlign="center">
          Welcome to Overtrack
        </Container>
        <Divider />
        <Grid fluid={"true"} columns={2} verticalAlign="top">
          <Grid.Row verticalAlign="top" />
          <Grid.Column>
            <Link to="/record">
              <Button fluid={true} className="homebutton">
                Record A Game
              </Button>
            </Link>
          </Grid.Column>

          <Grid.Column>
            <Link to="/history">
              <Button fluid={true} className="homebutton">
                View Match History
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
        <Divider />
        <Grid>
          <Grid.Column>
            <Container as="h2" textAlign="center">
              News
            </Container>
            <Container as="h5" textAlign="center">
              Powered by News API
            </Container>
            <Divider />
          </Grid.Column>
        </Grid>
        <Suspense fallback={<Loaders />}>{this.state.news}</Suspense>
      </Container>
    );
  }
}

export default Home;
