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
      this.setState({userData:[
        ["1", "Alejandro Sol","129", "https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Namrata Chandel","37", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["3", "Roshni K Sharma","23", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["4","Aisha Hina","22","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["5","Santosh Chowdhury Dasgupta","21","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["6","Riyaz Khan","20","https://www.facebook.com/profile.php?id=100004729335028&rc=p&tn_=R"],
        ["7","Yogendra Kumar Rao","20","https://www.facebook.com/yogendra.k.rao?rc=p&tn_=R"],
        ["8", "Smrithi Sreenivas","18", "https://www.facebook.com/smruthi.sreenivas.9?rc=p&tn_=R"]
      ],
      state: "Last 3 months"
      });}

    toggleButton1State = () => {
      console.log("hi1")
      this.setState({userData: [
        ["1", "Alejandro Sol","129", "https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Namrata Chandel","37", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["3", "Roshni K Sharma","23", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["4","Aisha Hina","22","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["5","Santosh Chowdhury Dasgupta","21","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["6","Riyaz Khan","20","https://www.facebook.com/profile.php?id=100004729335028&rc=p&tn_=R"],
        ["7","Yogendra Kumar Rao","20","https://www.facebook.com/yogendra.k.rao?rc=p&tn_=R"],
        ["8", "Smrithi Sreenivas","18", "https://www.facebook.com/smruthi.sreenivas.9?rc=p&tn_=R"]
      ],
      state: "Last 3 months"
      });
    }

    toggleButton2State = () => {
      this.setState({userData: [
        ["1", "Alejandro Sol", "129","https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Namrata Chandel","37", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["3", "Azan", "26","https://www.facebook.com/samm.sameer143?rc=p&tn=R"],
        ["4", "Roshni K Sharma","23", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["5","Aisha Hina","22","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["6", "Barbara Strauss","21", "https://www.facebook.com/barbara.strauss.940?rc=p&tn=R"],
        ["7","Santosh Chowdhury Dasgupta","19","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["8","Yogendra Kumar Rao","18","https://www.facebook.com/yogendra.k.rao?rc=p&tn_=R"]
        

      ],
      state: "Last 6 months"
      });
    }

    toggleButton3State = () => {
      this.setState({userData: [
        ["1", "Alejandro Sol", "140","https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Barbara Strauss","51", "https://www.facebook.com/barbara.strauss.940?rc=p&tn=R"],
        ["3", "Namrata Chandel","37", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["4", "Azan","26", "https://www.facebook.com/samm.sameer143?rc=p&tn=R"],
        ["5", "Roshni K Sharma","23", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["6","Aisha Hina","22","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["7","Santosh Chowdhury Dasgupta","21","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["8","Riyaz Khan","20","https://www.facebook.com/profile.php?id=100004729335028&rc=p&tn_=R"]
        

      ],
      state: "Last 1 year"
      });
    }

    toggleButton4State = () => {
      this.setState({userData:  [ ["1", "Alejandro Sol","156", "https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
      ["2", "Barbara Strauss","53", "https://www.facebook.com/barbara.strauss.940?rc=p&tn=R"],
      ["3", "Namrata Chandel", "41","https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
      ["4", "Azan", "37","https://www.facebook.com/samm.sameer143?rc=p&tn=R"],
      ["5", "Roshni K Sharma", "26","https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
      ["6","Aisha Hina","25","https://www.facebook.com/hinazam?rc=p&tn=R"],
      ["7","Santosh Chowdhury Dasgupta","23","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
      ["8","Riyaz Khan","23","https://www.facebook.com/profile.php?id=100004729335028&rc=p&tn_=R"]
      

      ],
      state: "Last 2 year"
      });
    }

    render() {
      const {userData,state}=this.state;
        return(
            <>
             <b><center>Current data is on {state}</center></b>
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