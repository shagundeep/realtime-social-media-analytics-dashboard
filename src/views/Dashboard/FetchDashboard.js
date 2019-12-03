import React,{Component} from "react";
import Dashboard from "./Dashboard";
import {Button,ButtonToolbar} from "react-bootstrap";

class FetchDashboard extends Component {
    constructor() {
        super();
        this.state = {
            keywords: []
        };
    }

    componentDidMount() {}

    toggleButton1State = () => {

    }

    toggleButton2State = () => {

    }

    toggleButton3State = () => {

    }

    toggleButton4State = () => {

    }

    render() {
        return(
            <>
            <div>
              <ButtonToolbar>
              <Button variant="primary" style={{width:"200px", margin :"15px", marginLeft: "90px"}} >3 month</Button>
              <Button variant="secondary" style={{width:"200px", margin :"15px"}}>6 month</Button>
              <Button variant="success" style={{width:"200px", margin :"15px"}}>1 year</Button>
              <Button variant="warning" style={{width:"200px", margin :"15px"}}>2 year</Button>
              </ButtonToolbar>
            </div>
            <Dashboard/>
            </>
        )
    }
}

export default FetchDashboard;