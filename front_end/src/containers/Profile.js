import React, { Component, Suspense, lazy } from "react";
import { Grid, Container } from "semantic-ui-react";
import ProfileInfo from "../components/ProfileInfo";
import Loaders from "../components/Loaders";

const BarGraph = lazy(() => import("../components/BarGraph"));
const LineGraph = lazy(() => import("../components/LineGraph"));

class Profile extends Component {
  state = {
    rankingData: [[0, 0]],
    roleData: [[0, 0]],
    heroData: [0, 0],
    filteredHeroData: [],
    mapData: [],
    filteredMapData: []
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
      .then(data =>
        this.setState({
          rankingData: data.map((game, index) => [index, game.new_ranking]),
          roleData: [
            data
              .filter(game => game.result != null)
              .map(game => game.hero_one_role)
              .filter(role => role === "Tank").length,
            data
              .filter(game => game.result != null)
              .map(game => game.hero_one_role)
              .filter(role => role === "Damage").length,
            data
              .filter(game => game.result != null)
              .map(game => game.hero_one_role)
              .filter(role => role === "Support").length,
            0
          ],
          heroData: data
            .filter(game => game.result != null)
            .map(game => game.hero_one)
            .sort(),

          filteredHeroData: data
            .filter(game => game.result != null)
            .map(game => game.hero_one)
            .filter(function(value, index, self) {
              return self.indexOf(value) === index;
            })
            .sort(),
          mapData: data
            .filter(game => game.result != null)
            .map(game => game.map)
            .sort(),
          filteredMapData: data
            .filter(game => game.result != null)
            .map(game => game.map)
            .filter(function(value, index, self) {
              return self.indexOf(value) === index;
            })
        })
      );
  }

  render() {
    console.log(this.state);
    return (
      <Container className="main centered">
        <ProfileInfo />
        <Grid columns={1} className="graphs">
          <Grid.Row className="graphs">
            <Grid.Column>
              <Suspense fallback={<Loaders />}>
                <BarGraph
                  name="Roles Played(Primary Hero)"
                  data={this.state.roleData}
                  labels={["Tank", "Damage", "Support"]}
                />
              </Suspense>
            </Grid.Column>
            <Grid.Column style={{ width: "100%" }}>
              <Suspense fallback={<Loaders />}>
                <LineGraph
                  name="Skill Rating"
                  data={this.state.rankingData
                    .map(point => point[1])
                    .concat(this.state.rankingData[0][1] - 50)}
                  labels={this.state.rankingData.map(point => point[0])}
                />
              </Suspense>
            </Grid.Column>
            <Grid.Column style={{ width: "100%" }}>
              <Suspense fallback={<Loaders />}>
                <BarGraph
                  name="Most Played Champion"
                  data={this.state.filteredHeroData
                    .map(
                      filteredHero =>
                        this.state.heroData.filter(
                          hero => hero === filteredHero
                        ).length
                    )
                    .concat(0)}
                  labels={this.state.filteredHeroData}
                />
              </Suspense>
            </Grid.Column>
            <Grid.Column style={{ width: "100%" }}>
              <Suspense fallback={<Loaders />}>
                <BarGraph
                  name="Most Played Map"
                  data={this.state.filteredMapData
                    .map(
                      filteredMap =>
                        this.state.mapData.filter(map => map === filteredMap)
                          .length
                    )
                    .concat(0)}
                  labels={this.state.filteredMapData}
                />
              </Suspense>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Profile;
