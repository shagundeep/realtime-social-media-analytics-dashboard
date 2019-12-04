import React,{Component} from "react";
import Dashboard from "./Dashboard";
import {Button,ButtonToolbar} from "react-bootstrap";

const buttonstyle = {
    width:"200px", 
    margin :"15px",
    height:'40px',
    backgroundColor:'#00acc1',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15, 
    color:'#FFFFFF',
    fontSize:'16px'
}
const reactionsChart = {
    labels: ["Haha", "Angry", "Like", "Love", "Wow", "sigh"],
    datasets: [
      {
        data: [5175,8505,190078,2721,842,6053],
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
  };

const barChart = {
    data: {
      labels: [
        "Alejandro Sol",
        "Namrata Chandel",
        "Roshni K Sharma",
        "Aisha Hina",
        "Santosh Chowdhury Dasgupta",
        "Riyaz Khan",
        "Yogendra Kumar Rao",
        "Smrithi Sreenivas"
      ],
      series: [[129,37,23,22,21,20,20,18]]
    }
  };


class FetchDashboard extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
            state: null,
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
      this.setState({activeUsers: 2171,terrorPosts:467,totalPosts:3139,reactions:314353,comments:4579,
        reactionsPieChart: reactionsChart, usersBarGraph: barChart, dateRange: "Last 3 Months"});
    }

    toggleButton1State = () => {
      // last 3 months
        const data = [5175,8505,190078,2721,842,6053];
        const labels = ["Alejandro Sol","Namrata Chandel","Roshni K Sharma","Aisha Hina","Santosh Chowdhury Dasgupta","Riyaz Khan","Yogendra Kumar Rao","Smrithi Sreenivas"];
        const series = [[129,37,23,22,21,20,20,18]];
        reactionsChart.datasets[0].data = data;
        barChart.data.labels = labels;
        barChart.data.series = series;
        setTimeout(() => {
          this.setState({activeUsers: 2171,terrorPosts:467,totalPosts:3139,reactions:314353,comments:4579,
            reactionsPieChart: reactionsChart, usersBarGraph: barChart,dateRange: "Last 3 Months"});
        },700);
    }

    toggleButton2State = () => {
      //last 6 months
        const data = [6163,8657,317220,3089,945,6955];
        const labels = ["Alejandro Sol","Namrata Chandel","Azan","Roshni K Sharma","Aisha Hina","Barbara Strauss","Santosh Chowdhury Dasgupta","Yogendra Kumar Rao"];
        const series = [[129,37,26,23,22,21,21,20]];
        reactionsChart.datasets[0].data = data;
        barChart.data.labels = labels;
        barChart.data.series = series;
        // api call
        setTimeout(() => {
          this.setState({activeUsers: 2555,terrorPosts:543,totalPosts:3673,reactions:438016,comments:5229,
            reactionsPieChart: reactionsChart,usersBarGraph: barChart,dateRange: "Last 6 Months"});
        },1500);
    }

    toggleButton3State = () => {
      // last 1 year
        const data = [7307,9961,663518,4366,1101,23821];
        const labels = ["Alejandro Sol","Barbara Strauss","Namrata Chandel","Azan","Roshni K Sharma","Aisha Hina","Santosh Chowdhury Dasgupta","Riyaz Khan"];
        const series = [[129,51,37,26,23,22,21,20]];
        reactionsChart.datasets[0].data = data;
        barChart.data.labels = labels;
        barChart.data.series = series;
        setTimeout(() => {
          this.setState({activeUsers: 4200,terrorPosts:628,totalPosts:4151,reactions:868054,comments:7565,
            reactionsPieChart: reactionsChart,usersBarGraph: barChart,dateRange: "Last 1 Year"});
        },2500);
    }

    toggleButton4State = () => {
      //last 2 years
      const data = [8776,10978,987990,5614,1372,26420]
        const labels = ["Alejandro Sol","Barbara Strauss","Namrata Chandel","Azan","Roshni K Sharma","Aisha Hina","Santosh Chowdhury Dasgupta","Riyaz Khan"];
        const series = [[129,53,37,26,23,22,21,20]];
        reactionsChart.datasets[0].data = data;
        barChart.data.labels = labels;
        barChart.data.series = series;
        setTimeout(() => {
          this.setState({activeUsers: 5453,terrorPosts:735,totalPosts:4835,reactions:1240741,comments:9601,
            reactionsPieChart: reactionsChart,usersBarGraph: barChart, dateRange: "Last 2 Years"});
        },3000);
    }

    render() {
      const {activeUsers,terrorPosts,totalPosts,reactions,comments,reactionsPieChart,usersBarGraph,dateRange}=this.state;
        return(
            <>
            <b><center>Current data is on {dateRange}</center></b>
            <div>
              <ButtonToolbar>
              <Button onClick={this.toggleButton1State} variant="primary" style={{width:"200px", margin :"15px", marginLeft: "90px",height:'40px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}} >3 Months</Button>
              <Button onClick={this.toggleButton2State} variant="secondary" style={buttonstyle}>6 Months</Button>
              <Button onClick={this.toggleButton3State} variant="success" style={buttonstyle}>1 Year</Button>
              <Button onClick={this.toggleButton4State} variant="warning" style={buttonstyle}>2 Year</Button>
              </ButtonToolbar>
            </div>
              <Dashboard reactionsPieChart={reactionsPieChart} activeUsers={activeUsers} terrorPosts={terrorPosts} totalPosts={totalPosts} 
              reactions={reactions} comments={comments} usersBarGraph={usersBarGraph} dateRange={dateRange}/>
            </>
        )
    }
}

export default FetchDashboard;