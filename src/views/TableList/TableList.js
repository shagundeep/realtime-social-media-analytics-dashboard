import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
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

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>News Pages</h4>
            <p className={classes.cardCategoryWhite}>
              Authenticated news pages listed
            </p>
          </CardHeader>
          <CardBody>
            <Table
            clickable={true}
              tableHeaderColor="primary"
              tableHead={["News Page Name", "Number of posts", "FB Link"]}
              tableData={[
                ["Times Now", "581","https://www.facebook.com/Timesnow/"],
                ["News 18", "658", "https://www.facebook.com/cnnnews18/"],
                ["Jand K now", "668", "https://www.facebook.com/jandknow/"],
                ["aaj tak", "10", "https://www.facebook.com/aajtak/"],
                ["ABP News", "461", "https://www.facebook.com/abpnews/"],
                ["Dainik Jagran", "669", "https://www.facebook.com/dainikjagran/"],
                ["Channel 4 news", "460", "https://www.facebook.com/Channel4News/"],
                ["greater kashmir", "462", "https://www.facebook.com/DailyGreaterKashmir/"],
                ["current news service", "659", "https://www.facebook.com/cnaonweb/"],
                ["Kashmir monitor", "535", "https://www.facebook.com/KashmirMonitor/"],
                ["India Today","319","https://www.facebook.com/IndiaToday/"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
     
    </GridContainer>
  );
}
