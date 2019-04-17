import React from "react";
import { Line } from "react-chartjs-2";
import { Container } from "semantic-ui-react";

function LineGraph(props) {
  return (
    <Container
      style={{
        postion: "relative",
        width: "100%",
        height: "300px",
        padding: "20px"
      }}
    >
      <Container> {props.name}</Container>
      <Line
        data={{
          labels: props.labels,
          datasets: [
            {
              label: props.name,
              backgroundColor: "rgb(53, 66, 133)",
              data: props.data
            }
          ]
        }}
        options={{ maintainAspectRatio: false }}
      />
    </Container>
  );
}

export default LineGraph;
