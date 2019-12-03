/*eslint-disable*/
import React,{Component} from "react";
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => Math.log2(word.value) * 4;
const rotate = word => word.value % 360;

class FetchKeywords extends Component {
    constructor() {
        super();
        this.state = {
            keywords: []
        };
    }

    componentDidMount() {
        fetch('http://54.210.234.74:5000/fetch/keywords')
        .then(res => res.json())
        .then((result) => {
            this.setState({keywords: result.data.map(x =>({
                text: x[1],
                value: Math.random()*10000
            }))})
        }).catch(console.log)
    }

    render() {
        return(
            <WordCloud data={this.state.keywords.length > 0 ? this.state.keywords : []}  
            fontSizeMapper={fontSizeMapper} rotate={rotate}/>
        )
    }
}

export default FetchKeywords;