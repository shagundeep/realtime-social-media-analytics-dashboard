import React from "react";
import {Chart} from "react-google-charts";
import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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

const data = [
  ["State Code", "State", "Active Users"],
  ["IN-UT","Uttarakhand", 200],
  ["IN-JK","Jammu Kashmir", 700],
  ["IN-DN","Dadra and Nagar Haveli", 400],
  ["IN-DD","Daman and Diu", 500],
  ["IN-HR","Haryana",300],
  ["IN-AS","Assam", 600],
  ["IN-BR","Bihar", 700]
];

const options = {
  region: 'IN',
  resolution: 'provinces',
  displayMode: 'regions',
  colors: ['#CD5C5C','#800000']
};

const useStyles = makeStyles(styles);

class UserMap extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              }
            }
          ]}
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default function Maps() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Users Heat Map</h4>
      </CardHeader>
      <CardBody>
        <UserMap/>
      </CardBody>
    </Card>
  );
}
