import React, { Component, Suspense, lazy } from "react";
import { Button, Grid, Container, Divider } from "semantic-ui-react";

import Loaders from "../components/Loaders";
const NewsArticle = lazy(() => import("../components/NewsArticle"));

class Profile {
  render() {
    return (
      <Grid>
        <Grid.Row>STUFFFFFF</Grid.Row>
      </Grid>
    );
  }
}

export default Profile;
