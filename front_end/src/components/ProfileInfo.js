import React from "react";
import { Container, Grid } from "semantic-ui-react";
import RankIcon from "./RankIcon";

function ProfileInfo() {
  return (
    <Grid fluid columns={3}>
      <Grid.Row className="centered ">
        <Grid.Column>
          <RankIcon iconClass="right" />
        </Grid.Column>
        <Grid.Column>
          <Container as="h1">{localStorage.username}</Container>
          <Container as="h2"> SR {localStorage.ranking}</Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ProfileInfo;
