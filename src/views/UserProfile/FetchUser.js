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
        ["1", "Alejandro Sol", "https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Namrata Chandel", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["3", "Roshni K Sharma", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["4","Aisha Hina","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["5","Santosh Chowdhury Dasgupta","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["6","Riyaz Khan","https://www.facebook.com/profile.php?id=100004729335028&rc=p&tn_=R"],
        ["7","Yogendra Kumar Rao","https://www.facebook.com/yogendra.k.rao?rc=p&tn_=R"],
        ["8", "Smrithi Sreenivas", "https://www.facebook.com/smruthi.sreenivas.9?rc=p&tn_=R"]
      ],
      state: "Last 3 months"
      });}

    toggleButton1State = () => {
      console.log("hi1")
      this.setState({userData: [
        ["1", "Alejandro Sol", "https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Namrata Chandel", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["3", "Roshni K Sharma", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["4","Aisha Hina","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["5","Santosh Chowdhury Dasgupta","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["6","Riyaz Khan","https://www.facebook.com/profile.php?id=100004729335028&rc=p&tn_=R"],
        ["7","Yogendra Kumar Rao","https://www.facebook.com/yogendra.k.rao?rc=p&tn_=R"],
        ["8", "Smrithi Sreenivas", "https://www.facebook.com/smruthi.sreenivas.9?rc=p&tn_=R"]
      ],
      state: "Last 3 months"
      });
    }

    toggleButton2State = () => {
      this.setState({userData: [
        ["1", "Alejandro Sol", "https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Namrata Chandel", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["3", "Azan", "https://www.facebook.com/samm.sameer143?rc=p&tn=R"],
        ["4", "Roshni K Sharma", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["5","Aisha Hina","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["6", "Barbara Strauss", "https://www.facebook.com/barbara.strauss.940?rc=p&tn=R"],
        ["7","Santosh Chowdhury Dasgupta","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["8","Yogendra Kumar Rao","https://www.facebook.com/yogendra.k.rao?rc=p&tn_=R"]
        

      ],
      state: "Last 6 months"
      });
    }

    toggleButton3State = () => {
      this.setState({userData: [
        ["1", "Alejandro Sol", "https://www.facebook.com/alejandro.sol.7?rc=p&_tn=R"],
        ["2", "Barbara Strauss", "https://www.facebook.com/barbara.strauss.940?rc=p&tn=R"],
        ["3", "Namrata Chandel", "https://www.facebook.com/namrata.chandel?rc=p&tn=R'],"],
        ["4", "Azan", "https://www.facebook.com/samm.sameer143?rc=p&tn=R"],
        ["5", "Roshni K Sharma", "https://www.facebook.com/roshni.sharma1?rc=p&tn=R"],
        ["6","Aisha Hina","https://www.facebook.com/hinazam?rc=p&tn=R"],
        ["7","Santosh Chowdhury Dasgupta","https://www.facebook.com/santosh.dasgupta.1804?rc=p&tn=R"],
        ["8","Riyaz Khan","https://www.facebook.com/profile.php?id=100004729335028&rc=p&tn_=R"]
        

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
              {/* <Button onClick={this.toggleButton4State} variant="warning" style={{width:"200px", margin :"15px",height:'40px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}}>2 Year</Button> */}
              </ButtonToolbar>
            </div>
           <UserProfile userData={userData} state={state}/>
            </>
        )
    }
}

export default FetchUser;