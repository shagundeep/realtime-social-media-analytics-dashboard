import React,{Component} from "react";
import Dashboard from "./Dashboard";
import {Button,ButtonToolbar} from "react-bootstrap";

const buttonstyle = {
    width:"250px", 
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
        data: [15311, 16011, 100859,2277, 537,3149],
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
        "Barbara Strauss",
        "Arun Sharma",
        "Sohail Ahmed",
        "Marie Wani",
        "Ajayraj Gangawane",
        "Naeem Khan"
      ],
      series: [[106, 31, 24, 13, 12, 10]]
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
      this.setState({activeUsers: 396,terrorPosts:463,totalPosts:3173,reactions:185132,comments:13069,
        reactionsPieChart: reactionsChart,usersBarGraph: barChart});
    }

    toggleButton1State = () => {
        const data = [15311, 16011, 100859,2277, 537,3149];
        const labels = ["Barbara Strauss","Arun Sharma","Sohail Ahmed","Marie Wani","Ajayraj Gangawane","Naeem Khan"];
        const series = [[106, 31, 24, 13, 12, 10]];
        reactionsChart.datasets[0].data = data;
        barChart.data.labels = labels;
        barChart.data.series = series;
        setTimeout(() => {
          this.setState({activeUsers: 396,terrorPosts:463,totalPosts:3173,reactions:185132,comments:357,
            reactionsPieChart: reactionsChart, usersBarGraph: barChart});
        },700);
    }

    toggleButton2State = () => {
        const data = [15793,16159,229313,2645,644,4086];
        const labels = ["Barbara Strauss","Marie Wani","Datta Indrajit","Arun Sharma","Raj Shah","Amir Wani","Jan Umar"];
        const series = [[254,139,69,62,49,46,44]];
        reactionsChart.datasets[0].data = data;
        barChart.data.labels = labels;
        barChart.data.series = series;
        // api call
        setTimeout(() => {
          this.setState({activeUsers: 6676,terrorPosts:541,totalPosts:3730,reactions:310171,comments:12806,
            reactionsPieChart: reactionsChart,usersBarGraph: barChart});
        },1500);
    }

    toggleButton3State = () => {
        const data = [16845,17174,504612,3585,754,19301];
        const labels = ["Barbara Strauss","Marie Wani","Datta Indrajit","Arun Sharma","Raj Shah","Amir Wani","Jan Umar"];
        const series = [[254,139,69,62,49,46,44]];
        reactionsChart.datasets[0].data = data;
        barChart.data.labels = labels;
        barChart.data.series = series;
        setTimeout(() => {
          this.setState({activeUsers: 6676,terrorPosts:600,totalPosts:4109,reactions:627203,comments:12806,
            reactionsPieChart: reactionsChart,usersBarGraph: barChart});
        },2500);
    }

    // toggleButton4State = () => {
    //   this.setState({activeUsers: 40,terrorPosts:40,totalPosts:40,reactions:40,comments:40});
    // }

    render() {
      const {activeUsers,terrorPosts,totalPosts,reactions,comments,reactionsPieChart,usersBarGraph}=this.state;
        return(
            <>
            <div>
              <ButtonToolbar>
              <Button onClick={this.toggleButton1State} variant="primary" style={{width:"250px", margin :"15px", marginLeft: "90px",height:'40px',
                backgroundColor:'#00acc1',alignItems:'center',justifyContent:'center',borderRadius:15, color:'#FFFFFF',fontSize:'16px'}} >3 Months</Button>
              <Button onClick={this.toggleButton2State} variant="secondary" style={buttonstyle}>6 Months</Button>
              <Button onClick={this.toggleButton3State} variant="success" style={buttonstyle}>1 Year</Button>
              {/*<Button onClick={this.toggleButton4State} variant="warning" style={buttonstyle}>2 Year</Button>*/}
              </ButtonToolbar>
            </div>
              <Dashboard reactionsPieChart={reactionsPieChart} activeUsers={activeUsers} terrorPosts={terrorPosts} totalPosts={totalPosts} 
              reactions={reactions} comments={comments} usersBarGraph={usersBarGraph}/>
            </>
        )
    }
}

export default FetchDashboard;