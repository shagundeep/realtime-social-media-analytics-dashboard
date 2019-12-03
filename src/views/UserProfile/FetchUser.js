import React,{Component} from "react";
import UserProfile from "./UserProfile";
import {Button,ButtonToolbar} from "react-bootstrap";

class FetchUser extends Component {
    constructor() {
        super();
        this.state = {
            userData: null,
            state:null
        };
        
    }

    componentWillMount() { 
      this.setState({userData: [
        ["1", "Dakota Rice", "$36,738"],
        ["2", "Minerva Hooper", "$23,789"],
        ["3", "Sage Rodriguez", "$56,142"],
        ["4", "Philip Chaney", "$38,735"],
        ["5","Pranjali","$88,988"],
        ["6","Piii","ggg"]
      ]
      ,state: "Last 3 months"
      });}

    toggleButton1State = () => {
      console.log("hi1")
      this.setState({userData: [
        ["1", "Dakota Rice", "$36,738"],
        ["2", "Minerva Hooper", "$23,789"],
        ["3", "Sage Rodriguez", "$56,142"],
        ["4", "Philip Chaney", "$38,735"],
        ["5","Pranjali","$88,988"],
        ["6","Piii","ggg"]
      ],
      state: "Last 3 months"
      });
    }

    toggleButton2State = () => {
      this.setState({userData: [
        ["1", "aa", "$36,738"],
        ["2", "bb Hooper", "$23,789"],
        ["3", "cc Rodriguez", "$56,142"],
        ["4", "dd Chaney", "$38,735"],
        ["5","Pranjali","$88,988"],
        ["6","Piii","ggg"]
      ],
      state: "Last 6 months"
      });
    }

    toggleButton3State = () => {
      this.setState({userData: [
        ["1", "hh Rice", "$36,738"],
        ["2", "ff Hooper", "$23,789"],
        ["3", "ii Rodriguez", "$56,142"],
        ["4", "Philip Chaney", "$38,735"],
        ["5","Pranjali","$88,988"],
        ["6","Piii","ggg"]
      ],
      state: "Last 1 year"
      });
    }

    toggleButton4State = () => {
      this.setState({userData: [
        ["1", "pp Rice", "$36,738"],
        ["2", "qq Hooper", "$23,789"],
        ["3", "rr Rodriguez", "$56,142"],
        ["4", "Philip Chaney", "$38,735"],
        ["5","Pranjali","$88,988"],
        ["6","Piii","ggg"]
      ],
      state: "Last 2 year"
      });
    }

    render() {
      const {userData,state}=this.state;
        return(
            <>
            <div>
              <ButtonToolbar>
              <Button onClick={this.toggleButton1State} variant="primary" style={{width:"200px", margin :"15px", marginLeft: "90px",height:'40px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}} >3 Months</Button>
              <Button onClick={this.toggleButton2State} variant="secondary" style={{width:"200px", margin :"15px",height:'40px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}}>6 Months</Button>
              <Button onClick={this.toggleButton3State} variant="success" style={{width:"200px", margin :"15px",height:'40px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}}>1 Year</Button>
              <Button onClick={this.toggleButton4State} variant="warning" style={{width:"200px", margin :"15px",height:'40px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}}>2 Year</Button>
              </ButtonToolbar>
            </div>
           <UserProfile userData={userData} state={state}/>
            </>
        )
    }
}

export default FetchUser;