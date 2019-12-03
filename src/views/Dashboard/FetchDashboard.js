import React,{Component} from "react";
import Dashboard from "./Dashboard";
import {Button,ButtonToolbar} from "react-bootstrap";

class FetchDashboard extends Component {
    constructor() {
        super();
        this.state = {
            users: []
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
              <Button variant="primary" style={{width:"200px", margin :"15px", marginLeft: "90px",height:'50px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}} >3 Months</Button>
              <Button variant="secondary" style={{width:"200px", margin :"15px",height:'50px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}}>6 Months</Button>
              <Button variant="success" style={{width:"200px", margin :"15px",height:'50px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}}>1 Year</Button>
              <Button variant="warning" style={{width:"200px", margin :"15px",height:'50px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}}>2 Year</Button>
              </ButtonToolbar>
            </div>
            <Dashboard/>
            </>
        )
    }
}

export default FetchDashboard;