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
                ["Times Now", "22","https://mdbootstrap.com/previews/free-templates/react-admin-dashboard/"],
                ["News 18", "22", "Sinaai-Waas"],
                ["Jand K now", "22", "Baileux"],
                ["aaj tak", "22", "South"],
                ["ABP News", "22", "Feldkirchen in Kärnten"],
                ["Dainik Jagran", "22", "Gloucester"],
                ["Channel 4 news", "22", "Gloucester"],
                ["greater kashmir", "22", "Gloucester"],
                ["current news service", "22", "Gloucester"],
                ["Kashmir monitor", "22", "Gloucester"],
                ["India Today","ggg"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
     
    </GridContainer>
  );
}
