/*eslint-disable*/
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import WordCloud from 'react-d3-cloud';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const keywordsdata = [
  { text: 'Kill', value: Math.random() * 100000 },
  { text: 'Blast', value: Math.random() * 100000 },
  { text: 'Death', value: Math.random() * 100000},
  { text: 'Destruction', value: Math.random() * 100000},
  { text: 'Kashmir', value: Math.random() * 100000},
  { text: 'Anger', value: Math.random() * 100000},
  { text: 'Shoot', value: Math.random() * 100000},
  { text: 'Bomb', value: Math.random() * 100000},
  { text: 'Terror', value: Math.random() * 100000},
  { text: 'Violence', value: Math.random() * 100000},
];

const fontSizeMapper = word => Math.log2(word.value) * 4;
const rotate = word => word.value % 360;

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Keywords Word Cloud</h4>
      </CardHeader>
      <CardBody>
        <WordCloud data={keywordsdata}  fontSizeMapper={fontSizeMapper} rotate={rotate}/>
      </CardBody>
    </Card>
  );
}
