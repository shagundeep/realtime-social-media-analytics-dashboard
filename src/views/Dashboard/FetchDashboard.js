import React,{Component} from "react";
import Dashboard from "./Dashboard";
import {Button,ButtonToolbar} from "react-bootstrap";

class FetchDashboard extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
            dateRange: null,
            activeUsers: null,
            usersBarGraph:null,
            terrorPosts: null,
            comments: null,
            totalPosts: null,
            reactions: null,
            reactionsPieChart: null,
            usersMonthly: null
        };
        
    }

    componentWillMount() { 
      this.setState({activeUsers: 10,terrorPosts:10,totalPosts:20,reactions:20,comments:10,reactionsPieChart:{
        labels: ["Haha", "Angry", "Like", "Love", "Wow"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#ac64ad"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#da92db"
            ]
          }
        ]
      }
      });}

    toggleButton1State = () => {
      console.log("hi1")
      this.setState({activeUsers: 10,terrorPosts:10,totalPosts:20,reactions:20,comments:10,reactionsPieChart: {
        labels: ["Haha", "Angry", "Like", "Love", "Wow"],
        datasets: [
          {
            data: [50, 100, 40, 120],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#ac64ad"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#da92db"
            ]
          }
        ]
      }});
    }

    toggleButton2State = () => {
      this.setState({activeUsers: 20,terrorPosts:20,totalPosts:30,reactions:30,comments:20,reactionsPieChart: [300, 50, 100, 40, 120]});
    }

    toggleButton3State = () => {
      this.setState({activeUsers: 30,terrorPosts:30,totalPosts:30,reactions:30,comments:30});
    }

    toggleButton4State = () => {
      this.setState({activeUsers: 40,terrorPosts:40,totalPosts:40,reactions:40,comments:40});
    }

    render() {
      const {activeUsers,terrorPosts,totalPosts,reactions,comments,reactionsPieChart}=this.state;
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
            <Dashboard reactionsPieChart={reactionsPieChart} activeUsers={activeUsers} terrorPosts={terrorPosts} totalPosts={totalPosts} reactions={reactions} comments={comments}/>
            </>
        )
    }
}

export default FetchDashboard;