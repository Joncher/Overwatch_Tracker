import React from "react";
import { Image } from "semantic-ui-react";
import bronze from "../images/rank icons/120px-Badge_1_Bronze.png";
import silver from "../images/rank icons/120px-Badge_2_Silver.png";
import gold from "../images/rank icons/120px-Badge_3_Gold.png";
import platinum from "../images/rank icons/120px-Badge_4_Platinum.png";
import diamond from "../images/rank icons/120px-Badge_5_Diamond.png";
import master from "../images/rank icons/120px-Badge_6_Master.png";
import grandmaster from "../images/rank icons/120px-Badge_7_Grandmaster.png";

function RankIcon(props) {
  let iconLocation;
  if (localStorage.ranking < 1500) {
    iconLocation = bronze;
  } else if (localStorage.ranking < 2000) {
    iconLocation = silver;
  } else if (localStorage.ranking < 2500) {
    iconLocation = gold;
  } else if (localStorage.ranking < 3000) {
    iconLocation = platinum;
  } else if (localStorage.ranking < 3500) {
    iconLocation = diamond;
  } else if (localStorage.ranking < 4000) {
    iconLocation = master;
  } else {
    iconLocation = grandmaster;
  }

  return <Image src={iconLocation} className={`${props.iconClass}`} />;
}

export default RankIcon;
